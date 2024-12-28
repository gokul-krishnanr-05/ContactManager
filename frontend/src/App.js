import React from 'react';
import { Routes, Route } from 'react-router-dom';  
import Home from './Components/Home';  
import Addcontact from './Components/Addcontact';  

const App = () => {
  return (
    <div>
      <Routes>
      
        <Route path="/" element={<Home />} />
          <Route path="/add" element={<Addcontact />} />
      </Routes>
    </div>
  );
};

export default App;
