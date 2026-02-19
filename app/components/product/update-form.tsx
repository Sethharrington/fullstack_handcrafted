"use client";

import { updateProduct } from "@/app/lib/actions";
import { Artisan, Category } from "@/app/lib/definitions";
import { ProductState } from "@/app/lib/states";
import { useActionState } from "react";
export default function Form({
  id,
  artisanList,
  categoryList,
}: {
  id: string;
  artisanList: Artisan[];
  categoryList: Category[];
}) {
  const initialState: ProductState = { message: null, errors: {} };
  const updateProductWithId = updateProduct.bind(null, id);
  const [state, formAction] = useActionState(updateProductWithId, initialState);

  return (
    <form
      action={formAction}
      className="max-w-md mx-auto p-6 border rounded mt-8"
    >
      <h1 className="text-2xl font-bold mb-4">Update Product</h1>

      <label htmlFor="name" className="block text-sm font-medium mb-1">
        Product Title
      </label>
      <input
        id="name"
        className="w-full p-2 mb-2 border rounded"
        placeholder="Product Title"
        name="name"
      />
      <div id="name-error" aria-live="polite" aria-atomic="true">
        {state.errors?.name &&
          state.errors.name.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>

      <label htmlFor="description" className="block text-sm font-medium mb-1">
        Product Description
      </label>
      <textarea
        className="w-full p-2 mb-2 border rounded"
        placeholder="Product Description"
        name="description"
      />
      <div id="description-error" aria-live="polite" aria-atomic="true">
        {state.errors?.description &&
          state.errors.description.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>

      <div className="mb-4">
        <label htmlFor="customer" className="mb-2 block text-sm font-medium">
          Choose artisan
        </label>
        <div className="relative">
          <select
            id="artisan"
            name="artisan_id"
            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            defaultValue=""
          >
            <option value="" disabled>
              Select an artisan
            </option>
            {artisanList.map((artisan) => (
              <option key={artisan.id} value={artisan.id}>
                {artisan.name}
              </option>
            ))}
          </select>
          {/* <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" /> */}
        </div>
        <div>
          {state.errors?.artisan_id &&
            state.errors.artisan_id.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="mb-2 block text-sm font-medium">
          Choose category
        </label>
        <div className="relative">
          <select
            id="category"
            name="category_id"
            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            defaultValue=""
          >
            <option value="" disabled>
              Select a category
            </option>
            {categoryList.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          {/* <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" /> */}
        </div>
        <div>
          {state.errors?.category_id &&
            state.errors.category_id.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
      </div>

      <label htmlFor="price" className="block text-sm font-medium mb-1">
        Price
      </label>
      <input
        id="price"
        className="w-full p-2 mb-2 border rounded"
        placeholder="Price"
        type="number"
        name="price"
      />
      <div>
        {state.errors?.price &&
          state.errors.price.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>

      <button
        type="submit"
        className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700"
      >
        Add Product
      </button>
    </form>
  );
}
