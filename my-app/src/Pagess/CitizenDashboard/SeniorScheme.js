import React, { useEffect, useState } from "react";
import { api } from "../../api/axiosConfig";

function StudentSchemes() {
  const [schemes, setSchemes] = useState([]);

  useEffect(() => {
    loadSchemes();
  }, []);

  const loadSchemes = async () => {
    try {
      const res = await api.get("/schemes/active");

      const data = Array.isArray(res.data)
        ? res.data
        : res.data.content || [];

      // FILTER ONLY SENIOR CITIZENS
      const filtered = data.filter(
        (s) => s.department?.toLowerCase() === "senior"
      );

      setSchemes(filtered);
    } catch (error) {
      console.log(error);
    }
  };

  const handleApply = (schemeId) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      window.location.href = "/login";
      return;
    }

    window.location.href = "/apply";
  };

  return (
    <div>
      <h2>Student Schemes</h2>

      {schemes.map((s) => (
        <div key={s.id}>
          <h3>{s.name}</h3>
          <p>{s.description}</p>

          <button onClick={() => handleApply(s.id)}>
            Apply
          </button>
        </div>
      ))}
    </div>
  );
}

export default StudentSchemes;