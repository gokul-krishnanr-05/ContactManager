import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactCard from "../Components/ContactCard";
import "../styles/ContactPreview.css";

const ContactPreview = () => {
  const [contacts, setContacts] = useState([]);
  const URL = "http://localhost:5000/api/contact";

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(URL);
        setContacts(response.data);
      } catch (error) {
        console.log("Error fetching contacts:", error);
      }
    };
    fetchContacts();
  }, []);

  const handleDeleteContact = async (id) => {
    try {
      await axios.delete(`${URL}/${id}`);
      setContacts(contacts.filter(contact => contact._id !== id));
    } catch (error) {
      console.log("Error deleting contact:", error);
    }
  };

  return (
    <div className="container">
      <h2>Contact List</h2>
      <div className="contactGrid">
        {contacts.map(contact => (
          <ContactCard
            key={contact._id}
            contact={contact}
            onDelete={handleDeleteContact}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactPreview;
