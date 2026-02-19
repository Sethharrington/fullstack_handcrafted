"use server";
import {
  Artisan,
  Category,
  Product,
  ProductCard,
  Review,
  User,
} from "./definitions";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, {
  ssl: "require",
});

export async function getArtisan() {
  try {
    const artisanList = await sql<Artisan[]>`SELECT * FROM "artisan"`;
    return artisanList;
  } catch (error) {
    console.error("Error fetching artisans:", error);
    throw error;
  }
}

export async function getArtisanFromProducts() {
  try {
    const artisanList = await sql<Artisan[]>`SELECT DISTINCT * FROM "artisan" WHERE id IN (SELECT DISTINCT artisan_id FROM "product")`;
    return artisanList;
  } catch (error) {
    console.error("Error fetching artisans:", error);
    throw error;
  }
}

export async function getCategory() {
  try {
    const categoryList = await sql<Category[]>`SELECT * FROM "category"`;
    return categoryList;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}

export async function getCategoryFromProducts() {
  try {
    const categoryList = await sql<Category[]>`SELECT DISTINCT * FROM "category" WHERE id IN (SELECT DISTINCT category_id FROM "product")`;
    return categoryList;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}

export async function getProduct() {
  try {
    const productList = await sql<Product[]>`SELECT * FROM "product"`;
    return productList;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
export async function getProductCard() {
  try {
    const productList = await sql<ProductCard[]>`
    SELECT p.id as id, p.name as name, price, category_id, artisan_id, a.name as artisan_name, c.name as category_name
    FROM "product" as p
    JOIN "artisan" as a ON p.artisan_id = a.id
    JOIN "category" as c ON p.category_id = c.id`;
    return productList;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function getReview() {
  try {
    const reviewList = await sql<Review[]>`SELECT * FROM "review"`;
    return reviewList;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error;
  }
}

export async function getUser() {
  try {
    const userList = await sql<User[]>`SELECT * FROM "user"`;
    return userList;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

export async function getArtisanById(id: string) {
  try {
    const artisanList = await sql<
      Artisan[]
    >`SELECT * FROM "artisan" WHERE id=${id}`;
    return artisanList[0];
  } catch (error) {
    console.error("Error fetching artisans:", error);
    throw error;
  }
}

export async function getCategoryById(id: string) {
  try {
    const categoryList = await sql<
      Category[]
    >`SELECT * FROM "category" WHERE id=${id}`;
    return categoryList[0];
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}

export async function getProductById(id: string) {
  try {
    const productList = await sql<
      Product[]
    >`SELECT * FROM "product" WHERE id=${id}`;
    return productList[0];
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
export async function getProductCardById(id: string) {
  try {
    const productList = await sql<ProductCard[]>`
    SELECT p.id as id, p.name as name, price, category_id, artisan_id, a.name as artisan_name, c.name as category_name
    FROM "product" as p
    JOIN "artisan" as a ON p.artisan_id = a.id
    JOIN "category" as c ON p.category_id = c.id
    WHERE p.id = ${id}`;
    return productList[0];
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function getReviewById(id: string) {
  try {
    const reviewList = await sql<
      Review[]
    >`SELECT * FROM "review" WHERE id=${id}`;
    return reviewList[0];
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error;
  }
}
export async function getReviewByProductId(id: string) {
  try {
    const reviewList = await sql<
      Review[]
    >`SELECT * FROM "review" WHERE product_id=${id}`;
    return reviewList;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error;
  }
}

export async function getUserById(id: string) {
  try {
    const userList = await sql<User[]>`SELECT * FROM "user" WHERE id=${id}`;
    return userList[0];
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

export async function getProductsByArtisanId(artisanId: string) {
  try {
    const productList = await sql<ProductCard[]>`
    SELECT p.id as id, p.name as name, p.description as description, price, category_id, artisan_id, a.name as artisan_name, c.name as category_name
    FROM "product" as p
    JOIN "artisan" as a ON p.artisan_id = a.id
    JOIN "category" as c ON p.category_id = c.id
    WHERE p.artisan_id = ${artisanId}
    ORDER BY p.name`;
    return productList;
  } catch (error) {
    console.error("Error fetching products for artisan:", error);
    throw error;
  }
}
