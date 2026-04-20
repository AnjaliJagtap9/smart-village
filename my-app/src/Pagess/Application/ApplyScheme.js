import React, { useState } from "react";
import { api } from "../../api/axiosConfig";
import { useLocation, useNavigate } from "react-router-dom";

function ApplyScheme() {
  const location = useLocation();
  const navigate = useNavigate();

  const schemeId = location.state?.schemeId;

  const [form, setForm] = useState({
    schemeId: schemeId,
    fullName: "",
    address: "",
    mobile: "",
    annualIncome: "",
    religion: "",
    caste: "",
    department: "",
  });

  const submitApplication = async () => {
    try {
      await api.post("/applications", form);

      alert("Application Submitted Successfully");
      navigate("/citizen");

    } catch (error) {
      console.log(error);
      alert("Application Failed");
    }
  };

  return (
    <div>
      <h2>Apply Scheme</h2>

      <input placeholder="Full Name"
        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
      />

      <input placeholder="Address"
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />

      <input placeholder="Mobile"
        onChange={(e) => setForm({ ...form, mobile: e.target.value })}
      />

      <input placeholder="Income"
        onChange={(e) => setForm({ ...form, annualIncome: e.target.value })}
      />

      <input placeholder="Religion"
        onChange={(e) => setForm({ ...form, religion: e.target.value })}
      />

      <input placeholder="Caste"
        onChange={(e) => setForm({ ...form, caste: e.target.value })}
      />

      <input placeholder="Department"
        onChange={(e) => setForm({ ...form, department: e.target.value })}
      />

      <button onClick={submitApplication}>
        Submit Application
      </button>

    </div>
  );
}

export default ApplyScheme;