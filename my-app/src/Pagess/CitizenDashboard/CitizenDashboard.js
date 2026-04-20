import React, { useEffect, useState } from "react";
import { api } from "../../api/axiosConfig";
import "./CitizenDashboard.css";

function CitizenDashboard() {
  const [tab, setTab] = useState("dashboard");

  const [complaints, setComplaints] = useState([]);
  const [schemes, setSchemes] = useState([]);
  const [applications, setApplications] = useState([]);

  const [complaintForm, setComplaintForm] = useState({
    title: "",
    description: "",
  });

  const [applicationForm, setApplicationForm] = useState({
    schemeId: "",
    fullName: "",
    address: "",
    mobile: "",
    annualIncome: "",
    religion: "",
    caste: "",
    department: "",
  });

  useEffect(() => {
    loadAllData();
  }, []);

  const loadAllData = async () => {
    try {
      const c = await api.get("/complaints/my");
      const s = await api.get("/schemes/active");
      const a = await api.get("/applications/my");

      setComplaints(
        Array.isArray(c.data) ? c.data : c.data.content || []
      );

      setSchemes(
        Array.isArray(s.data) ? s.data : s.data.content || []
      );

      setApplications(
        Array.isArray(a.data) ? a.data : a.data.content || []
      );
    } catch (error) {
      console.log("FULL ERROR =", error);
      console.log("Status =", error.response?.status);
      console.log("Data =", error.response?.data);
    }
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const raiseComplaint = async () => {
    try {
      await api.post("/complaints", complaintForm);
      setComplaintForm({
        title: "",
        description: "",
      });
      loadAllData();
    } catch (error) {
      alert("Complaint submit failed");
    }
  };

  const deleteComplaint = async (id) => {
    await api.delete(`/complaints/${id}`);
    loadAllData();
  };

  const applyScheme = async () => {
    try {
      await api.post("/applications", applicationForm);

      setApplicationForm({
        schemeId: "",
        fullName: "",
        address: "",
        mobile: "",
        annualIncome: "",
        religion: "",
        caste: "",
        department: "",
      });

      loadAllData();
    } catch (error) {
      alert("Application failed");
    }
  };

  const cancelApplication = async (id) => {
    await api.put(`/applications/${id}/cancel`);
    loadAllData();
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <div className="admin-sidebar">
        <h2>Citizen Panel</h2>

        <button onClick={() => setTab("dashboard")}>Dashboard</button>
        <button onClick={() => setTab("complaints")}>
          My Complaints
        </button>
        <button onClick={() => setTab("schemes")}>
          Schemes
        </button>
        <button onClick={() => setTab("applications")}>
          My Applications
        </button>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      {/* Main */}
      <div className="admin-main">
        {/* Dashboard */}
        {tab === "dashboard" && (
          <div className="card-box">
            <h2>Citizen Dashboard</h2>

            <div className="form-grid">
              <div className="card-box">
                <h3>My Complaints</h3>
                <h1>{complaints.length}</h1>
              </div>

              <div className="card-box">
                <h3>Available Schemes</h3>
                <h1>{schemes.length}</h1>
              </div>

              <div className="card-box">
                <h3>My Applications</h3>
                <h1>{applications.length}</h1>
              </div>
            </div>
          </div>
        )}

        {/* Complaints */}
        {tab === "complaints" && (
          <div className="card-box">
            <h2>Raise Complaint</h2>

            <div className="form-grid">
              <input
                placeholder="Title"
                value={complaintForm.title}
                onChange={(e) =>
                  setComplaintForm({
                    ...complaintForm,
                    title: e.target.value,
                  })
                }
              />

              <textarea
                placeholder="Description"
                value={complaintForm.description}
                onChange={(e) =>
                  setComplaintForm({
                    ...complaintForm,
                    description: e.target.value,
                  })
                }
              />

              <button
                className="main-btn"
                onClick={raiseComplaint}
              >
                Submit Complaint
              </button>
            </div>

            <br />

            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Action</th>
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
                        className="resolve-btn"
                        onClick={() =>
                          deleteComplaint(c.id)
                        }
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

        {/* Schemes */}
        {tab === "schemes" && (
          <div className="card-box">
            <h2>Apply For Scheme</h2>

            <div className="form-grid">
              <input
                placeholder="Scheme ID"
                value={applicationForm.schemeId}
                onChange={(e) =>
                  setApplicationForm({
                    ...applicationForm,
                    schemeId: e.target.value,
                  })
                }
              />

              <input
                placeholder="Full Name"
                value={applicationForm.fullName}
                onChange={(e) =>
                  setApplicationForm({
                    ...applicationForm,
                    fullName: e.target.value,
                  })
                }
              />

              <input
                placeholder="Address"
                value={applicationForm.address}
                onChange={(e) =>
                  setApplicationForm({
                    ...applicationForm,
                    address: e.target.value,
                  })
                }
              />

              <input
                placeholder="Mobile"
                value={applicationForm.mobile}
                onChange={(e) =>
                  setApplicationForm({
                    ...applicationForm,
                    mobile: e.target.value,
                  })
                }
              />

              <input
                placeholder="Annual Income"
                value={applicationForm.annualIncome}
                onChange={(e) =>
                  setApplicationForm({
                    ...applicationForm,
                    annualIncome: e.target.value,
                  })
                }
              />

              <input
                placeholder="Religion"
                value={applicationForm.religion}
                onChange={(e) =>
                  setApplicationForm({
                    ...applicationForm,
                    religion: e.target.value,
                  })
                }
              />

              <input
                placeholder="Caste"
                value={applicationForm.caste}
                onChange={(e) =>
                  setApplicationForm({
                    ...applicationForm,
                    caste: e.target.value,
                  })
                }
              />

              <input
                placeholder="Department"
                value={applicationForm.department}
                onChange={(e) =>
                  setApplicationForm({
                    ...applicationForm,
                    department: e.target.value,
                  })
                }
              />

              <button
                className="main-btn"
                onClick={applyScheme}
              >
                Apply Scheme
              </button>
            </div>

            <br />

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

        {/* Applications */}
        {tab === "applications" && (
          <div className="card-box">
            <h2>My Applications</h2>

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
                        className="resolve-btn"
                        onClick={() =>
                          cancelApplication(a.id)
                        }
                      >
                        Cancel
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

export default CitizenDashboard;