"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
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
      .catch(() => {
        router.push("/login");
      });
  }, [router]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold">Welcome, {user.name}</h1>

      {/* Description */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold">Description:</h2>
        <p>{user.description || "This user has no description."}</p>
      </div>

      {/* Navigation */}
      <div className="mt-8 space-x-4">
        <a href="/profile/manageProducts" className="text-emerald-700 underline">
          My Products
        </a>
        <a href="/profile/addProduct" className="text-emerald-700 underline">
          Add Product
        </a>
        <button
        onClick={async () => {
            await fetch("/api/auth/logout", { method: "POST" });
            router.replace("/login");
            router.refresh();
        }}
        className="text-sm text-red-600 hover:underline"
        >
        Sign out
        </button>
      </div>
    </div>
  );
}