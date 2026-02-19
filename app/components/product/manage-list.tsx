"use client";

import { useRouter } from "next/navigation";
import { ProductCard } from "@/app/lib/definitions";
import { deleteProduct } from "@/app/lib/actions";

export default function ManageProductList({
  products,
}: {
  products: ProductCard[];
}) {
  const router = useRouter();

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete "${name}"?`)) return;
    
    try {
      await deleteProduct(id);
      router.refresh();
    } catch (error) {
      alert("Failed to delete product. Please try again.");
      console.error("Error deleting product:", error);
    }
  };

  if (products.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600 mb-4">You haven&apos;t added any products yet.</p>
        <a
          href="/profile/addProduct"
          className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
        >
          Add Your First Product
        </a>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg p-4 hover:shadow-md transition"
        >
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
              <p className="text-gray-600 mt-1">{product.description}</p>
              <div className="mt-2 flex gap-4 text-sm text-gray-500">
                <span>
                  <span className="font-semibold">Price:</span> ${product.price}
                </span>
                <span>
                  <span className="font-semibold">Category:</span>{" "}
                  {product.category_name}
                </span>
              </div>
            </div>
            <div className="flex gap-2 ml-4">
              <a
                href={`/products/${product.id}`}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
              >
                View
              </a>
              <button
                onClick={() => handleDelete(product.id!, product.name)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
