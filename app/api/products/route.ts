import { NextResponse } from "next/server";
import postgres from "postgres";
import { getUserFromToken } from "../../lib/auth";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function GET(req: Request) {
  const user = await getUserFromToken(req);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const products = await sql`
    SELECT * FROM product WHERE artisan_id = ${user.id}
  `;

  return NextResponse.json(products);
}

export async function POST(req: Request) {
  const user = await getUserFromToken(req);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { title, description, price } = await req.json();

  if (!title || !description || price === undefined)
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });

  const [product] = await sql`
    INSERT INTO product (title, description, price, artisan_id)
    VALUES (${title}, ${description}, ${Number(price)}, ${user.id})
    RETURNING *
  `;

  return NextResponse.json({ message: "Product added", product });
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await getUserFromToken(req);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const { title, description, price } = await req.json();

  // Check ownership
  const [existing] = await sql`
    SELECT * FROM product WHERE id = ${id}
  `;
  if (!existing) return NextResponse.json({ error: "Product not found" }, { status: 404 });
  if (existing.artisan_id !== user.id)
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const [updated] = await sql`
    UPDATE product
    SET 
      title = COALESCE(${title}, title),
      description = COALESCE(${description}, description),
      price = COALESCE(${price}, price)
    WHERE id = ${id}
    RETURNING *
  `;

  return NextResponse.json({ message: "Product updated", product: updated });
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await getUserFromToken(req);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;

  // Check ownership
  const [existing] = await sql`
    SELECT * FROM product WHERE id = ${id}
  `;
  if (!existing) return NextResponse.json({ error: "Product not found" }, { status: 404 });
  if (existing.artisan_id !== user.id)
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  await sql`
    DELETE FROM product WHERE id = ${id}
  `;

  return NextResponse.json({ message: "Product deleted" });
}
