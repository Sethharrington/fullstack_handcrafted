import { createProduct } from "@/app/lib/actions";
import { Artisan, Category } from "@/app/lib/definitions";

export default function Form({
  artisanList,
  categoryList,
}: {
  artisanList: Artisan[];
  categoryList: Category[];
}) {
  return (
    <form
      action={createProduct}
      className="max-w-md mx-auto p-6 border rounded mt-8"
    >
      <h1 className="text-2xl font-bold mb-4">Add Review</h1>

      <input
        className="w-full p-2 mb-2 border rounded"
        placeholder="Product Title"
        name="name"
      />
      <textarea
        className="w-full p-2 mb-2 border rounded"
        placeholder="Product Description"
        name="description"
      />
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
      </div>
      <input
        className="w-full p-2 mb-2 border rounded"
        placeholder="Price"
        type="number"
        name="price"
      />

      <button
        type="submit"
        className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700"
      >
        Add Product
      </button>
    </form>
  );
}
