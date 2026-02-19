// import jwt from "jsonwebtoken";
// import User from "../models/User";
// import { connectDB } from "../lib/db";

// const JWT_SECRET = process.env.JWT_SECRET!;

// export async function getUserFromToken(req: Request) {
//   try {
//     // 1. Get cookie header
//     const cookieHeader = req.headers.get("cookie");
//     if (!cookieHeader) return null;

//     // 2. Find token in cookies
//     const token = cookieHeader
//       .split("; ")
//       .find((row) => row.startsWith("token="))
//       ?.split("=")[1];

//     if (!token) return null;

//     // 3. Verify token
//     const decoded = jwt.verify(token, JWT_SECRET) as {
//       userId: string;
//     };

//     // 4. Fetch user from DB
//     await connectDB();
//     const user = await User.findById(decoded.userId).select("-password");

//     return user;
//   } catch (error) {
//     return null;
//   }
// }
