import { NextResponse } from "next/server";
import { connectDB } from "../../lib/db";
import Product from "../../models/Product";
import { getUserFromToken } from "../../lib/auth";

export async function GET(req: Request) {
  await connectDB();

  const user = await getUserFromToken(req);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const products = await Product.find({ artisan: user._id });
  return NextResponse.json(products);
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  await connectDB();
  const user = await getUserFromToken(req);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const { title, description, price } = await req.json();
  const product = await Product.findById(id);

  if (!product) return NextResponse.json({ error: "Product not found" }, { status: 404 });
  if (!product.artisan.equals(user._id))
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  product.title = title ?? product.title;
  product.description = description ?? product.description;
  product.price = price !== undefined ? Number(price) : product.price;

  await product.save();
  return NextResponse.json({ message: "Product updated", product });
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  await connectDB();
  const user = await getUserFromToken(req);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const product = await Product.findById(id);
  if (!product) return NextResponse.json({ error: "Product not found" }, { status: 404 });
  if (!product.artisan.equals(user._id))
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  await Product.findByIdAndDelete(id);
  return NextResponse.json({ message: "Product deleted" });
}

export async function POST(req: Request) {
  await connectDB();

  const user = await getUserFromToken(req);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { title, description, price } = await req.json();

  if (!title || !description || !price) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  const product = await Product.create({
    title,
    description,
    price: Number(price),
    artisan: user._id,
  });

  return NextResponse.json({ message: "Product added", product });
}