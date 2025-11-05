import React from "react";
import ReviewCard from "./ReviewCard";
import reviews from "./ReviewData";
import "./Review.css";

const Review = () => {
  return (
    <section className="review-section">
      <h2 className="review-title">Loved by clients</h2>
      <div className="review-container">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </section>
  );
};

export default Review;
