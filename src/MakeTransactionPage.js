import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStudents } from "./StudentContext";
import "./MakeTransactionPage.css"; // For styling

const MakeTransactionPage = () => {
  const { id } = useParams(); 
  const { approvedStudents } = useStudents();
  const [student, setStudent] = useState(null);
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const API_BASE = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const selectedStudent = approvedStudents.find(
      (s) => s.id === parseInt(id)
    );
    if (selectedStudent) {
      setStudent(selectedStudent);
    } else {
      setError("Student not found.");
    }
  }, [id, approvedStudents]);

  const handleTransaction = async () => {
    if (!amount || isNaN(amount) || amount <= 0) {
      setError("Please enter a valid amount.");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API_BASE}/api/admin/donations`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentUserId: student.id,
          amount: parseFloat(amount),
        }),
      });

      if (!res.ok) throw new Error("Transaction failed");

      alert("Transaction successful!");
      navigate("/admin/manage-students");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="transaction-container">
      <h2 className="page-title">💸 Make Transaction</h2>
      {error && <p className="error-msg">{error}</p>}
      {student ? (
        <div className="student-info-card">
          <h3>{student.fullName}</h3>
          <p>{student.course} - {student.institution}</p>
          <p><strong>Needed Amount:</strong> ₹{student.neededAmount}</p>

          <div className="transaction-form">
            <input
              type="number"
              placeholder="Enter Transaction Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="amount-input"
            />
            <button className="transaction-btn" onClick={handleTransaction}>
              Confirm Transaction
            </button>
          </div>
        </div>
      ) : (
        <p>Loading student data...</p>
      )}
    </div>
  );
};

export default MakeTransactionPage;
