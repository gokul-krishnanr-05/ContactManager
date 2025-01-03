import React from "react";
import "../styles/ContactPreview.css";
const SearchBar = ({ searchQuery, onSearchChange }) => {
    return (
        <div className="searchBar">
      <input
        type="text"
        value={searchQuery}
        onChange={onSearchChange} 
        placeholder="Search contacts"
        className="input"
        
      />
      </div>
    );
  };

export default SearchBar;

  
