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
import Products from "./components/Products";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import BusinessHours from "./components/BusinessHours";
import ContactInformations from "./components/ContactInformations";
import "react-datepicker/dist/react-datepicker.css";
import "leaflet/dist/leaflet.css";
import Map from "./components/Map";
import AppStoreGooglePlayButtons from "./components/AppStoreGooglePlayButtons";

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

  const handleDownload = () => {
    const vCard = `
      BEGIN:VCARD
      VERSION:3.0
      FN:${cardData.name} ${cardData.lastname}
      ORG:${cardData.company}
      TITLE:${cardData.position}
      TEL;TYPE=WORK,VOICE:${cardData.phone}
      ADR;TYPE=WORK:;;${cardData.adress}
      END:VCARD
    `;
    const blob = new Blob([vCard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const newLink = document.createElement("a");
    newLink.download = "vCard.vcf";
    newLink.href = url;

    document.body.appendChild(newLink);
    newLink.click();
    document.body.removeChild(newLink);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "vCard",
          text: "Check out this vCard!",
          url: window.location.href,
        })
        .catch(console.error);
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };
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
            handleDownload={handleDownload}
            handleShare={handleShare}
          />
        </div>
        <p className="description">
          A health club also known as a fitness club, fitness center, health
          spa, weight romm and commonly referred to as a gym is a place that
          houses exercise equipment for the purpose of physical exercise.
        </p>
        <Social contactInfo={cardData.contactInfo} />
        <Appointment />
        <Services />
        <Products />
        <Gallery />
        <Testimonials />
        <BusinessHours />
        <ContactInformations contactInfo={cardData.contactInfo} />
        <CardBtns
          buttons={buttonData}
          handleContactClick={handleContactClick}
          handleDownload={handleDownload}
          handleShare={handleShare}
        />
        <Map />
        <h3 className="text-center mb-4">Download Here!</h3>
        <AppStoreGooglePlayButtons />
      </div>
    </div>
  );
}

export default App;
