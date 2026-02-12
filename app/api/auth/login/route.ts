import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../../../models/User";
import { connectDB } from "../../../lib/db";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: Request) {
  await connectDB();

  const { email, password } = await req.json();

  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json(
      { error: "Invalid credentials" },
      { status: 401 }
    );
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return NextResponse.json(
      { error: "Invalid credentials" },
      { status: 401 }
    );
  }

  const token = jwt.sign(
    { userId: user._id },
    JWT_SECRET,
    { expiresIn: "7d" }
  );

  const response = NextResponse.json({
    message: "Login successful",
    user: {
      id: user._id,
      email: user.email,
    },
  });

  response.cookies.set("token", token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });

  return response;
}