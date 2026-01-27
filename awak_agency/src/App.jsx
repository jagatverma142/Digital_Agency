import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'; // Ensure Navbar.jsx file exists here


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0c] text-white">
            <Navbar />
  {/* Rest of your content */}
      </div>
      
      <Routes>
        {/* <Route path="/" element={<Bhupendra_verma />} /> */}


        {/* Add other routes here like /projects, /contact */}
      </Routes>
      {/* <Footer /> */}


    </Router>
  );
}

export default App;