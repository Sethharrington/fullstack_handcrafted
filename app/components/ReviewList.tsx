"use client";
import React, { JSX } from "react";
import { Review } from "../lib/definitions";
// Rating can only be 1–5
export type Rating = 1 | 2 | 3 | 4 | 5;

export type ReviewListProps = {
  reviews: Review[];
};

// Helper function to render stars (display-only)
const renderStars = (rating: Rating): JSX.Element => {
  const totalStars = 5;
  return (
    <span className="text-yellow-500">
      {"★".repeat(rating) + "☆".repeat(totalStars - rating)}
    </span>
  );
};

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  return (
    <div className="max-w-[600px] mx-auto font-sans">
      {reviews.map((review, index) => (
        <div key={index} className="border-b border-gray-300 py-3">
          {review.email} |{" "}
          {new Date(review.created_at).toISOString().split("T")[0]}
          <div className="font-bold mb-1">{renderStars(review.rating as Rating)}</div>
          <div className="text-gray-500">{review.description}</div>
        </div>
      ))}
    </div>
  );
};

// Export the component itself so imports like `import ReviewList from "../components/ReviewList"` work.
export default ReviewList;
