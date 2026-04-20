import { useState } from "react";
import "./ManageComplaints.css";
import RecentComplaintCard from "./RecentComplaintCard";

function ManageComplaints() {
  const [filter, setFilter] = useState("All");
  const [searchText, setSearchText] = useState("");

  const [complaints, setComplaints] = useState([
    { id: 1, title: "Water leakage issue", description: "Pipeline leakage near main road", citizen: "Rahul Patil", status: "Pending" },
    { id: 2, title: "Street light not working", description: "Light pole near temple is off", citizen: "Anjali Jagtap", status: "Approved" },
    { id: 3, title: "Garbage not collected", description: "Garbage issue in ward no 3", citizen: "Amit Pawar", status: "Resolved" },
    { id: 4, title: "Potholes on Main Street", description: "Large potholes causing traffic issues", citizen: "Sneha Kulkarni", status: "Pending" },
  ]);

  //  STATUS UPDATE LOGIC
  const updateStatus = (id, newStatus) => {
    setComplaints(
      complaints.map((complaint) => {
        if (complaint.id !== id) return complaint;
        if (complaint.status === "Resolved") return complaint;
        if (complaint.status === "Approved" && newStatus === "Pending") return complaint;
        return { ...complaint, status: newStatus };
      })
    );
  };

  // SEARCH + FILTER
  const filteredComplaints = complaints.filter((complaint) => {
    const matchesSearch =
      complaint.title.toLowerCase().includes(searchText.toLowerCase()) ||
      complaint.description.toLowerCase().includes(searchText.toLowerCase()) ||
      complaint.citizen.toLowerCase().includes(searchText.toLowerCase());

    const matchesFilter = filter === "All" || complaint.status === filter;
    return matchesSearch && matchesFilter;
  });

  // RECENT COMPLAINTS (LATEST 3)
  const recentComplaints = [...complaints].sort((a, b) => b.id - a.id).slice(0, 3);

  return (
    <div className="complaintsPage">
      <h2>Manage Complaints</h2>

      {/*  SEARCH + FILTER */}
      <div className="searchFilterRow">
        <input
          type="text"
          placeholder="Search complaints..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="in-Progress">Approved</option>
          <option value="Resolved">Resolved</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      {/*  RECENT COMPLAINTS */}
      <h3>Recent Complaints</h3>
      <div className="complaintGrid">
        {recentComplaints.map((complaint) => (
          <RecentComplaintCard key={complaint.id} complaint={complaint} />
        ))}
      </div>

      {/*  ALL COMPLAINTS */}
      <h3>All Complaints</h3>
      <div className="complaintGrid">
        {filteredComplaints.length === 0 ? (
          <p className="noComplaints">No complaints found</p>
        ) : (
          filteredComplaints.map((complaint) => (
            <div key={complaint.id} className="complaintCard all">
              <h3>{complaint.title}</h3>
              <p>{complaint.description}</p>
              <p><b>Citizen:</b> {complaint.citizen}</p>
              <span className={`status ${complaint.status.toLowerCase()}`}>{complaint.status}</span>

              <div className="actionBox">
                <select
                  value={complaint.status}
                  onChange={(e) => updateStatus(complaint.id, e.target.value)}
                  disabled={complaint.status === "Resolved"}
                >
                  <option value="Pending" disabled={complaint.status !== "Pending"}>Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="Resolved">Resolved</option>
                </select>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ManageComplaints;
