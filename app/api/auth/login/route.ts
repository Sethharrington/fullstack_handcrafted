import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "../../../models/User";
import { connectDB } from "../../../lib/db";

export async function POST(req: Request) {
  await connectDB();
  const { email, password } = await req.json();

  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  return NextResponse.json({
    message: "Login successful",
    user: { id: user._id, email: user.email },
  });
}