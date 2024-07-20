import React from "react";
import Slider from "react-slick";
import useWindowSize from "./useWindowSize";

import product1 from "../assets/product1.avif";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";


export const productsInfo = [
  {
    id: 1,
    image: product1,
    title: "CHU Gummies",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    price: "$29",
  },
  {
    id: 2,
    image: product2,
    title: "CBD products",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    price: "$300",
  },
  {
    id: 3,
    image: product3,
    title: "Food & Drink",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    price: "$120",
  },
  {
    id: 4,
    image: product4,
    title: "blue sport bra, leggings",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    price: "$436",
  },
];

function Products() {
  const size = useWindowSize();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="products d-flex flex-column gap-4">
      <h3>Product</h3>
      <Slider {...settings}>
        {productsInfo.map((product) => (
          <div
            key={product.id}
            className="product d-flex row justify-content-center gap-2 p-4"
          >
            <img
              src={product.image}
              alt={product.title}
              className="products__img"
            />
            <div className="products__container d-flex flex-column text-center">
              <h2 className="products-title">{product.title}</h2>
              <p className="products-text">{product.info}</p>
              <p>{product.price}</p>
              <button className="products-btn">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Products;
