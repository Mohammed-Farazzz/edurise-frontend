// src/AdminDashboard.js
import React, { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    pendingCount: 0,
    approvedCount: 0,
    donationTotal: 0,
    fundedCount: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch("http://localhost:9796/api/admin/stats", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch admin stats");
        }

        const data = await res.json();
        setStats(data);
      } catch (err) {
        console.error("Error fetching stats:", err);
      }
    };

    fetchStats();
  }, []);

  return (
    <div>
      <header>
        <div className="logo-container">
          <img
            src="https://as2.ftcdn.net/v2/jpg/01/99/05/35/1000_F_199053513_reNOz8CqNJx2zBxbhOUCTDpjcl3tb7CI.jpg"
            alt="EduRise Logo"
          />
          <span className="dashboard-title">Admin Dashboard</span>
        </div>
        <button
          className="logout-btn"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          Logout
        </button>
      </header>

      <div className="container">
        <h2>Welcome, Admin 👨‍💼</h2>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Pending Applications</h3>
            <p>{stats.pendingCount}</p>
          </div>
          <div className="stat-card">
            <h3>Approved Students</h3>
            <p>{stats.approvedCount}</p>
          </div>
          <div className="stat-card">
            <h3>Total Donations</h3>
            <p>₹{stats.totalDonations}</p>
          </div>
          <div className="stat-card">
            <h3>Students Funded</h3>
            <p>{stats.fundedCount}</p>
          </div>
        </div>

        <div className="nav-buttons">
          <button onClick={() => navigate("/admin/review")}>
            📄 Review Applications
          </button>
          <button onClick={() => navigate("/admin/manage-students")}>
            👩‍🎓 Manage Students
          </button>
          <button onClick={() => navigate("/admin/donations")}>
            💰 Make Transactions
          </button>
          <button onClick={() => navigate("/admin/donors")}>
            🤝 Donor List
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
