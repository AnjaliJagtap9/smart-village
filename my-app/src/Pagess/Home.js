import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";




import "../Styles/Home.css";
import HomeSlider from "../Component/HomeSlider";

function HomeContent() {
  const navigate = useNavigate();
  return (
    
  <div className="home-content">
     {/* 🔴 Notice Bar */}
      <div className="notice-bar">
        <marquee>
          📢 New Scholarship Started | 🌾 PM Kisan Registration Open |
          💧 Water Supply Off Tomorrow | 🏫 Gram Sabha Meeting Sunday
        </marquee>
      </div>
  <HomeSlider />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
     
      {/* Hero Section */}
      <div className="hero">
        <h1>Smart Village Management System</h1>
        <p>Digital platform for citizens, admin & sarpanch</p>

        <div className="hero-buttons">
    

         <button onClick={() => navigate("/citizen")}>
  Citizen
</button>
          <button onClick={() => navigate("/admin")}>Admin</button>
          <button onClick={() => navigate("/sarpanch")}>Sarpanch</button>
        </div>
      </div>
    </motion.div>



{/* Success Story */}
<div className="success-banner">

  <div>
    <h2>🏆 Village Growth Success</h2>
    <p>
      500+ citizens used online services successfully.
      120 farmers got benefits this year.
    </p>
  </div>

  <button>Read More</button>

</div>
    {/* Features */}
    <div className="features">
      <div className="card">📢 Raise Complaint</div>
      <div className="card">📍 Track Status</div>
      <div className="card">🏛 View Schemes</div>
      <div className="card">📣 Announcements  </div>
    </div>

  </div>
);
}

export default HomeContent;