import React from "react";
import { contactCardData } from "../../../Constants/jsonData";

const ContactCard = () => {
  return (
    <div className="grid grid-cols_2">
      {contactCardData.map((items) => (
        <div className="contact-card is-flex is-align-center is-start is-gap-15 mb-15">
          <div className="is-square is-square_sm">{items.icon}</div>
          <div className="personal-card-content">
            <p className="fs-md mb-05 is-capitalize">{items.iconName}</p>
            <p className="fw-600 clr-body-900">{items.contactText}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactCard;
