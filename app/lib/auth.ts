import jwt from "jsonwebtoken";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });
const JWT_SECRET = process.env.JWT_SECRET!;

export async function getUserFromToken(req: Request) {
  try {
    // 1️⃣ Get cookie header
    const cookieHeader = req.headers.get("cookie");
    if (!cookieHeader) return null;

    // 2️⃣ Find token in cookies
    const token = cookieHeader
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    if (!token) return null;

    // 3️⃣ Verify token
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };

    // 4️⃣ Fetch user from PostgreSQL
    const [user] = await sql`
      SELECT id, firstname, lastname, email, username, artisan_id
      FROM "user"
      WHERE id = ${decoded.userId}
    `;

    if (!user) return null;

    // Optional: combine first+last name
    return {
      id: user.id,
      name: `${user.firstname} ${user.lastname}`,
      email: user.email,
      username: user.username,
      artisan_id: user.artisan_id,
    };
  } catch (error) {
    return null;
  }
}