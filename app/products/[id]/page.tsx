"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ReviewList from "../../components/ReviewList";
import type { Review } from "../../components/ReviewList";
import { useParams, useRouter } from "next/navigation";


export default function Product() {
  const [product, setProduct] = useState<any>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const params = useParams() as { id: string };
  const id = params.id;

  useEffect(() => {
    if (!id) return;

    fetch(`/api/products/${id}`)
      .then(async (res) => {
        if (res.status === 401) {
          router.push("/login");
          return null;
        }
        if (!res.ok) {
          throw new Error("Product not found");
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id, router]);

  useEffect(() => {
  if (!id) return;

  fetch(`/api/reviews`)
    .then(res => res.json())
    .then((data: Review[]) => {
      const productReviews = data.filter(r => r.product === id);
      setReviews(productReviews);
    })
    .catch(err => console.error(err));
}, [id]);

  if (loading) return <p>Loading...</p>;
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
          <h2 className="text-xl font-semibold">{product.title}</h2>
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
            {product.artisan}
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
        <Link
          href={`/products/${product._id}/review`}
          className="text-blue-500 hover:underline mt-4 inline-block"
        >
          Rate and review...
        </Link>
      </div>
    </div>
  );
}
