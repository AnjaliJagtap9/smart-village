import { useState } from "react";
import "./ManageUser.css";

function ManageUsers() {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Rahul Patil",
      email: "rahul@gmail.com",
      role: "Citizen",
      status: "Active",
    },
    {
      id: 2,
      name: "Anjali Jagtap",
      email: "anjali@gmail.com",
      role: "Citizen",
      status: "Blocked",
    },
    {
      id: 3,
      name: "Suresh Pawar",
      email: "suresh@gmail.com",
      role: "Sarpanch",
      status: "Active",
    },
    {
      id: 4,
      name: "Admin User",
      email: "admin@gmail.com",
      role: "Admin",
      status: "Active",
    },
  ]);

  const toggleStatus = (id) => {
    setUsers(
      users.map((u) =>
        u.id === id
          ? { ...u, status: u.status === "Active" ? "Blocked" : "Active" }
          : u
      )
    );
  };

  const deleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((u) => u.id !== id));
    }
  };

  const filteredUsers = users.filter((u) => {
    const matchSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());

    const matchRole = roleFilter === "All" || u.role === roleFilter;

    return matchSearch && matchRole;
  });

  return (
    <div className="manageUserPage">
      <h2>Manage Users</h2>

      {/* 🔍 SEARCH + FILTER */}
      <div className="userControls">
        <input
          type="text"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option value="All">All Roles</option>
          <option value="Citizen">Citizen</option>
          <option value="Admin">Admin</option>
          <option value="Sarpanch">Sarpanch</option>
        </select>
      </div>

      {/* 👥 USER TABLE */}
      <table className="userTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No users found
              </td>
            </tr>
          ) : (
            filteredUsers.map((u) => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td>
                  <span className={`status ${u.status.toLowerCase()}`}>
                    {u.status}
                  </span>
                </td>
                <td>
                  <button
                    className="actionBtn"
                    onClick={() => toggleStatus(u.id)}
                  >
                    {u.status === "Active" ? "Block" : "Activate"}
                  </button>
                  <button
                    className="deleteBtn"
                    onClick={() => deleteUser(u.id)}
                  >
                    Delete 
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ManageUsers;
