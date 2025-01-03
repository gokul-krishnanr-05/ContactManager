import React from "react";
import "../styles/ContactPreview.css";

const ContactDetails = ({ contact, onClose }) => (
  <div className="contactDetailsContainer">
    <div className="contactDetailsBox">
      <h3>Contact Details</h3>
      <div className="contactDetailsGrid">
        <div><strong>Name:</strong> {contact.Name}</div>
        <div><strong>Email:</strong> {contact.Email}</div>
        <div><strong>Phone:</strong> {contact.Phone}</div>
        <div><strong>Address:</strong> {contact.Address}</div>
      </div>
      <button className="button" onClick={onClose}>Close</button>
    </div>
  </div>
);

export default ContactDetails;
