import React from "react";

function ContactInformations({ contactInfo }) {
  return (
    <div className="mt-5">
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
