import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Register.css";
import { BASE_URL } from "../api/api";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
    role: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const { username, email, password, address, role } = form;

    if (!username || !email || !password || !address || !role) {
      alert("Please fill all fields!");
      return;
    }

    try {
      await axios.post(`${BASE_URL}/auth/register`, {
        name: username,
        email,
        password,
        address,
        role: role.toUpperCase()
      });

      alert("Registration Successful!");
      navigate("/login");

    } catch (error) {
      console.log("REGISTER ERROR:", error);

      alert(
        error?.response?.data?.message || "Registration Failed"
      );
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Village360 Registration</h2>

        <form autoComplete="off" onSubmit={handleRegister}>
          <input
            className="fullInput"
            name="username"
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
          />

          <input
            className="fullInput"
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            className="fullInput"
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          <input
            className="fullInput"
            name="address"
            type="text"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
          />

          <select
            className="fullInput"
            name="role"
            value={form.role}
            onChange={handleChange}
          >
            <option value="">Select Role</option>
            <option value="CITIZEN">CITIZEN</option>
            <option value="ADMIN">ADMIN</option>
            <option value="SARPANCH">SARPANCH</option>
          </select>

          <button type="submit" className="blueBtn">
            Register
          </button>
        </form>

        <p className="link">
          Already have account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;