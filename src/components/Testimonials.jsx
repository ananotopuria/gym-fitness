import React, { useState } from "react";
import StarRating from "./StarRating";

import testimonial1 from "../assets/testimonial1.jpg";
import testimonial2 from "../assets/testimonial2.jpg";
import testimonial3 from "../assets/testimonial3.avif";


const testimonials = [
  {
    id: 1,
    name: "John Doe",
    text: "This is an amazing product!",
    rating: 4,
    img: testimonial3
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "I had a great experience with this service.",
    rating: 5,
    img: testimonial2
  },

  {
    id: 3,
    name: "Joanna Smith",
    text: "Lorem ipsum sit dolor.",
    rating: 2,
    img: testimonial1
  },
];

export default function Testimonials() {
  const [ratings, setRatings] = useState(
    testimonials.reduce((acc, testimonial) => {
      acc[testimonial.id] = testimonial.rating;
      return acc;
    }, {})
  );

  const handleSetRating = (id, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [id]: rating,
    }));
  };

  return (
    <>
      <div className="testimonials d-flex flex-column p-4 gap-4">
        <h3 className="testimonials__title mb-0">Testimonials</h3>
        <div className="d-flex flex-column flex-md-row justify-content-around mt-5">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial" style={{ marginBottom: "24px" }}>
                <img
              src={testimonial.img}
              alt={testimonial.title}
              className="testimonials__img"
            />
              <StarRating
                defaultRating={ratings[testimonial.id]}
                onSetRating={(rating) =>
                  handleSetRating(testimonial.id, rating)
                }
              />
              <h3>{testimonial.name}</h3>
              <p>{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
