import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactCard from "../Components/ContactCard";
import UpdateContactModal from "../Components/UpdateContactModal";
import ContactDetails from "../Components/ContactDetails";
import SearchBar from "../Components/SearchBar";
import "../styles/ContactPreview.css";
import { useNavigate } from "react-router-dom";

const ContactPreview = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [contactToUpdate, setContactToUpdate] = useState(null);

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

  const handleViewDetails = (contact) => {
    setSelectedContact(contact);
  };

  const handleCloseDetails = () => {
    setSelectedContact(null);
  };

  const handleDeleteContact = async (id) => {
    try {
      await axios.delete(`${URL}/${id}`);
      setContacts(contacts.filter(contact => contact._id !== id));
    } catch (error) {
      console.log("Error deleting contact:", error);
    }
  };

  const handleUpdateContact = (contact) => {
    setContactToUpdate(contact);
    setShowUpdateModal(true);
  };

  const handleCloseUpdateModal = () => {
    setShowUpdateModal(false);
    setContactToUpdate(null);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.Name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const updateContactInList = (updatedContact) => {
    const updatedContacts = contacts.map(contact => {
      return contact._id === updatedContact._id ? updatedContact : contact;
    });
    setContacts(updatedContacts);
    setShowUpdateModal(false);
  };
  
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      <h2>CONTACT LIST </h2>
      <SearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <div className="contactGrid">
        {filteredContacts.map(contact => (
          <ContactCard
            contact={contact}
            onViewDetails={handleViewDetails}
            onUpdate={handleUpdateContact}
            onDelete={handleDeleteContact}
          />
        ))}
      </div>
      {selectedContact && (
        <ContactDetails
          contact={selectedContact}
          onClose={handleCloseDetails}
        />
      )}
      {showUpdateModal && (
        <UpdateContactModal
          contact={contactToUpdate}
          onClose={handleCloseUpdateModal}
          onUpdate={updateContactInList}
        />
      )}
        <button onClick={handleBack} className='Btn'>
        🏠
              </button>
    </div>
  );
};

export default ContactPreview;
