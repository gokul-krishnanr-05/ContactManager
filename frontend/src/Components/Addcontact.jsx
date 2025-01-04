import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "../styles/AddContact.module.css"; 

const AddContact = () => {
  const [Data, setData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Address: "",
  });

  const [errMessage, setErrorMessage] = useState("");

  const Url = "https://contactmanager-1-x6vp.onrender.com/api/contact";

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
    <div className={styles.cont2}>
      <div className={styles.container2}>
        <h1>ADD NEW CONTACT</h1>

        {errMessage && <div className={styles.errorMessage}>{errMessage}</div>}

        <form onSubmit={handleAddContact} className={styles.contactForm}>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="Name"
              value={Data.Name}
              onChange={handleinputChange}
              className={styles.field}
              placeholder="Enter Name"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="email"
              name="Email"
              value={Data.Email}
              onChange={handleinputChange}
              className={styles.field}
              placeholder="Enter Email"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="text"
              name="Phone"
              value={Data.Phone}
              onChange={handleinputChange}
              className={styles.field}
              placeholder="Enter Phone Number"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="text"
              name="Address"
              value={Data.Address}
              onChange={handleinputChange}
              className={styles.field}
              placeholder="Enter Address"
              required
            />
          </div>

          <button type="submit" className={styles.submitBtn}>
            Add Contact
          </button>
        </form>
        <button onClick={handleBack} className={styles.backBtn}>
          Home
        </button>
      </div>
    </div>
  );
};

export default AddContact;
