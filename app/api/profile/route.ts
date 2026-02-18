import { NextResponse } from "next/server";
import postgres from "postgres";
import { getUserFromToken } from "../../lib/auth";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function GET(req: Request) {
  const user = await getUserFromToken(req);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  // Fetch user info from Postgres
  const [dbUser] = await sql`
    SELECT u.id, u.firstname, u.lastname, u.email, u.username, a.id AS artisan_id, a.name AS artisan_name, a.description AS artisan_description
    FROM "user" u
    LEFT JOIN artisans a ON u.artisan_id = a.id
    WHERE u.id = ${user.id}
  `;

  if (!dbUser) return NextResponse.json({ error: "User not found" }, { status: 404 });

  // Transform for frontend
  const profile = {
    id: dbUser.id,
    name: `${dbUser.firstname} ${dbUser.lastname}`,
    email: dbUser.email,
    username: dbUser.username,
    artisan_id: dbUser.artisan_id,
    artisan_name: dbUser.artisan_name,
    description: dbUser.artisan_description,
  };

  return NextResponse.json(profile);
}