import React, { useState } from "react";
import axios from "axios";
import "../styles/ContactPreview.css";

const UpdateContactModal = ({contact,onClose, onUpdate}) => {
  const [formData, setFormData] = useState({
    Name: contact.Name,
    Email: contact.Email,
    Phone: contact.Phone,
    Address: contact.Address,
  });

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({...formData, [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedContact = {
      Name: formData.Name,
      Email: formData.Email,
      Phone: formData.Phone,
      Address: formData.Address,
      _id:contact._id,
    };

    try {
      await axios.put(
        `http://localhost:5000/api/contact/${contact._id}`,
        updatedContact
      );
      onUpdate(updatedContact);
      onClose();
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <h3>Edit Contact</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Phone:</label>
            <input
              type="text"
              name="Phone"
              value={formData.Phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              name="Address"
              value={formData.Address}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateContactModal;
