import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import "./FillDetailsPage.css"; // CSS for this page

function FillDetailsPage() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    phone: "",
    email: "",
    institution: "",
    grade: "",
    neededAmount: "",
    course: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/api/students/details`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...formData,
          status: "PENDING",
        }),
      }
    );


      if (response.ok) {
        navigate("/success");
      } else {
        const err = await response.json();
        alert(err.message || "Submission failed");
      }
    } catch (error) {
      alert("Error submitting details");
      console.error(error);
    }
  };

  return (
    <>
      {/* Header */}
      <header className="fill-header">
        <div className="logo">
          <img
            src="https://as2.ftcdn.net/v2/jpg/01/99/05/35/1000_F_199053513_reNOz8CqNJx2zBxbhOUCTDpjcl3tb7CI.jpg"
            alt="EduRise Logo"
          />
          <span>EduRise</span>
        </div>
        <div className="dashboard-title">Student Dashboard</div>
        <div className="header-actions">
          <button onClick={logout} className="logout-btn">
            Logout
          </button>
        </div>
      </header>

      {/* Form */}
      <div className="form-container">
        <div className="form-box">
          <h2>Fill in Your Student Details</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="dob"
              placeholder="Date of Birth"
              value={formData.dob}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="institution"
              placeholder="Institution Name"
              value={formData.institution}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="grade"
              placeholder="Grade / Class"
              value={formData.grade}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="neededAmount"
              placeholder="Needed Amount (₹)"
              value={formData.amount}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="course"
              placeholder="Enter your course name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default FillDetailsPage;
