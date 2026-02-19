import { createCategory } from "@/app/lib/actions";

export default function Form() {
  return (
    <form
      action={createCategory}
      className="max-w-md mx-auto p-6 border rounded mt-8"
    >
      <h1 className="text-2xl font-bold text-gray-800 text-center">
        Add Product
      </h1>

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
      <textarea
        className="w-full p-2 mb-2 border rounded"
        placeholder="Product Note"
        name="note"
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
