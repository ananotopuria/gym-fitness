import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const AppStoreGooglePlayButtons = () => {
  return (
    <div className="d-flex flex-row gap-4 justify-content-center app-content">
      <button className="btn google-play app-icons d-flex align-items-center">
        <FaGooglePlay className="icon" />

        <div className="ms-2">
          <span className="app-icons-title d-block">GET IN ONE</span>
          <span className="app-icons-company d-block">Google Play</span>
        </div>
      </button>
      <button className="btn app-icons d-flex align-items-center">
        <FaApple className="icon" />
        <div className="ms-2">
          <span className="app-icons-title d-block">Available on the</span>
          <span className="app-icons-company d-block">App Store</span>
        </div>
      </button>
    </div>
  );
};

export default AppStoreGooglePlayButtons;
