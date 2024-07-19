import { useState, useEffect } from "react";

import "./App.css";
import Hero from "./components/Hero";
import { FaRegFolder } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import CardBtns from "./components/CardBtns";
import Social from "./components/Social"

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
      setCardData({
        name,
        lastname,
        position,
        company,
        adress,
        contactInfo: items,
        cardImage: data?.data?.cardImage || "",
      });
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <div className="wrapper">
        <Hero />
        <div className="card-buttons">
          <CardBtns buttons={buttonData} />
        </div>
        <p className="description">A health club also known as a fitness club, fitness center, health spa, weight romm and commonly referred to as a gym is a place that houses exercise equipment for the purpose of physical exercise.</p>
        <div>
        <Social contactInfo={cardData.contactInfo} />
    </div>
      </div>
    </div>
  );
}

export default App;
