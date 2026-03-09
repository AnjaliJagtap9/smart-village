import { Link } from "react-router-dom";
import React from "react";
import "../Styles/RightSidebar.css";
const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <Link to="/register" className="sidebar-box">
        Register
      </Link>

      <Link to="/login" className="sidebar-box">
        Login
      </Link>
    </div>
  );
};
export default RightSidebar;