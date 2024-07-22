import React from "react";
import Slider from "react-slick";
import useWindowSize from "./useWindowSize";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
import card4 from "../assets/card4.jpg";
import card5 from "../assets/card5.jpg";
import card6 from "../assets/card6.jpg";

import { IoIosArrowForward } from "react-icons/io";

export const servicesInfo = [
  {
    id: 1,
    image: card1,
    title: "Yoga/Weight Loss",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 2,
    image: card2,
    title: "Aerobic/Anaerobic",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 3,
    image: card3,
    title: "Personal Training",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 4,
    image: card4,
    title: "Cardio Machines",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 5,
    image: card5,
    title: "Fitness Classes",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
];

function Services() {
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
    <div className="services d-flex flex-column gap-4">
      <h3>Services</h3>
      <Slider {...settings}>
        {servicesInfo.map((service) => (
          <div
            key={service.id}
            className="service d-flex row justify-content-center gap-2 p-4"
          >
            <img
              src={service.image}
              alt={service.title}
              className="services__img"
            />
            <div className="services__container d-flex flex-column text-center">
              <h2 className="services-title">{service.title}</h2>
              <p className="services-text">{service.info}</p>
              <button className="services-btn">
                More <IoIosArrowForward />
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Services;
