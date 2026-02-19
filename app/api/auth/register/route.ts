import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "../../../models/User";
import { connectDB } from "../../../lib/db";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { name, email, password, description } = await req.json();

    const existingUser = await User.findOne({
      $or: [{ email }],
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashedPassword,
      description,
    });

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'code' in error) {
      if (error.code === 11000) {
        return NextResponse.json(
          { error: "Email already exists" },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}