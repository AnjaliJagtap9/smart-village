import React, { useState, useEffect } from "react";
import "../Styles/LeftSidebar.css";

const LeftSidebar = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setAnnouncements([
      {
        id: 1,
        title: "Water Supply Notice",
        message: "Water supply will be off tomorrow from 10 AM to 4 PM.",
        type: "notice",
        by: "Sarpanch",
        date: "2026-04-16",
        isNew: true,
        isUrgent: true,
      },
      {
        id: 2,
        title: "Health Camp Meeting",
        message: "Free health checkup camp this Sunday.",
        type: "meeting",
        by: "Admin",
        date: "2026-04-14",
      },
      {
        id: 3,
        title: "Farmer Subsidy Scheme",
        message: "Apply now for PM Kisan benefits.",
        type: "scheme",
        by: "Government",
        date: "2026-04-13",
      },
    ]);
  }, []);

  /* Search Filter */
  const filteredData = announcements.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="sidebar">

      {/* SEARCH BAR */}
      <div className="search-box">
        <input
          type="text"
          placeholder="🔍 Search announcement..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* CARDS */}
      {filteredData.map((item) => (
        <div
          key={item.id}
          className={`announcement-card ${
            item.isUrgent ? "urgent" : ""
          }`}
        >
          <span className={`type-badge ${item.type}`}>
            {item.type.toUpperCase()}
          </span>

          <h4>
            {item.title}
            {item.isNew && (
              <span className="new-badge">NEW</span>
            )}
          </h4>

          <p>{item.message}</p>

          <div className="meta">
            <span>{item.by}</span>
            <span>{item.date}</span>
          </div>
        </div>
      ))}

    </div>
  );
};

export default LeftSidebar;