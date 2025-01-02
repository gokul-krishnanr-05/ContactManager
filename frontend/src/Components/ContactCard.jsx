import React from "react";
import "../styles/ContactPreview.css";

const ContactCard = ({ contact, onViewDetails, onUpdate, onDelete }) => {
  return (
    <div className="contactCard">
      <h3>Name:{contact.Name}</h3>
      <p>Phone{contact.Phone}</p>
      <div>
        <button className="button">View Details</button>
        <button className="button">Update</button>
        <button className="deleteButton" onClick={() => onDelete(contact._id)}>Delete</button>
      </div>
    </div>
  );
};

export default ContactCard;