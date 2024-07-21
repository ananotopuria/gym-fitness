import React from "react";

function ContactInformations({ contactInfo }) {
  return (
    <div>
      <h3>Contact Informations</h3>
      <ul>
        {contactInfo.map((info, index) => (
          <li key={index}>{info.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default ContactInformations;
