import React from "react";
import "./review.css";
import { FiStar } from "react-icons/fi";

const ReviewCard = ({ initials, name, role, text, rating }) => {
  return (
    <div className="review-card">
      <div className="review-header">
        <div className="review-avatar">{initials}</div>
        <div>
          <h4 className="review-name">{name}</h4>
          <p className="review-role">{role}</p>
        </div>

        <div className="review-rating">
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              key={index}
              className={index < rating ? "star filled" : "star"}
            >
              <FiStar />
            </span>
          ))}
        </div>
      </div>

      <p className="review-text">“{text}”</p>
    </div>
  );
};

export default ReviewCard;
