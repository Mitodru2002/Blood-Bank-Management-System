import React, { useState } from "react";
import "../../styles/Reviews.css";

const reviews = [
  {
    name: "Jane Cooper",
    rating: 4.0,
    image:
      "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?t=st=1718173614~exp=1718177214~hmac=ec3e11ebcdd0b4d4786bfc08bef3eb2c8ec6d97a80e3701460ea11dbc35bb116&w=740",
    review:
      "The blood donation process was smooth and well-organized. The staff was very supportive and professional.",
  },

  {
    name: "Cody Roods",
    rating: 4.0,
    image:
      "https://img.freepik.com/free-photo/portrait-handsome-young-man-with-crossed-arms_176420-15569.jpg?size=626&ext=jpg",
    review:
      "I had a great experience donating blood here. It was quick, easy, and the staff was very friendly.",
  },
  {
    name: "Sarah Wilson",
    rating: 4.5,
    image:
      "https://img.freepik.com/free-photo/close-up-portrait-young-man-isolated-black-studio-background-photoshot-real-emotions-male-model-smiling-feeling-happy-facial-expression-pure-clear-human-emotions-concept_155003-25751.jpg?t=st=1718173699~exp=1718177299~hmac=c16863bc62478200c2ff03d5a87d1b57cf9246615c727ecf9ef4b41d8a68baa5&w=740",
    review:
      "Amazing experience! The staff was incredibly friendly and made the process very easy.",
  },
  {
    name: "John Alex",
    rating: 4.0,
    image:
      "https://img.freepik.com/free-photo/beautiful-woman_144627-11130.jpg?size=626&ext=jpg", // Replace with actual image URL
    review:
      "Donating blood was a rewarding experience. The facility is clean, and the staff ensures you are comfortable throughout the process.",
  },
  {
    name: "David Brown",
    rating: 5.0,
    image:
      "https://img.freepik.com/free-photo/front-view-beautiful-woman-portrait_23-2149479366.jpg",
    review:
      "I felt very safe and comfortable donating blood here. Highly recommended!",
  },
  {
    name: "John Alex",
    rating: 4.0,
    image:
      "https://img.freepik.com/free-photo/close-up-confident-male-employee-white-collar-shirt-smiling-camera-standing-self-assured-against-studio-background_1258-26761.jpg?size=626&ext=jpg",
    review:
      "Donating blood was a rewarding experience. The facility is clean, and the staff ensures you are comfortable throughout the process.",
  },
  {
    name: "Jane Cooper",
    rating: 4.0,
    image:
      "https://img.freepik.com/free-photo/handsome-young-cheerful-man_171337-1155.jpg?size=626&ext=jpg",
    review:
      "The blood donation process was smooth and well-organized. The staff was very supportive and professional.",
  },

  {
    name: "Tony Stark",
    rating: 4.0,
    image:
      "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg?size=626&ext=jpg",
    review:
      "I had a great experience donating blood here. It was quick, easy, and the staff was very friendly.",
  },
  // Add more reviews as needed
];

const ReviewCard = ({ review }) => (
  <div className="review-card">
    <img src={review.image} alt={review.name} className="review-image" />
    {/* <h3>{review.name}</h3> */}
    <div className="rating">
      <span className="star">★</span>
      <span>{review.rating}</span>
    </div>
    <p>{review.review}</p>
  </div>
);

const Reviews = () => {
  const [visibleReviews, setVisibleReviews] = useState(3);
  // eslint-disable-next-line
  const [showAll, setShowAll] = useState(false);

  const handleViewMore = () => {
    setVisibleReviews((prev) => prev + 3); // Show 3 more reviews on each click
    setShowAll(true);
  };
  const disableReviews = () => {
    setVisibleReviews(3); // Show only 2 reviews
    setShowAll(false);
  };

  return (
    <div className="about-section" id="about-us-section">
      <div className="about-text">
        <h2>
          About Our <span>Rakt-Seva</span>
        </h2>
        <p>
          Our <span>Rakt-Seva</span> application is dedicated to providing a
          reliable, safe and fast blood finding experience.
          <br />
          Our mission is to ensure that everyone has a comfortable and positive
          experience while contributing to saving lives. Join us in making a
          difference.
        </p>
      </div>
      <div className="reviews-section">
        <h2>What People Think About Us</h2>
        <div className="review-cards">
          {reviews.slice(0, visibleReviews).map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
        {visibleReviews < reviews.length && (
          <button className="view-more" onClick={handleViewMore}>
            View More
          </button>
        )}
        {visibleReviews > reviews.length && (
          <button className="view-more" onClick={disableReviews}>
            View Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Reviews;
