import React, { useState } from "react";
import "./Schemes.css";
import "./TrackApplication.css";

function TrackApplication() {
  const [applicationId, setApplicationId] = useState("");
  const [result, setResult] = useState(null);

  const applications = [
    {
      id: "APP101",
      scheme: "PM Kisan Samman Nidhi",
      applicant: "Anjali Jagtap",
      status: "Pending",
      department: "Agriculture",
      submittedDate: "12-04-2026",
      officer: "Admin"
    },
    {
      id: "APP102",
      scheme: "Post Matric Scholarship",
      applicant: "Anjali Jagtap",
      status: "Approved",
      department: "Education",
      submittedDate: "08-04-2026",
      officer: "Sarpanch"
    },
    {
      id: "APP103",
      scheme: "Women Entrepreneurship Scheme",
      applicant: "Anjali Jagtap",
      status: "In Progress",
      department: "Women & Child",
      submittedDate: "10-04-2026",
      officer: "Admin"
    }
  ];

  const handleTrack = () => {
    const found = applications.find(
      (item) =>
        item.id.toLowerCase() === applicationId.toLowerCase()
    );

    if (found) {
      setResult(found);
    } else {
      setResult("notfound");
    }
  };

  return (
    <div className="portal-page">

      <h1>📄 Track Your Application</h1>

      <div className="recommend-box">

        <input
          type="text"
          placeholder="Enter Application ID (APP101)"
          value={applicationId}
          onChange={(e) =>
            setApplicationId(e.target.value)
          }
        />

        <button onClick={handleTrack}>
          Track Application
        </button>

      </div>

      {/* Result */}
      {result && result !== "notfound" && (
        <div className="modern-card track-card">

          <h2>{result.scheme}</h2>

          <p><strong>Application ID:</strong> {result.id}</p>

          <p><strong>Applicant:</strong> {result.applicant}</p>

          <p><strong>Status:</strong> {result.status}</p>

          <p><strong>Department:</strong> {result.department}</p>

          <p><strong>Submitted Date:</strong> {result.submittedDate}</p>

          <p><strong>Handled By:</strong> {result.officer}</p>

        </div>
      )}

      {result === "notfound" && (
        <div className="modern-card track-card">
          <h2>❌ Application Not Found</h2>
          <p>Please enter valid Application ID.</p>
        </div>
      )}

    </div>
  );
}

export default TrackApplication;