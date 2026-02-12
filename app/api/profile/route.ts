import { NextResponse } from "next/server";
import { connectDB } from "../../lib/db";
import User from "../../models/User";
import { getUserFromToken } from "../../lib/auth";

export async function GET(req: Request) {
  await connectDB();
  const user = await getUserFromToken(req);

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json(user);
}

export async function PUT(req: Request) {
  await connectDB();
  const user = await getUserFromToken(req);
  const { description } = await req.json();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await User.findByIdAndUpdate(user._id, {
    description,
  });

  return NextResponse.json({ success: true });
}