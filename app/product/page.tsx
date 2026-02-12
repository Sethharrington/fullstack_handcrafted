import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReviewList from "../components/ReviewList";
import type { Review } from "../components/ReviewList";

const reviews: Review[] = [
  {
    title: "Great Product",
    reviewer: "Alice Johnson",
    date: "2026-02-01",
    rating: 5,
    text: "I absolutely loved this product. It exceeded my expectations!",
  },
  {
    title: "Not bad",
    reviewer: "Mark Smith",
    date: "2026-01-28",
    rating: 3,
    text: "The product was okay, but I expected more features.",
  },
  {
    title: "Would not recommend",
    reviewer: "Sophia Lee",
    date: "2026-01-15",
    rating: 1,
    text: "Unfortunately, the product broke after a week of use.",
  },
];

export default function Product() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-xl font-bold">Details Page</h1>
      <div className="grid grid-cols-2 mt-6 ">
        <div>
          <Image
            src="/images/handcrafted_reindeer.webp"
            alt="logo"
            width={500}
            height={200}
          />
        </div>
        <div className="flex flex-col gap-2 ml-6">
          <h2 className="text-xl font-semibold">Reindeer Doll</h2>
          <hr />

          <p>
            <span className="text-x2 font-semibold">Description: </span>
            Handmade reindeer doll made from natural materials.
          </p>
          <p>
            <span className="text-x2 font-semibold">Price: </span>$
            {Intl.NumberFormat("en-US").format(50)}
          </p>
          <p>
            <span className="text-x2 font-semibold">Artisan: </span>
            Mary Johnson
          </p>
          <p>
            <span className="text-x2 font-semibold">Category: </span>
            Toys
          </p>
        </div>
      </div>
      <div style={{ padding: "20px" }}>
        <h1>Customer Reviews</h1>
        <ReviewList reviews={reviews} />
        <Link
          href="/review"
          className="text-blue-500 hover:underline mt-4 inline-block"
        >
          Rate and review...
        </Link>
      </div>
    </div>
  );
}
