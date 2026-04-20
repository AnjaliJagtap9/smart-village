import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/RightSidebar.css";

function RightSidebar() {
  const navigate = useNavigate();

  return (
    <div className="right-sidebar">

      {/* First 4 Main Boxes */}
      <div className="action-box" onClick={() => navigate("/register")}>
        📝 New Applicant Registration
      </div>

      <div className="action-box" onClick={() => navigate("/login")}>
        🔐 Applicant Login
      </div>

      <div className="action-box" onClick={() => navigate("/track-application")}>
        📄 Track Your Application
      </div>

      <div className="action-box" onClick={() => navigate("/ai-schemes")}>
        🔍 Find Eligible Schemes
      </div>

      {/* Dashboards */}
      <div className="action-box dashboard citizen"
           onClick={() => navigate("/citizen")}>
        👨‍🌾 Citizen Dashboard
      </div>

      <div className="action-box dashboard admin"
           onClick={() => navigate("/admin")}>
        🧑‍💼 Admin Dashboard
      </div>

      <div className="action-box dashboard sarpanch"
           onClick={() => navigate("/sarpanch")}>
        🏛️ Sarpanch Dashboard
      </div>

      {/* User Manuals */}
      <div className="manual-box">

        <div className="manual-title">
          📄 User Manuals
        </div>

        <div className="manual-links">
          <a href="/">Citizen Portal Guide</a>
          <a href="/">Admin Dashboard Guide</a>
          <a href="/">Sarpanch Dashboard Guide</a>
          <a href="/">How To Apply Schemes</a>
        </div>

      </div>

    </div>
  );
}

export default RightSidebar;