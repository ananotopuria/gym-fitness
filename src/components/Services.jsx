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

export const cardInfo = [
  {
    id: 1,
    image: card1,
    title: "Yoga/Weight Loss",
    info: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
  },
  {
    id: 2,
    image: card2,
    title: "Aerobic/Anaerobic",
    info: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
  },
  {
    id: 3,
    image: card3,
    title: "Lörem ipsum patt karirenyst",
    info: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
  },
  {
    id: 4,
    image: card4,
    title: "Lörem ipsum patt karirenyst",
    info: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
  },
  {
    id: 5,
    image: card5,
    title: "Lörem ipsum patt karirenyst",
    info: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
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
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <Slider {...settings}>
        {cardInfo.map((card) => (
          <div key={card.id} className="service">
            <img src={card.image} alt={card.title} className="services__img" />
            <div className="services__container">
              <h2 className="services-title">{card.title}</h2>
              <p className="services-text">{card.info}</p>
            </div>
            <div className="services__footer">
              <button className="services__footer-btn">
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
