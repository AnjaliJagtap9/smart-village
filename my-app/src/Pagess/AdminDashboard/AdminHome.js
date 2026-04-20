function AdminHome() {
  return (
    <div>

      <h2>Welcome Admin 👋</h2>

      <div className="dashboardCards">

        <div className="card">
          <h3>Total Users</h3>
          <p>120</p>
        </div>

        <div className="card">
          <h3>Complaints</h3>
          <p>35</p>
        </div>

        <div className="card">
          <h3>Announcements</h3>
          <p>5</p>
        </div>

      </div>

    </div>
  );
}

export default AdminHome;