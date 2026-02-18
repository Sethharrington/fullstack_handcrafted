"use server";
import {
  ArtisanSchema,
  ProductSchema,
  ReviewSchema,
  UserSchema,
  CategorySchema,
} from "./schemas";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, {
  ssl: "require",
});

const CreateArtisan = ArtisanSchema;
export async function createArtisan(formData: FormData) {
  const { name, description } = CreateArtisan.parse({
    name: formData.get("name"),
    description: formData.get("description"),
  });
  await sql`
    INSERT INTO artisans (name, description)
    VALUES (${name}, ${description})
  `;
  revalidatePath("/profile/manageArtisans");
  redirect("/profile/manageArtisans");
}

const CreateCategory = CategorySchema;
export async function createCategory(formData: FormData) {
  const { name, description, note } = CreateCategory.parse({
    name: formData.get("name"),
    description: formData.get("description"),
    note: formData.get("note"),
  });
  await sql`
    INSERT INTO categories (name, description, note)
    VALUES (${name}, ${description}, ${note})
    RETURNING *
  `;
  revalidatePath("/profile/manageCategories");
  redirect("/profile/manageCategories");
}
const CreateProduct = ProductSchema;
export async function createProduct(formData: FormData) {
  const { name, price, description, artisan_id, category_id } =
    CreateProduct.parse({
      name: formData.get("name"),
      price: parseFloat(formData.get("price") as string),
      description: formData.get("description") || "",
      artisan_id: formData.get("artisan_id"),
      category_id: formData.get("category_id"),
    });

  await sql`
      INSERT INTO product (name, price, description, artisan_id, category_id)
      VALUES (${name}, ${price}, ${description ?? null}, ${artisan_id}, ${category_id})
    `;
  revalidatePath("/profile/manageProducts");
  redirect("/profile/manageProducts");
}

const CreateReview = ReviewSchema;
export async function createReview(formData: FormData) {
  const { email, rating, description, product_id } = CreateReview.parse({
    email: formData.get("email"),
    rating: parseInt(formData.get("rating") as string),
    description: formData.get("description"),
    product_id: parseInt(formData.get("product_id") as string),
  });
  await sql`
    INSERT INTO review (email, rating, description, product_id)
    VALUES (${email}, ${rating}, ${description}, ${product_id})
    RETURNING *
  `;
  revalidatePath("/products");
  redirect("/products");
}

export async function createUser(formData: FormData) {
  const { firstname, lastname, email, username, password, artisan_id } =
    UserSchema.parse({
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      email: formData.get("email"),
      username: formData.get("username"),
      password: formData.get("password"),
      artisan_id: formData.get("artisan_id"),
    });

    const hashedPassword = await bcrypt.hash(password, 10);

  await sql`
    INSERT INTO "user" (firstname, lastname, email, username, password, artisan_id)
    VALUES (${firstname}, ${lastname}, ${email}, ${username}, ${hashedPassword}, ${artisan_id ?? null})
  `;
  revalidatePath("/login");
  redirect("/login");
}
