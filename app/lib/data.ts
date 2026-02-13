import postgres from "postgres";
import { Artisan, Category, Product, Review, User } from "./definitions";

const sql = postgres(process.env.DATABASE_URL!, {
  ssl: "require",
  prepare: false,
});

export async function getArtisans(): Promise<Artisan[]> {
  return sql`SELECT * FROM artisans`;
}

export async function getCategories(): Promise<Category[]> {
  return sql`SELECT * FROM categories`;
}

export async function getProducts(): Promise<Product[]> {
  return sql`SELECT * FROM products`;
}

export async function getReviews(): Promise<Review[]> {
  return sql`SELECT * FROM reviews`;
}

export async function getUsers(): Promise<User[]> {
  return sql`SELECT * FROM users`;
}

export async function createArtisan(
  name: string,
  description: string,
): Promise<Artisan> {
  const [artisan] = await sql`
    INSERT INTO artisans (name, description)
    VALUES (${name}, ${description})
    RETURNING *
  `;
  return artisan;
}

export async function createCategory(
  name: string,
  description: string,
  note: string,
): Promise<Category> {
  const [category] = await sql`
    INSERT INTO categories (name, description, note)
    VALUES (${name}, ${description}, ${note})
    RETURNING *
  `;
  return category;
}

export async function createProduct(
  name: string,
  price: number,
  artisan_id: string,
  category_id: string,
): Promise<Product> {
  const [product] = await sql`
      INSERT INTO products (name, price, artisan_id, category_id)
      VALUES (${name}, ${price}, ${artisan_id}, ${category_id})
      RETURNING *
    `;
  return product;
}

export async function createReview(
  email: string,
  rating: number,
  description: string,
  product_id: number,
): Promise<Review> {
  const [review] = await sql`
    INSERT INTO reviews (email, rating, description, product_id)
    VALUES (${email}, ${rating}, ${description}, ${product_id})
    RETURNING *
  `;
  return review;
}

export async function createUser(
  firstname: string,
  lastname: string,
  email: string,
  username: string,
  password: string,
  artisan_id: number,
): Promise<User> {
  const [user] = await sql`
    INSERT INTO users (firstname, lastname, email, username, password, artisan_id)
    VALUES (${firstname}, ${lastname}, ${email}, ${username}, ${password}, ${artisan_id})
    RETURNING *
  `;
  return user;
}
