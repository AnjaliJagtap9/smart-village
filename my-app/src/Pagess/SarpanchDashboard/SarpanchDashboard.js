import React, { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../../api/axiosConfig";
import "./SarpanchDashboard.css";

function SarpanchDashboard() {
  const [tab, setTab] = useState("dashboard");

  const [announcements, setAnnouncements] = useState([]);
  const [complaints, setComplaints] = useState([]);
  const [applications, setApplications] = useState([]);
  const [schemes, setSchemes] = useState([]);

  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    loadAllData();
  }, []);

  const loadAllData = async () => {
    try {
      const a = await api.get(`/announcements`);
      const c = await api.get(`/complaints`);
      const ap = await api.get(`/applications`);
      const s = await api.get(`/schemes`);

      setAnnouncements(Array.isArray(a.data) ? a.data : a.data.content || []);
      setComplaints(Array.isArray(c.data) ? c.data : c.data.content || []);
      setApplications(Array.isArray(ap.data) ? ap.data : ap.data.content || []);
      setSchemes(Array.isArray(s.data) ? s.data : s.data.content || []);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const resolveComplaint = async (id) => {
    await api.put(
      `/complaints/${id}/status?status=RESOLVED`,
      {},
      config
    );
    loadAllData();
  };

  const progressComplaint = async (id) => {
    await api.put(
      `/complaints/${id}/status?status=IN_PROGRESS`,
      {},
      config
    );
    loadAllData();
  };

  const approveApp = async (id) => {
    await api.put(
      `/applications/${id}/status/APPROVED`,
      {},
      config
    );
    loadAllData();
  };

  const rejectApp = async (id) => {
    await api.put(
      `/applications/${id}/status/REJECTED`,
      {},
      config
    );
    loadAllData();
  };

  const deactivateScheme = async (id) => {
    await api.put(`/schemes/${id}/deactivate`, {}, config);
    loadAllData();
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <div className="admin-sidebar">
        <h2>Sarpanch Panel</h2>

        <button onClick={() => setTab("dashboard")}>Dashboard</button>
        <button onClick={() => setTab("announcements")}>Announcements</button>
        <button onClick={() => setTab("complaints")}>Complaints</button>
        <button onClick={() => setTab("applications")}>Applications</button>
        <button onClick={() => setTab("schemes")}>Schemes</button>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      {/* Main */}
      <div className="admin-main">
        {/* Dashboard */}
        {tab === "dashboard" && (
          <div className="card-box">
            <h2>Sarpanch Dashboard</h2>

            <div className="form-grid">
              <div className="card-box">
                <h3>Total Announcements</h3>
                <h1>{announcements.length}</h1>
              </div>

              <div className="card-box">
                <h3>Total Complaints</h3>
                <h1>{complaints.length}</h1>
              </div>

              <div className="card-box">
                <h3>Total Applications</h3>
                <h1>{applications.length}</h1>
              </div>

              <div className="card-box">
                <h3>Total Schemes</h3>
                <h1>{schemes.length}</h1>
              </div>
            </div>
          </div>
        )}

        {/* Announcements */}
        {tab === "announcements" && (
          <div className="card-box">
            <h2>All Announcements</h2>

            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Content</th>
                </tr>
              </thead>

              <tbody>
                {announcements.map((a) => (
                  <tr key={a.id}>
                    <td>{a.id}</td>
                    <td>{a.title}</td>
                    <td>{a.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Complaints */}
        {tab === "complaints" && (
          <div className="card-box">
            <h2>Manage Complaints</h2>

            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Citizen</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {complaints.map((c) => (
                  <tr key={c.id}>
                    <td>{c.id}</td>
                    <td>{c.title}</td>
                    <td>{c.citizenName}</td>
                    <td>{c.status}</td>
                    <td>
                      <button
                        className="progress-btn"
                        onClick={() => progressComplaint(c.id)}
                      >
                        Progress
                      </button>

                      <button
                        className="resolve-btn"
                        onClick={() => resolveComplaint(c.id)}
                      >
                        Resolve
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Applications */}
        {tab === "applications" && (
          <div className="card-box">
            <h2>Scheme Applications</h2>

            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Full Name</th>
                  <th>Scheme</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {applications.map((a) => (
                  <tr key={a.id}>
                    <td>{a.id}</td>
                    <td>{a.fullName}</td>
                    <td>{a.schemeName}</td>
                    <td>{a.status}</td>
                    <td>
                      <button
                        className="progress-btn"
                        onClick={() => approveApp(a.id)}
                      >
                        Approve
                      </button>

                      <button
                        className="resolve-btn"
                        onClick={() => rejectApp(a.id)}
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Schemes */}
        {tab === "schemes" && (
          <div className="card-box">
            <h2>All Schemes</h2>

            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Year</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {schemes.map((s) => (
                  <tr key={s.id}>
                    <td>{s.id}</td>
                    <td>{s.name}</td>
                    <td>{s.department}</td>
                    <td>{s.financialYear}</td>
                    <td>{s.active ? "Active" : "Inactive"}</td>
                    <td>
                      <button
                        className="resolve-btn"
                        onClick={() => deactivateScheme(s.id)}
                      >
                        Deactivate
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default SarpanchDashboard;