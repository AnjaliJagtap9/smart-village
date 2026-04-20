import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Schemes.css";

function SchemesPortal() {
  const navigate = useNavigate();

  const allSchemes = [
    {
      name: "Post Matric Scholarship",
      category: "Student",
      eligibility: "Reserved category students",
      benefit: "Tuition fees support"
    },
    {
      name: "PM Kisan Samman Nidhi",
      category: "Farmer",
      eligibility: "Small farmers",
      benefit: "₹6000 yearly"
    },
    {
      name: "Women Entrepreneurship",
      category: "Women",
      eligibility: "Rural women",
      benefit: "Business support"
    },
    {
      name: "Old Age Pension",
      category: "Senior",
      eligibility: "Age 60+",
      benefit: "Monthly pension"
    }
  ];

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredSchemes = allSchemes.filter((scheme) => {
    return (
      (filter === "All" || scheme.category === filter) &&
      scheme.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="portal-page">

      <h1>🏛 Government Schemes Portal</h1>

      {/* Search + Filter */}
      <div className="top-controls">

        <input
          type="text"
          placeholder="Search scheme..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setFilter(e.target.value)}>
          <option>All</option>
          <option>Student</option>
          <option>Farmer</option>
          <option>Women</option>
          <option>Senior</option>
        </select>

      </div>

      {/* Cards */}
      <div className="scheme-grid">

        {filteredSchemes.map((scheme, index) => (
          <div className="modern-card" key={index}>

            <span className="tag">{scheme.category}</span>

            <h2>{scheme.name}</h2>

            <p><strong>Eligibility:</strong> {scheme.eligibility}</p>

            <p><strong>Benefit:</strong> {scheme.benefit}</p>

            <button onClick={() => navigate("/login")}>
              Apply Now
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default SchemesPortal;