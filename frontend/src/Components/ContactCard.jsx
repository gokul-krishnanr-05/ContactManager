import React from "react";
import "../styles/ContactPreview.css";

const ContactCard = ({ contact, onViewDetails, onUpdate, onDelete }) => {
  return (
    <div className="contactCard">
      <h3>👤{contact.Name}</h3>
      <p>📞{contact.Phone}</p>
      <div>
        <button className="button" onClick={() => onViewDetails(contact)}>View Details</button>
        <button className="button" onClick={() => onUpdate(contact)}>Update</button>
        <button className="deleteButton button" onClick={() => onDelete(contact._id)}>Delete</button>
      </div>
    </div>
  );
};

export default ContactCard;