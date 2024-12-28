// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Apple = () => {
//   const [contacts, setContacts] = useState([]);
//   const [formData, setFormData] = useState({
//     Name: "",
//     Email: "",
//     Phone: "",
//     Address: "",
//   });

//   const BASE_URL = "http://localhost:5000/api/contact" // Replace with your backend API URL

//   // Fetch contacts from the backend
//   const fetchContacts = async () => {
//     try {
//       const response = await axios.get(`${BASE_URL}`);
//       setContacts(response.data);
//     } catch (error) {
//       console.error("Error fetching contacts:", error);
//     }
//   };

//   // Add a new contact
//   const handleAddContact = async (event) => {
//     event.preventDefault();
//     try {
//       await axios.post(`${BASE_URL}`, formData);
//       setFormData({ Name: "", Email: "", Phone: "", Address: "" });
//       fetchContacts();
//     } catch (error) {
//       console.error("Error adding contact:", error);
//     }
//   };

//   // Delete a contact
//   const handleDeleteContact = async (id) => {
//     try {
//       await axios.delete(`${BASE_URL}/${id}`);
//       fetchContacts();
//     } catch (error) {
//       console.error("Error deleting contact:", error);
//     }
//   };

//   // Update form data
//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Fetch contacts on component mount
//   useEffect(() => {
//     fetchContacts();
//   }, []);

//   return (
//     <div style={{ margin: "20px" }}>
//       <h1>Contact Management</h1>

//       {/* Form to Add Contact */}
//       <form onSubmit={handleAddContact}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="Name"
//             value={formData.Name}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="Email"
//             value={formData.Email}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Phone:</label>
//           <input
//             type="text"
//             name="Phone"
//             value={formData.Phone}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Address:</label>
//           <input
//             type="text"
//             name="Address"
//             value={formData.Address}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <button type="submit">Add Contact</button>
//       </form>

//       {/* Display Contacts */}
//       <h2>Contact List</h2>
//       <ul style={{ listStyle: "none", padding: 0 }}>
//         {contacts.map((contact) => (
//           <li
//             key={contact._id}
//             style={{
//               marginBottom: "10px",
//               padding: "10px",
//               background: "#f9f9f9",
//               border: "1px solid #ddd",
//               borderRadius: "5px",
//             }}
//           >
//             <strong>{contact.Name}</strong>
//             <p>{contact.Email}</p>
//             <p>{contact.Phone}</p>
//             <p>{contact.Address}</p>
//             <button
//               style={{
//                 background: "red",
//                 color: "white",
//                 border: "none",
//                 padding: "5px 10px",
//                 cursor: "pointer",
//               }}
//               onClick={() => handleDeleteContact(contact._id)}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Apple;
