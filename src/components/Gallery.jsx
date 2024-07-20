import React from "react";
import Slider from "react-slick";
import useWindowSize from "./useWindowSize";

import gym1 from "../assets/gym1.jpg";
import gym2 from "../assets/gym2.jpg";
import gym3 from "../assets/gym3.jpg";
import gym4 from "../assets/gym4.jpg";
import gym5 from "../assets/gym5.jpg";
import gym6 from "../assets/gym6.jpg";


export const gallery = [
  {
    id: 1,
    image: gym1,
    title: "lorem ipsum dolor sit amet, consectetur adip1"
  },
  {
    id: 2,
    image: gym2,
    title: "lorem ipsum dolor sit amet, consectetur adip2"
  },
  {
    id: 3,
    image: gym3,
    title: "lorem ipsum dolor sit amet, consectetur adip3"
  },
  {
    id: 4,
    image: gym4,
    title: "lorem ipsum dolor sit amet, consectetur adip4"
  },
  {
    id: 5,
    image: gym5,
    title: "lorem ipsum dolor sit amet, consectetur adip4"
  },
  {
    id: 6,
    image: gym6,
    title: "lorem ipsum dolor sit amet, consectetur adip4"
  },
];

function Products() {
  const size = useWindowSize();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <div className="products d-flex flex-column gap-4">
      <h3>Gallery</h3>
      <Slider {...settings}>
        {gallery.map((gallery) => (
          <div
            key={gallery.id}
            className=" d-flex row justify-content-center gap-2 p-4 gallery-container"
          >
            <img
              src={gallery.image}
              alt={gallery.title}
              className="gallery-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Products;
