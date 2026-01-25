import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'; // Ensure Navbar.jsx file exists here

function App() {
  return (
    <Router>
      {/* Navbar ko Routes ke bahar rakha hai taaki wo har page par dikhe */}
      <Navbar /> 
      
      <Routes>
        {/* <Route path="/" element={<Bhupendra_verma />} /> */}


        {/* Add other routes here like /projects, /contact */}
      </Routes>
      {/* <Footer /> */}


    </Router>
  );
}

export default App;