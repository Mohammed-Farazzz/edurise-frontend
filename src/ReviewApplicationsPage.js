import React, { useEffect } from "react";
import { useStudents } from "./StudentContext";
import "./ReviewApplicationsPage.css"; // Create this file for styling (see below)

const ReviewApplicationsPage = () => {
  const { pendingStudents, setPendingStudents, setApprovedStudents } = useStudents();

  useEffect(() => {
    const fetchPending = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:9796/api/admin/students/pending", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setPendingStudents(data);
      } catch (err) {
        console.error("Error fetching pending students", err);
      }
    };

    fetchPending();
  }, [setPendingStudents]);

  const handleDecision = async (id, status) => {
    try {
      const token = localStorage.getItem("token");

      // Make the correct PUT request with status as a query parameter
      const res = await fetch(
        `http://localhost:9796/api/admin/students/${id}/status?status=${status}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) throw new Error(`Failed to update student ${status}`);

      // Update the state for both approved and pending students
      if (status === "APPROVED") {
        const student = pendingStudents.find((s) => s.id === id);
        setPendingStudents((prev) => prev.filter((s) => s.id !== id));
        setApprovedStudents((prev) => [...prev, { ...student, status: "APPROVED" }]);
      } else if (status === "REJECTED") {
        setPendingStudents((prev) => prev.filter((s) => s.id !== id));
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="review-container">
      <h2 className="page-title">📄 Pending Student Applications</h2>
      {pendingStudents.length === 0 ? (
        <p className="empty-msg">No pending applications</p>
      ) : (
        <div className="card-grid">
          {pendingStudents.map((s) => (
            <div key={s.id} className="student-card">
              <div className="student-info">
                <h3>{s.fullName}</h3>
                <p>{s.course} - {s.institution}</p>
              </div>
              <div className="action-buttons">
                <button className="approve-btn" onClick={() => handleDecision(s.id, "APPROVED")}>
                  ✅ Approve
                </button>
                <button className="reject-btn" onClick={() => handleDecision(s.id, "REJECTED")}>
                  ❌ Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewApplicationsPage;


