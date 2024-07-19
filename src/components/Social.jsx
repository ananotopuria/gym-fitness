import React from "react";
import whatsappIcon from "./../assets/icons/icons8-whatsapp.svg";
import facebookIcon from "./../assets/icons/icons8-facebook.svg";
import instagramIcon from "./../assets/icons/icons8-instagram.svg";
import linkedinIcon from "./../assets/icons/icons8-linkedin.svg";
import twitterIcon from "./../assets/icons/icons8-twitter.svg";
import skypeIcon from "./../assets/icons/icons8-skype.svg";
import githubIcon from "./../assets/icons/icons8-github.svg";
import pinterestIcon from "./../assets/icons/icons8-pinterest.svg";
import spotifyIcon from "./../assets/icons/icons8-spotify.svg";
import viberIcon from "./../assets/icons/icons8-viber.svg";
import tiktokIcon from "./../assets/icons/icons8-tik-tok.svg";
import emailIcon from "./../assets/icons/icons8-gmail-30.png";
import webIcon from "./../assets/icons/internet.png";
import phoneIcon from "./../assets/icons/telephone.png";
const iconMap = {
  WhatsApp: whatsappIcon,
  Viber: viberIcon,
  Facebook: facebookIcon,
  Instagram: instagramIcon,
  Linkedin: linkedinIcon,
  Twitter: twitterIcon,
  Skype: skypeIcon,
  Github: githubIcon,
  Pinterest: pinterestIcon,
  Spotify: spotifyIcon,
  Tiktok: tiktokIcon,
  Whatsapp: whatsappIcon,
  Email: emailIcon,
  Phone: phoneIcon,
  Website: webIcon,
};

function Social({ contactInfo }) {
  const handleButtonClick = (value) => {
    window.open(value, "_blank");
  };

  const excludedNames = [
    "Firstname",
    "Lastname",
    "Position",
    "Company",
    "Adress",
  ];
  const filteredContactInfo = contactInfo.filter(
    (item) => !excludedNames.includes(item.name)
  );

  return (
    <div className="social">
      <h2 className="social-title">Social</h2>
      <div className="social-icons">
        {filteredContactInfo.map((item, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(item.value)}
            className="social-icons-btn"
          >
            <img
              src={iconMap[item.placeholder] || ""}
              alt={item.placeholder}
              style={{ width: "20px", height: "20px" }}
            />
            {/* <span className="ms-2">{item.placeholder}</span> */}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Social;
