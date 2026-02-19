"use server";
import { signIn } from "@/auth";
import bcrypt from "bcrypt";
import { AuthError } from "next-auth";

import {
  ArtisanSchema,
  ProductSchema,
  ReviewSchema,
  UserSchema,
  CategorySchema,
} from "./schemas";
import {
  ArtisanState,
  ProductState,
  ReviewState,
  UserState,
  CategoryState,
} from "./states";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, {
  ssl: "require",
});

//////////////////////////////////////////////////////////
//                     CREATE RECORDS                   //
//////////////////////////////////////////////////////////
export async function createArtisan(
  prevState: ArtisanState,
  formData: FormData,
) {
  const validatedFields = ArtisanSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Artisan.",
    };
  }
  const { name, description } = validatedFields.data;
  try {
    await sql`
    INSERT INTO artisans (name, description)
    VALUES (${name}, ${description})
  `;
  } catch (error) {
    console.error("Error creating artisan:", error);
    return {
      message: "Failed to create artisan. Please try again.",
    };
  }
  revalidatePath("/profile/manageArtisans");
  redirect("/profile/manageArtisans");
}

export async function createCategory(
  prevState: CategoryState,
  formData: FormData,
) {
  const validatedFields = CategorySchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
    note: formData.get("note"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Category.",
    };
  }
  const { name, description, note } = validatedFields.data;
  try {
    await sql`
    INSERT INTO categories (name, description, note)
    VALUES (${name}, ${description}, ${note})
    RETURNING *
  `;
  } catch (error) {
    console.error("Error creating category:", error);
    return {
      message: "Failed to create category. Please try again.",
    };
  }
  revalidatePath("/profile/manageCategories");
  redirect("/profile/manageCategories");
}
export async function createProduct(
  prevState: ProductState,
  formData: FormData,
) {
  const validatedFields = ProductSchema.safeParse({
    name: formData.get("name"),
    price: parseFloat(formData.get("price") as string),
    description: formData.get("description") || "",
    artisan_id: formData.get("artisan_id"),
    category_id: formData.get("category_id"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Product.",
    };
  }
  const { name, price, description, artisan_id, category_id } =
    validatedFields.data;

  try {
    await sql`
      INSERT INTO product (name, price, description, artisan_id, category_id)
      VALUES (${name}, ${price}, ${description ?? null}, ${artisan_id}, ${category_id})
    `;
  } catch (error) {
    console.error("Error creating product:", error);
    return {
      message: "Failed to create product. Please try again.",
    };
  }
  revalidatePath("/profile/manageProducts");
  redirect("/profile/manageProducts");
}

export async function createReview(prevState: ReviewState, formData: FormData) {
  const validatedFields = ReviewSchema.safeParse({
    email: formData.get("email"),
    rating: parseInt(formData.get("rating") as string),
    description: formData.get("description"),
    product_id: parseInt(formData.get("product_id") as string),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Review.",
    };
  }
  const { email, rating, description, product_id } = validatedFields.data;
  try {
    await sql`
      INSERT INTO review (email, rating, description, product_id)
      VALUES (${email}, ${rating}, ${description}, ${product_id})
      RETURNING *
    `;
  } catch (error) {
    console.error("Error creating review:", error);
    return {
      message: "Failed to create review. Please try again.",
    };
  }
  revalidatePath("/products");
  redirect("/products");
}

export async function createUser(prevState: UserState, formData: FormData) {
  const validatedFields = UserSchema.safeParse({
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    email: formData.get("email"),
    username: formData.get("username"),
    password: formData.get("password"),
    artisan_id: formData.get("artisan_id"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create User.",
    };
  }
  const { firstname, lastname, email, username, password, artisan_id } =
    validatedFields.data;
  
  // Hash the password before storing
  const hashedPassword = await bcrypt.hash(password, 10);
  
  try {
    await sql`
    INSERT INTO "user" (firstname, lastname, email, username, password, artisan_id)
    VALUES (${firstname}, ${lastname}, ${email}, ${username}, ${hashedPassword}, ${artisan_id ?? null})
  `;
  } catch (error) {
    console.error("Error creating user:", error);
    return {
      message: "Failed to create user. Please try again.",
    };
  }
  revalidatePath("/login");
  redirect("/login");
}
//////////////////////////////////////////////////////////
//                     UPDATE RECORDS                   //
//////////////////////////////////////////////////////////
export async function updateArtisan(
  prevState: ArtisanState,
  id: string,
  formData: FormData,
) {
  const validatedFields = ArtisanSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Update Artisan.",
    };
  }
  const { name, description } = validatedFields.data;
  try {
    await sql`
    UPDATE artisans
    SET name = ${name}, description = ${description}
    WHERE id = ${id}
  `;
  } catch (error) {
    console.error("Error updating artisan:", error);
    return {
      message: "Failed to update artisan. Please try again.",
    };
  }
  revalidatePath("/profile/manageArtisans");
  redirect("/profile/manageArtisans");
}

export async function updateCategory(
  prevState: CategoryState,
  id: string,
  formData: FormData,
) {
  const validatedFields = CategorySchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
    note: formData.get("note"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Update Category.",
    };
  }
  const { name, description, note } = validatedFields.data;
  try {
    await sql`
    UPDATE categories
    SET name = ${name}, description = ${description}, note = ${note}
    WHERE id = ${id}
  `;
  } catch (error) {
    console.error("Error updating category:", error);
    return {
      message: "Failed to update category. Please try again.",
    };
  }
  revalidatePath("/profile/manageCategories");
  redirect("/profile/manageCategories");
}
export async function updateProduct(
  prevState: ProductState,
  formData: FormData,
) {
  const validatedFields = ProductSchema.safeParse({
    name: formData.get("name"),
    price: parseFloat(formData.get("price") as string),
    description: formData.get("description") || "",
    artisan_id: formData.get("artisan_id"),
    category_id: formData.get("category_id"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Update Product.",
    };
  }
  const { name, price, description, artisan_id, category_id } =
    validatedFields.data;

  try {
    await sql`
      UPDATE product
      SET name = ${name}, price = ${price}, description = ${description ?? null}, artisan_id = ${artisan_id}, category_id = ${category_id}
      WHERE id = ${id}
    `;
  } catch (error) {
    console.error("Error updating product:", error);
    return {
      message: "Failed to update product. Please try again.",
    };
  }
  revalidatePath("/profile/manageProducts");
  redirect("/profile/manageProducts");
}

export async function updateReview(
  prevState: ReviewState,
  id: string,
  formData: FormData,
) {
  const validatedFields = ReviewSchema.safeParse({
    email: formData.get("email"),
    rating: parseInt(formData.get("rating") as string),
    description: formData.get("description"),
    product_id: parseInt(formData.get("product_id") as string),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Update Review.",
    };
  }
  const { email, rating, description, product_id } = validatedFields.data;
  try {
    await sql`
      UPDATE review
      SET email = ${email}, rating = ${rating}, description = ${description}, product_id = ${product_id}
      WHERE id = ${id}
    `;
  } catch (error) {
    console.error("Error updating review:", error);
    return {
      message: "Failed to update review. Please try again.",
    };
  }
  revalidatePath("/products");
  redirect("/products");
}

export async function updateUser(
  prevState: UserState,
  id: string,
  formData: FormData,
) {
  const validatedFields = UserSchema.safeParse({
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    email: formData.get("email"),
    username: formData.get("username"),
    password: formData.get("password"),
    artisan_id: formData.get("artisan_id"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Update User.",
    };
  }
  const { firstname, lastname, email, username, password, artisan_id } =
    validatedFields.data;
  try {
    await sql`
    UPDATE "user" SET firstname = ${firstname}, lastname = ${lastname}, email = ${email}, username = ${username}, password = ${password}, artisan_id = ${artisan_id ?? null}
    WHERE id = ${id}
  `;
  } catch (error) {
    console.error("Error updating user:", error);
    return {
      message: "Failed to update user. Please try again.",
    };
  }
  revalidatePath("/login");
  redirect("/login");
}
//////////////////////////////////////////////////////////
//                     DELETE RECORDS                   //
//////////////////////////////////////////////////////////
export async function deleteArtisan(id: string) {
  await sql`
    DELETE FROM artisans WHERE id = ${id}
  `;
  revalidatePath("/profile/manageArtisans");
}

export async function deleteCategory(id: string) {
  await sql`
    DELETE FROM categories WHERE id = ${id}
  `;
  revalidatePath("/profile/manageCategories");
}
export async function deleteProduct(id: string) {
  await sql`
    DELETE FROM product WHERE id = ${id}
  `;
  revalidatePath("/profile/manageProducts");
}

export async function deleteReview(id: string) {
  await sql`
    DELETE FROM review WHERE id = ${id}
  `;
  revalidatePath("/products");
}

export async function deleteUser(id: string) {
  await sql`
    DELETE FROM "user" WHERE id = ${id}
  `;
  revalidatePath("/login");
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
