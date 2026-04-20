import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Login.css";
import { BASE_URL } from "../api/api";

function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !pass || !role) {
      alert("Please fill all fields!");
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, {
        email,
        password: pass,
      });

      // token can be response.data OR response.data.token
      const token = response.data.token || response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem(
        "user",
        JSON.stringify({
          email,
          role,
        })
      );

      alert("Login Successful");

      if (role === "ADMIN") navigate("/admin");
      else if (role === "SARPANCH") navigate("/sarpanch");
      else if (role === "CITIZEN") navigate("/citizen");
    } catch (error) {
      console.log(error);
      alert(error?.response?.data?.message || "Invalid Login");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Village360 Login</h2>

        <form onSubmit={handleLogin}>
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

          <select
            className="fullInput"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="ADMIN">Admin</option>
            <option value="SARPANCH">Sarpanch</option>
            <option value="CITIZEN">Citizen</option>
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