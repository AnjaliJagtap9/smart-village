import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../api/api";

function SchemePage() {
  const { type } = useParams();
  const navigate = useNavigate();
  const [schemes, setSchemes] = useState([]);

 useEffect(() => {
  axios.get(`${BASE_URL}/api/schemes/active`)
    .then((res) => {
      console.log("👉 BACKEND DATA:", res.data);
      setSchemes(res.data);
    })
    .catch((err) => console.log(err));
}, []);

  // filter by department (IMPORTANT FIX)
  const filteredSchemes = schemes.filter((s) => {
  return (
    s.department &&
    s.department.toLowerCase().includes(type.toLowerCase())
  );
});

  const handleApply = (schemeId) => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    } else {
      navigate(`/apply/${schemeId}`);
    }
  };

  return (
    <div>
      <h1>{type.toUpperCase()} SCHEMES</h1>

      {filteredSchemes.length === 0 ? (
        <p>No schemes found</p>
      ) : (
        filteredSchemes.map((scheme) => (
          <div key={scheme.id} className="card">
            <h2>{scheme.name}</h2>
            <p>{scheme.description}</p>
            <p>{scheme.department}</p>

            <button onClick={() => handleApply(scheme.id)}>
              Apply Now
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default SchemePage;