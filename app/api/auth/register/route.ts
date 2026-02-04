import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "../../../models/User";
import { connectDB } from "../../../lib/db";

export async function POST(req: Request) {
  await connectDB();
  const { name, email, password } = await req.json();

  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return NextResponse.json({ message: "User registered" });
}
