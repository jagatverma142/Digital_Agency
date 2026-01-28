import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Fixed spelling
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Work from './Pages/Work';
import Team from './Pages/Team';  
import Pricing from './Pages/Pricing';
import Footer from './Components/Footer';
function App() {
  return (
    <Router>
      {/* Navbar yahan rahega taaki har page pe dikhe */}
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Pricing" element={<Pricing />} />



        {/* Baaki routes yahan add karein */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;