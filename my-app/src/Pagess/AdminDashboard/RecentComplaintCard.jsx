import { useState } from "react";

export default function RecentComplaintCard({ complaint }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`complaintCard recent ${expanded ? "expanded" : ""}`}
      onClick={() => setExpanded(!expanded)}
      title={!expanded ? `${complaint.description} - Citizen: ${complaint.citizen}` : ""}
    >
      <h4>{complaint.title}</h4>
      <span className={`status ${complaint.status.toLowerCase()}`}>{complaint.status}</span>

      {expanded && (
        <div className="extraInfo">
          <p>{complaint.description}</p>
          <p><b>Citizen:</b> {complaint.citizen}</p>
        </div>
      )}
    </div>
  );
}
