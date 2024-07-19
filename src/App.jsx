import { useState, useEffect } from "react";

import "./App.css";
import Hero from "./components/Hero";
import { FaRegFolder } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import CardBtns from "./components/CardBtns";
import Social from "./components/Social";
import Appointment from "./components/Appointment";
import Services from "./components/Services";

const buttonData = [
  { icon: <FaRegFolder />, text: "Save Card" },
  { icon: <IoShareOutline />, text: "Share Card" },
  { icon: <BsTelephone />, text: "Contact" },
];

function App() {
  const [cardData, setCardData] = useState({
    name: "",
    lastname: "",
    position: "",
    company: "",
    adress: "",
    contactInfo: [],
    cardImage: "",
    phone: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://testing.api.addme.ge/api/card/getcard/Guro",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      const items = data?.data?.cardItemInputs || [];
      const name = items.find((item) => item.name === "Firstname")?.value || "";
      const lastname =
        items.find((item) => item.name === "Lastname")?.value || "";
      const position =
        items.find((item) => item.name === "Position")?.value || "";
      const company =
        items.find((item) => item.name === "Company")?.value || "";
      const adress = items.find((item) => item.name === "Adress")?.value || "";
      const phone = items.find((item) => item.name === "Phone1")?.value || "";
      setCardData({
        name,
        lastname,
        position,
        company,
        adress,
        phone,
        contactInfo: items,
        cardImage: data?.data?.cardImage || "",
      });
      console.log(data);
    };
    fetchData();
  }, []);

  const handleContactClick = () => {
    if (cardData.phone) {
      window.location.href = `tel:${cardData.phone}`;
    } else {
      alert("Phone number not available");
    }
  };
  return (
    <div className="container">
      <div className="wrapper">
        <Hero />
        <div className="card-buttons">
          <CardBtns
            buttons={buttonData}
            handleContactClick={handleContactClick}
          />
        </div>
        <p className="description">
          A health club also known as a fitness club, fitness center, health
          spa, weight romm and commonly referred to as a gym is a place that
          houses exercise equipment for the purpose of physical exercise.
        </p>
        <Social contactInfo={cardData.contactInfo} />
        <Appointment />
        <div className="services">
          <h3>Services</h3>
          <Services />
        </div>
      </div>
    </div>
  );
}

export default App;
