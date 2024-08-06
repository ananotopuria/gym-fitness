import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
import card4 from "../assets/card4.jpg";
import card5 from "../assets/card5.jpg";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 2;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + slidesToShow) % servicesInfo.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  const direction = 1;

  // visibility of slides
  const visibleSlides =
    servicesInfo.length < slidesToShow
      ? servicesInfo
      : [
          ...servicesInfo.slice(currentIndex, currentIndex + slidesToShow),
          ...servicesInfo.slice(
            0,
            Math.max(0, slidesToShow - (servicesInfo.length - currentIndex))
          ),
        ];

  return (
    <div className="services d-flex flex-column gap-4">
      <h3>Services</h3>
      <div
        className="slider-container"
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "400px",
        }}
      >
        <div
          className="slides-wrapper"
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            transition: "transform 0.5s ease",
          }}
        >
          <AnimatePresence initial={false} custom={direction}>
            {visibleSlides.map((service, index) => (
              <motion.div
                key={service.id}
                className="service d-flex flex-column align-items-center justify-content-center gap-2 p-4"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                style={{
                  flex: `0 0 ${100 / slidesToShow}%`, // number of slides shown
                  height: "100%",
                }}
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
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Services;
