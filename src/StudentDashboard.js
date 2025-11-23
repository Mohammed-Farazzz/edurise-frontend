import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "./StudentDashboard.css";

function StudentDashboard() {
  const { logout } = useAuth();

  return (
    <>
      {/* Header */}
      <header className="student-header">
        <div className="logo">
          <img
            src="https://as2.ftcdn.net/v2/jpg/01/99/05/35/1000_F_199053513_reNOz8CqNJx2zBxbhOUCTDpjcl3tb7CI.jpg"
            alt="EduRise Logo"
          />
          <span>EduRise</span>
        </div>
        <div className="dashboard-title">
          Student Dashboard
        </div>
        <div className="header-actions">
          <button onClick={logout} className="logout-btn">
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-content">
        <h1>Welcome, Future Achiever! <span role="img" aria-label="graduation">🎓</span></h1>
        <p>We understand your concern about educational expenses.</p>
        <p>We’re here to help — just tell us what you need.</p>
        <p>Your dreams matter. Let’s make them happen together <span role="img" aria-label="heart">❤️</span></p>
        <p>Please fill the Details</p>
        <Link to="/fill-form" className="fill-btn">
          <span role="img" aria-label="document">📄</span> Fill Details
        </Link>

        <p className="already-filled">Already filled your form?</p>
        <Link to="/track-request" className="fill-btn">
          Track Request
        </Link>
      </main>
    </>
  );
}

export default StudentDashboard;

