import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStudents } from "./StudentContext";
import "./ManageStudentsPage.css";

const ManageStudentsPage = () => {
  const { approvedStudents, setApprovedStudents } = useStudents();
  const navigate = useNavigate();

  const API_BASE = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const fetchApproved = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch(
          `${API_BASE}/api/admin/students/approved`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const data = await res.json();
        setApprovedStudents(data);
      } catch (err) {
        console.error("Error fetching approved students", err);
      }
    };

    fetchApproved();
  }, [setApprovedStudents, API_BASE]);

  return (
    <div className="manage-container">
      <h2 className="page-title">👩‍🎓 Approved Students</h2>
      {approvedStudents.length === 0 ? (
        <p className="empty-msg">No approved students</p>
      ) : (
        <div className="card-grid">
          {approvedStudents.map((s) => (
            <div key={s.id} className="student-card">
              <div className="student-info">
                <h3>{s.fullName}</h3>
                <p>
                  {s.course} - {s.institution}
                </p>
                <p className="amount">Needed: ₹{s.neededAmount}</p>
              </div>
              <div>
                <button
                  className="transaction-btn"
                  onClick={() => navigate(`/admin/transactions/${s.id}`)}
                >
                  💸 Make Transaction
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageStudentsPage;

