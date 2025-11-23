import React, { useState } from "react";
import "./AuthPages.css";
import { useAuth } from "./AuthContext";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const { register } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    register(fullName, email, password, role);
  };

  return (
    <div className="auth-center-wrap">
      <div className="container-auth">
        <div className="left-box-auth">
          <img
            src="https://as2.ftcdn.net/v2/jpg/01/99/05/35/1000_F_199053513_reNOz8CqNJx2zBxbhOUCTDpjcl3tb7CI.jpg"
            alt="Logo"
          />
          <h2>Welcome to EduRise</h2>
          <p>India's Trusted Student Donation Platform</p>
        </div>
        <div className="right-box-auth">
          <h3>Sign up to Continue</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Full name"
                required
                value={fullName}
                onChange={e => setFullName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <select
                required
                value={role}
                onChange={e => setRole(e.target.value)}
              >
                <option value="">Register as</option>
                <option value="STUDENT">Student</option>
                <option value="DONOR">Donor</option>
              </select>
            </div>
            <button type="submit">Sign up</button>
          </form>
          <div className="login-link-auth">
            Already signed up? <a href="/login">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}

