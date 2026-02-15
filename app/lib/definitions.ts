export type Artisan = {
  id?: string;
  name: string;
  description: string;
};

export type Category = {
  id?: string;
  name: string;
  description: string;
  note: string;
};

export type Product = {
  id?: string;
  name: string;
  price: number;
  description?: string;
  artisan_id: string;
  category_id: string;
};

export type ProductCard = Product & {
  artisan_id: string;
  category_id: string;
  artisan_name: string;
  category_name: string;
};

export type Review = {
  id?: string;
  email: string;
  rating: number;
  description: string;
  product_id: string;
};
export type User = {
  id?: string;
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  artisan_id?: string;
};
