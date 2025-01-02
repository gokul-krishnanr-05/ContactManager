import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/AddContact.css";

const AddContact = () => {
  const [Data, setData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Address: "",
  });

  const [errMessage, setErrorMessage] = useState("");

  const Url = "http://localhost:5000/api/contact";



  const handleAddContact = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${Url}`, Data);
      setData({ Name: "", Email: "", Phone: "", Address: "" });
      alert("Contact added successfully");
     
    } catch (error) {
      console.error("Error adding contact:", error);
      setErrorMessage("Email or Phone Number Already exists.");
    }
  };

  const handleinputChange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleBack = () => { 
    navigate(-1);
  };

  return (
    <div className="cont2">
      <div className="container2">
        <h1>ADD NEW CONTACT</h1>

        {errMessage && <div className="error-message">{errMessage}</div>}

        <form onSubmit={handleAddContact} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="Name"
              value={Data.Name}
              onChange={handleinputChange}
              className="field"
              placeholder="Enter Name"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="Email"
              value={Data.Email}
              onChange={handleinputChange}
              className="field"
              placeholder="Enter Email"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="Phone"
              value={Data.Phone}
              onChange={handleinputChange}
              className="field"
              placeholder="Enter Phone Number"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="Address"
              value={Data.Address}
              onChange={handleinputChange}
              className="field"
              placeholder="Enter Address"
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Add Contact
          </button>
        </form>
        <button onClick={handleBack} className="back-btn">
         Home
        </button>
      </div>
    </div>
  );
};
export default AddContact;
