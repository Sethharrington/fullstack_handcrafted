import { NextResponse } from "next/server";
import { connectDB } from "../../lib/db";
import Review from "../../models/Review";

export async function GET(req: Request) {
  await connectDB();

  try {
    const reviews = await Review.find().sort({ date: -1 })

    const formatted = reviews.map(r => ({
      ...r.toObject(),
      date: r.date.toISOString().split("T")[0]
    }));

    return NextResponse.json(formatted);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  await connectDB();
  try {
    const data = await req.json();
    const newReview = await Review.create(data);
    return NextResponse.json(newReview, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to create review" }, { status: 500 });
  }
}