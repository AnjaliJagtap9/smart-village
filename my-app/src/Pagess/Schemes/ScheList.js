import React, { useEffect, useState } from "react";
import { api } from "../../api/axiosConfig";
import { useNavigate } from "react-router-dom";

function SchemeList() {
  const [schemes, setSchemes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadSchemes();
  }, []);

  const loadSchemes = async () => {
    try {
      const res = await api.get("/schemes/active");
      setSchemes(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.log(error);
    }
  };

  const handleApply = (schemeId) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first to apply");
      navigate("/login");
      return;
    }

    navigate("/apply", { state: { schemeId } });
  };

  return (
    <div>
      <h2>Active Schemes</h2>

      {schemes.map((s) => (
        <div key={s.id} className="scheme-card">

          <h3>{s.name}</h3>
          <p>{s.description}</p>
          <p>Department: {s.department}</p>

          <button onClick={() => handleApply(s.id)}>
            Apply Now
          </button>

        </div>
      ))}
    </div>
  );
}

export default SchemeList;