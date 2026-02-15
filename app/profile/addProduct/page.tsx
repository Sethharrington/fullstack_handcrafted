"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch("/api/profile")
      .then(async (res) => {
        if (res.status === 401) {
          router.push("/login");
          return null;
        }
        const data = await res.json();
        return data;
      })
      .then((data) => {
        if (data) {
          setUser(data);
          setLoading(false);
        }
      })
      .catch(() => router.push("/login"));
  }, [router]);

  if (loading) return <p>Loading...</p>;

  const handleAddProduct = async () => {
    if (!title || !description || !price) {
      alert("Please fill all fields");
      return;
    }

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, price }),
    });

    if (res.ok) {
      alert("Product added!");
      router.push("/profile/manageProducts");
    } else {
      const data = await res.json();
      alert(data.error || "Failed to add product");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded mt-8">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>

      <input
        className="w-full p-2 mb-2 border rounded"
        placeholder="Product Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full p-2 mb-2 border rounded"
        placeholder="Product Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        className="w-full p-2 mb-2 border rounded"
        placeholder="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button
        onClick={handleAddProduct}
        className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700"
      >
        Add Product
      </button>
    </div>
  );
}