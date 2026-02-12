"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function MyProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/products")
      .then(async (res) => {
        if (res.status === 401) {
          router.push("/login");
          return [];
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [router]);

  if (loading) return <p>Loading...</p>;

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    const res = await fetch(`/api/products/${id}`, { method: "DELETE" });
    if (res.ok) setProducts(products.filter((p) => p._id !== id));
  };

  const handleUpdate = async () => {
    const { _id, title, description, price } = editingProduct;
    const res = await fetch(`/api/products/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, price }),
    });
    if (res.ok) {
      setProducts(products.map((p) => (p._id === _id ? editingProduct : p)));
      setEditingProduct(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">My Products</h1>

      {products.map((product) => (
        <div key={product._id} className="border p-4 mb-4 rounded">
          <h2 className="text-xl font-bold">{product.title}</h2>
          <p>{product.description}</p>
          <p className="font-semibold">${product.price}</p>
          <div className="mt-2 space-x-2">
            <button
              className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
              onClick={() => setEditingProduct(product)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              onClick={() => handleDelete(product._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {editingProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded w-96">
            <h2 className="text-xl font-bold mb-2">Edit Product</h2>
            <input
              className="w-full p-2 mb-2 border rounded"
              value={editingProduct.title}
              onChange={(e) => setEditingProduct({ ...editingProduct, title: e.target.value })}
              placeholder="Title"
            />
            <textarea
              className="w-full p-2 mb-2 border rounded"
              value={editingProduct.description}
              onChange={(e) =>
                setEditingProduct({ ...editingProduct, description: e.target.value })
              }
              placeholder="Description"
            />
            <input
              className="w-full p-2 mb-2 border rounded"
              type="number"
              value={editingProduct.price}
              onChange={(e) =>
                setEditingProduct({ ...editingProduct, price: Number(e.target.value) })
              }
              placeholder="Price"
            />
            <div className="flex justify-end space-x-2">
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded"
                onClick={() => setEditingProduct(null)}
              >
                Cancel
              </button>
              <button
                className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
                onClick={handleUpdate}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}