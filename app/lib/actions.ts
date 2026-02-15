"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import postgres from "postgres";
// import { Artisan, Category, Product, Review, User } from "./definitions";

const sql = postgres(process.env.POSTGRES_URL!, {
  ssl: "require",
});

const UserSchema = z.object({
  firstname: z.string().min(2, "First name must be at least 2 characters long"),
  lastname: z.string().min(2, "Last name must be at least 2 characters long"),
  email: z.string().email("Please provide a valid email address"),
  username: z.string().min(3, "Username must be at least 3 characters long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  artisan_id: z.uuid(),
});

// export async function getArtisans(): Promise<Artisan[]> {
//   return sql`SELECT * FROM artisans`;
// }

// export async function getCategories(): Promise<Category[]> {
//   return sql`SELECT * FROM categories`;
// }

// export async function getProducts(): Promise<Product[]> {
//   return sql`SELECT * FROM products`;
// }

// export async function getReviews(): Promise<Review[]> {
//   return sql`SELECT * FROM reviews`;
// }

// export async function getUsers(): Promise<User[]> {
//   return sql`SELECT * FROM "user"`;
// }

// export async function createArtisan(
//   name: string,
//   description: string,
// ): Promise<Artisan> {
//   const [artisan] = await sql`
//     INSERT INTO artisans (name, description)
//     VALUES (${name}, ${description})
//     RETURNING *
//   `;
//   // return artisan as Artisan;
// }

// export async function createCategory(
//   name: string,
//   description: string,
//   note: string,
// ): Promise<Category> {
//   const [category] = await sql`
//     INSERT INTO categories (name, description, note)
//     VALUES (${name}, ${description}, ${note})
//     RETURNING *
//   `;
//   return category as Category;
// }

// export async function createProduct(
//   name: string,
//   price: number,
//   artisan_id: string,
//   category_id: string,
// ): Promise<Product> {
//   const [product] = await sql`
//       INSERT INTO products (name, price, artisan_id, category_id)
//       VALUES (${name}, ${price}, ${artisan_id}, ${category_id})
//       RETURNING *
//     `;
//   return product as Product;
// }

// export async function createReview(
//   email: string,
//   rating: number,
//   description: string,
//   product_id: number,
// ): Promise<Review> {
//   const [review] = await sql`
//     INSERT INTO reviews (email, rating, description, product_id)
//     VALUES (${email}, ${rating}, ${description}, ${product_id})
//     RETURNING *
//   `;
//   return review as Review;
// }

const CreateUser = UserSchema;
// const CreateUser = UserSchema.refine(
//   (data) => {
//     return sql`
//       SELECT COUNT(*) FROM "user" WHERE email = ${data.email}
//     `.then(([{ count }]) => count === "0");
//   },
//   {
//     message: "Email is already in use",
//   },
// ).refine(
//   (data) => {
//     return sql`
//       SELECT COUNT(*) FROM "user" WHERE username = ${data.username}
//     `.then(([{ count }]) => count === "0");
//   },
//   {
//     message: "Username is already taken",
//   },
// );
export async function createUser(formData: FormData) {
  const { firstname, lastname, email, username, password, artisan_id } =
    CreateUser.parse({
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      email: formData.get("email"),
      username: formData.get("username"),
      password: formData.get("password"),
      artisan_id: formData.get("artisan_id"),
    });

  await sql`
    INSERT INTO "user" (firstname, lastname, email, username, password, artisan_id)
    VALUES (${firstname}, ${lastname}, ${email}, ${username}, ${password}, ${artisan_id})
  `;
  revalidatePath("/login");
  redirect("/login");
}
