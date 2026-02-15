import { z } from "zod";

export const ArtisanSchema = z.object({
  name: z.string().min(2, "Artisan name must be at least 2 characters long"),
  description: z
    .string()
    .min(5, "Description must be at least 5 characters long"),
});

export const CategorySchema = z.object({
  name: z.string().min(2, "Category name must be at least 2 characters long"),
  description: z
    .string()
    .min(5, "Description must be at least 5 characters long"),
  note: z.string().optional(),
});

export const ProductSchema = z.object({
  name: z.string().min(2, "Product name must be at least 2 characters long"),
  price: z.number().positive("Price must be a positive number"),
  description: z.string().optional(),
  artisan_id: z.string().uuid("Invalid artisan ID format"),
  category_id: z.string().uuid("Invalid category ID format"),
});

export const ReviewSchema = z.object({
  email: z.string().email("Please provide a valid email address"),
  rating: z
    .number()
    .min(1, "Rating must be at least 1")
    .max(5, "Rating cannot be more than 5"),
  description: z
    .string()
    .min(5, "Description must be at least 5 characters long"),
  product_id: z.string().uuid("Invalid product ID format"),
});

export const UserSchema = z.object({
  firstname: z.string().min(2, "First name must be at least 2 characters long"),
  lastname: z.string().min(2, "Last name must be at least 2 characters long"),
  email: z.string().email("Please provide a valid email address"),
  username: z.string().min(3, "Username must be at least 3 characters long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  artisan_id: z.string().uuid().optional(),
});
