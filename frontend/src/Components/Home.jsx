import React from "react";

import { Link } from "react-router-dom";
import "./Home.css";
import "font-awesome/css/font-awesome.min.css";

const Home = () => {
  return (
    <div className="container1">
      <div className="sidebar">
        <header className="header">
          <div className="logo">
            <img src="https://cdn4.iconfinder.com/data/icons/managers-7/307/Untitled-29-512.png" alt="logo" />
          </div>
          <h1>CONTACT MANAGER</h1>
        </header>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/contact">
                <i className="fa fa-address-book"></i>
                View Contacts
              </Link>
              <Link to="/contact">
                <i className="fa fa-plus-circle"></i>
                Add Contacts
              </Link>
              <Link to="/contact">
                <i className="fa fa-users"></i>
                Group Contacts
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="main-content">
        <section className="content">
          <h2>Manage Your Contacts Effortlessly</h2>
          <p>
            Organize, update, and delete your contacts in a few simple steps!
          </p>
        </section>
        <section className="features">
          <h3>Key Features</h3>
          <ul>
            <li>📞 Add, Edit, and Delete Contacts</li>
            <li>🔍 Search Contacts by Name or Phone</li>
            <li>💼 Organize Contacts into Groups</li>
            <li>📅 Easily Manage Contact Details</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Home;
