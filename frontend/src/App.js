import React from 'react';
import { Routes, Route } from 'react-router-dom';  
import Home from './Pages/Home';  
import Addcontact from './Components/Addcontact';  
import ContactPreview from './Pages/ContactPreview';

const App = () => {
  return (
    <div>
      <Routes>
      
        <Route path="/" element={<Home />} />
          <Route path="/add" element={<Addcontact />} />
          <Route path="/contact" element={<ContactPreview/>} />
          
      </Routes>
    </div>
  );
};

export default App;
