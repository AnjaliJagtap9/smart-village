import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar() {
  return (
    <div className="dbt-navbar">

      <Link to="/howtoapply" className="dbt-apply">
        How to Apply Online ?
      </Link>
<Link to="/schemes/student" className="dbt-item">🎓 Student Schemes</Link>
<Link to="/schemes/farmer" className="dbt-item">🌾 Farmer Schemes</Link>
<Link to="/schemes/women" className="dbt-item">👩 Women Schemes</Link>
<Link to="/schemes/labour" className="dbt-item">👷 Labour Schemes</Link>
<Link to="/schemes/senior" className="dbt-item">👴 Pension Schemes</Link>
      

      <Link to="/login" className="dbt-item">🔐 Login</Link>

    </div>
  );
}

export default Navbar;