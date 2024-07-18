import "./App.css";
import Hero from "./components/Hero";
import { FaRegFolder } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import CardBtns from "./components/CardBtns";

const buttonData = [
  { icon: <FaRegFolder />, text: "Save Card" },
  { icon: <IoShareOutline />, text: "Share Card" },
  { icon: <BsTelephone />, text: "Contact" },
];

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <Hero />
        <div className="card-buttons">
          <CardBtns buttons={buttonData} />
        </div>
        <p className="description">A health club also known as a fitness club, fitness center, health spa, weight romm and commonly referred to as a gym is a place that houses exercise equipment for the purpose of physical exercise.</p>
        
      </div>
    </div>
  );
}

export default App;
