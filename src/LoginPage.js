import React, { useState } from "react";
import "./AuthPages.css";
import { useAuth } from "./AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password); // calls the context function we made
  };

  return (
    <div className="auth-center-wrap">
      <div className="container-auth">
        <div className="left-box-auth">
          <img
            src="https://as2.ftcdn.net/v2/jpg/01/99/05/35/1000_F_199053513_reNOz8CqNJx2zBxbhOUCTDpjcl3tb7CI.jpg"
            alt="Logo"
          />
          <h2>Welcome Back!</h2>
          <p>Continue making a difference with EduRise</p>
        </div>
        <div className="right-box-auth">
          <h3>Login to your account</h3>
          <form onSubmit={handleSubmit}>
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
            <button type="submit">Login</button>
          </form>
          <div className="options-auth">
            <a href="#">Forgot password?</a>
            <a href="/register">New to EduRise? Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
}

