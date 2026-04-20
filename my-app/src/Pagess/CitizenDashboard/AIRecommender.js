import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Schemes.css";

function AIRecommender() {
  const navigate = useNavigate();

  const [income, setIncome] = useState("");

  const [year, setYear] = useState("");
  const [religion, setReligion] = useState("");
  const [category, setCategory] = useState("");
  const [disability, setDisability] = useState("");
  const [department, setDepartment] = useState("");

  const [results, setResults] = useState([]);

  const recommendSchemes = () => {
    let rec = [];

    

    /* Low Income */
    if (Number(income) < 200000) {
      rec.push("💰 Low Income Assistance Scheme");
    }

    /* SC/ST/OBC */
    if (
      category === "SC" ||
      category === "ST" ||
      category === "OBC"
    ) {
      rec.push("📚 Reserved Category Scholarship");
    }

    /* Disability */
    if (disability === "Yes") {
      rec.push("♿ Disability Support Scheme");
    }

    /* Agriculture Department */
    if (department === "Agriculture") {
      rec.push("🚜 Seed Subsidy Scheme");
    }

    /* Education Department */
    if (department === "Education") {
      rec.push("🏫 Student Laptop Scheme");
    }

    /* Minority */
    if (religion === "Minority") {
      rec.push("🕌 Minority Welfare Scheme");
    }

    if (rec.length === 0) {
      rec.push("No matching schemes found.");
    }

    setResults(rec);
  };

  return (
    <div className="portal-page">

      <h1>🤖 AI Scheme Recommendation</h1>

      <div className="recommend-box">

       
        <input
          type="number"
          placeholder="Annual Income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />

        {/* New Fields */}
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="">Financial Year</option>
          <option>2025-26</option>
          <option>2026-27</option>
        </select>

        <select
          value={religion}
          onChange={(e) => setReligion(e.target.value)}
        >
          <option value="">Religion</option>
          <option>Hindu</option>
          <option>Muslim</option>
          <option>Christian</option>
          <option>Minority</option>
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Caste / Category</option>
          <option>General</option>
          <option>OBC</option>
          <option>SC</option>
          <option>ST</option>
        </select>

        <select
          value={disability}
          onChange={(e) => setDisability(e.target.value)}
        >
          <option value="">Disability</option>
          <option>No</option>
          <option>Yes</option>
        </select>

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="">Department</option>
          <option>Agriculture</option>
          <option>Education</option>
          <option>Women & Child</option>
          <option>Social Welfare</option>
        </select>

        <button onClick={recommendSchemes}>
          Get Recommendation
        </button>

      </div>

      {/* Results */}
      <div className="scheme-grid">

        {results.map((item, index) => (
          <div className="modern-card" key={index}>
            <h2>{item}</h2>

            <button onClick={() => navigate("/login")}>
              Apply Now
            </button>
          </div>
        ))}

      </div>

    </div>
  );
}

export default AIRecommender;