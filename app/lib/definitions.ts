export type Artisan = {
  id: number;
  name: string;
  description: string;
};

export type Category = {
  id: number;
  name: string;
  description: string;
  note: string;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  artisan_id: string;
  category_id: string;
};

export type Review = {
  email: string;
  rating: number;
  description: string;
  product_id: number;
};
export type User = {
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  artisan_id: number;
};
