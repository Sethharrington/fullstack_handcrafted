import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/db";
import Product from "../../../models/Product";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();

  const resolvedParams = await params;
  const id = resolvedParams.id;

  const product = await Product.findById(id);

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}