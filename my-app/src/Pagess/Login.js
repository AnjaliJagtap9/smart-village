import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../Styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!role || !email || !pass) {
      alert("Please fill all fields!");
      return;
    }

    if (role === "Citizen") navigate("/citizen-dashboard");
    else if (role === "Admin") navigate("/admin-dashboard");
    else if (role === "Sarpanch") navigate("/sarpanch-dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Village360 Login</h2>
         <form autoComplete="off" onSubmit={handleLogin}>
          <input
            className="fullInput"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="fullInput"
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />

          <label>Login As</label>
          <select
            className="fullInput"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="" disabled>Select Role</option>
            <option value="Citizen">Citizen</option>
            <option value="Admin">Admin</option>
            <option value="Sarpanch">Sarpanch</option>
          </select>

          <button type="submit" className="greenBtn">
            Login
          </button>
        </form>

        <p className="link">
          <Link to="/register">Create new account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
