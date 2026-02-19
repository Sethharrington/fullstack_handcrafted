"use client";

import Image from "next/image";
import Link from "next/link";
// import React, { useEffect, useState } from "react";
import ReviewList from "@/app/components/ReviewList";
import { ProductCard, Review } from "@/app/lib/definitions";
import ReviewForm from "@/app/components/review/create-form";
export default function ViewProduct({
  product,
  reviews,
}: {
  product: ProductCard;
  reviews: Review[];
}) {
  if (!product) return <p>Product not found</p>;

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-2xl font-bold text-gray-800 text-center">
        Details Page
      </h1>
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
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <hr />

          <p>
            <span className="text-x2 font-semibold">Description: </span>
            {product.description}
          </p>
          <p>
            <span className="text-x2 font-semibold">Price: </span>$
            {product.price}
          </p>
          <p>
            <span className="text-x2 font-semibold">Artisan: </span>
            {product.artisan_name}
          </p>
          {/* <p>
            <span className="text-x2 font-semibold">Category: </span>
            Toys
          </p> */}
        </div>
      </div>
      <div style={{ padding: "20px" }}>
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Customer Reviews
        </h1>
        {!reviews || reviews.length === 0 ? (
          <p>No reviews</p>
        ) : (
          <ReviewList reviews={reviews} />
        )}
        {/* <Link
          href={`/products/${product.id}/review`}
          className="text-blue-500 hover:underline mt-4 inline-block"
        >
          Rate and review...
        </Link> */}
        <ReviewForm product_id={product.id || ""} />
      </div>
    </div>
  );
}
