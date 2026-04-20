import React, { useEffect, useState } from "react";
import { api } from "../../api/axiosConfig";
import "../../Styles/AdminDashboard.css";

function AdminDashboard() {
  const [tab, setTab] = useState("dashboard");

  const [announcements, setAnnouncements] = useState([]);
  const [complaints, setComplaints] = useState([]);
  const [schemes, setSchemes] = useState([]);
  const [applications, setApplications] = useState([]);
  const [users, setUsers] = useState([]);

  const [announceForm, setAnnounceForm] = useState({
    title: "",
    content: "",
    type: "NOTICE",
  });

  useEffect(() => {
    loadAllData();
  }, []);

  const loadAllData = async () => {
    try {
      const a = await api.get(`/announcements`);
setAnnouncements(Array.isArray(a.data) ? a.data : a.data.content || []);
      const c = await api.get(`/complaints`);
setComplaints(Array.isArray(c.data) ? c.data : c.data.content || []);

const s = await api.get(`/schemes`);
setSchemes(Array.isArray(s.data) ? s.data : s.data.content || []);

const ap = await api.get(`/applications`);
setApplications(Array.isArray(ap.data) ? ap.data : ap.data.content || []);

const u = await api.get(`/users`);
setUsers(Array.isArray(u.data) ? u.data : u.data.content || []);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const postAnnouncement = async () => {
    try {
      await api.post("/announcements/post", announceForm);

      alert("Announcement Posted");

      setAnnounceForm({
        title: "",
        content: "",
        type: "All",
      });

      loadAllData();
    } catch (error) {
      alert("Error posting");
    }
  };

  const deleteAnnouncement = async (id) => {
    await api.delete(`/announcements/${id}`);
    loadAllData();
  };

  const resolveComplaint = async (id) => {
    await api.put(`/complaints/${id}/status?status=RESOLVED`, {});
    loadAllData();
  };

  const progressComplaint = async (id) => {
    await api.put(`/complaints/${id}/status?status=IN_PROGRESS`, {});
    loadAllData();
  };

  const approveApp = async (id) => {
    await api.put(`/applications/${id}/status/APPROVED`, {});
    loadAllData();
  };

  const rejectApp = async (id) => {
    await api.put(`/applications/${id}/status/REJECTED`, {});
    loadAllData();
  };

  const blockUser = async (id) => {
    await api.put(`/users/block/${id}`, {});
    loadAllData();
  };

  const activateUser = async (id) => {
    await api.put(`/users/activate/${id}`, {});
    loadAllData();
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-sidebar">
        <h2>Admin Panel</h2>

        <button onClick={() => setTab("dashboard")}>Dashboard</button>
        <button onClick={() => setTab("announcement")}>Announcements</button>
        <button onClick={() => setTab("complaints")}>Complaints</button>
        <button onClick={() => setTab("schemes")}>Schemes</button>
        <button onClick={() => setTab("applications")}>Applications</button>
        <button onClick={() => setTab("users")}>Users</button>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      <div className="admin-main">
        {tab === "dashboard" && (
          <div className="card-box">
            <h2>Dashboard Overview</h2>

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
                <h3>Total Schemes</h3>
                <h1>{schemes.length}</h1>
              </div>

              <div className="card-box">
                <h3>Total Users</h3>
                <h1>{users.length}</h1>
              </div>
            </div>
          </div>
        )}

        {tab === "announcement" && (
          <div className="card-box">
            <h2>Manage Announcements</h2>

            <div className="form-grid">
              <input
                placeholder="Title"
                value={announceForm.title}
                onChange={(e) =>
                  setAnnounceForm({
                    ...announceForm,
                    title: e.target.value,
                  })
                }
              />

              <select
                value={announceForm.type}
                onChange={(e) =>
                  setAnnounceForm({
                    ...announceForm,
                    type: e.target.value,
                  })
                }
              >
                 <option>MEETING</option>
                <option>NOTICE</option>
                <option>ALERT</option>
                 <option>SCHEME</option>
              </select>

              <textarea
                placeholder="Content"
                value={announceForm.content}
                onChange={(e) =>
                  setAnnounceForm({
                    ...announceForm,
                    content: e.target.value,
                  })
                }
              />

              <button className="main-btn" onClick={postAnnouncement}>
                Post Announcement
              </button>
            </div>

            <br />

            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {announcements.map((a) => (
                  <tr key={a.id}>
                    <td>{a.id}</td>
                    <td>{a.title}</td>
                    <td>{a.type}</td>
                    <td>{a.status}</td>
                    <td>
                      <button
                        className="resolve-btn"
                        onClick={() => deleteAnnouncement(a.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {tab === "complaints" && (
          <div className="card-box">
            <h2>Manage Complaints</h2>

            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {complaints.map((c) => (
                  <tr key={c.id}>
                    <td>{c.id}</td>
                    <td>{c.title}</td>
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
                </tr>
              </thead>

              <tbody>
                {schemes.map((s) => (
                  <tr key={s.id}>
                    <td>{s.id}</td>
                    <td>{s.name}</td>
                    <td>{s.department}</td>
                    <td>{s.financialYear}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {tab === "applications" && (
          <div className="card-box">
            <h2>Scheme Applications</h2>

            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Full Name</th>
                  <th>Scheme ID</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {applications.map((a) => (
                  <tr key={a.id}>
                    <td>{a.id}</td>
                    <td>{a.fullName}</td>
                    <td>{a.schemeId}</td>
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

        {tab === "users" && (
          <div className="card-box">
            <h2>Manage Users</h2>

            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {users.map((u) => (
                  <tr key={u.id}>
                    <td>{u.id}</td>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{u.role}</td>
                    <td>
                      {u.active ? (
                        <span className="green">Active</span>
                      ) : (
                        <span className="red">Blocked</span>
                      )}
                    </td>

                    <td>
                      {u.active ? (
                        <button
                          className="resolve-btn"
                          onClick={() => blockUser(u.id)}
                        >
                          Block
                        </button>
                      ) : (
                        <button
                          className="progress-btn"
                          onClick={() => activateUser(u.id)}
                        >
                          Activate
                        </button>
                      )}
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

export default AdminDashboard;