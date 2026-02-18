"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

export type Rating = 1 | 2 | 3 | 4 | 5;

export type Review = {
  title: string;
  reviewer: string;
  rating: Rating;
  text: string;
};

export default function NewReviewPage() {
  const router = useRouter();
  const params = useParams() as { id: string };
  const productId = params.id;

  const [formData, setFormData] = useState<Review>({
    title: "",
    reviewer: "",
    rating: 1,
    text: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!productId) {
      alert("Product ID not found");
      return;
    }

    const reviewToSend = {
      ...formData,
      product: productId,
    };

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reviewToSend),
      });

      if (!res.ok) throw new Error("Failed to submit review");

      const savedReview = await res.json();
      console.log("Review saved:", savedReview);
      alert("Review submitted successfully!");

      setFormData({ title: "", reviewer: "", rating: 1, text: "" });

      router.push(`/products/${productId}`);
    } catch (err) {
      console.error(err);
      alert("Error submitting review");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Submit Review
        </h1>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              required
            />
          </div>

          {/* Reviewer */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Reviewer</label>
            <input
              type="text"
              name="reviewer"
              value={formData.reviewer}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              required
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Rating</label>
            <select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              required
            >
              {[1, 2, 3, 4, 5].map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          {/* Text */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Review Text</label>
            <textarea
              name="text"
              value={formData.text}
              onChange={handleChange}
              rows={4}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-emerald-700 text-white py-2 rounded-md font-medium hover:bg-emerald-800 transition disabled:opacity-50"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}