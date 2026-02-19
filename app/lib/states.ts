export type ArtisanState = {
  errors?: {
    name?: string[];
    description?: string[];
  };
  message?: string | null;
};

export type CategoryState = {
  errors?: {
    name?: string[];
    description?: string[];
    note?: string[];
  };
  message?: string | null;
};

export type ProductState = {
  errors?: {
    name?: string[];
    price?: string[];
    description?: string[];
    artisan_id?: string[];
    category_id?: string[];
  };
  message?: string | null;
};

export type ReviewState = {
  errors?: {
    email?: string[];
    rating?: string[];
    description?: string[];
    product_id?: string[];
  };
  message?: string | null;
};
export type UserState = {
  errors?: {
    firstname?: string[];
    lastname?: string[];
    email?: string[];
    username?: string[];
    password?: string[];
    artisan_id?: string[];
  };
  message?: string | null;
};
