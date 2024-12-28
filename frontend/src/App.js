import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Importing necessary components from react-router-dom
import Home from './Components/Home';  // Importing Home component
import Addcontact from './Components/Addcontact';  // Importing AddContact component

const App = () => {
  return (
    <div>
      <Routes>
        {/* Route for Home page */}
        <Route path="/" element={<Home />} />
        
        {/* Route for Add Contact page */}
        <Route path="/add" element={<Addcontact />} />
      </Routes>
    </div>
  );
};

export default App;
