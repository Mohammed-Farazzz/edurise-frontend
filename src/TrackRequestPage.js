import React, { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import "./TrackRequestPage.css";

function TrackRequestPage() {
  const { token } = useAuth();
  const [status, setStatus] = useState("LOADING");

  useEffect(() => {
    async function fetchStatus() {
      try {
        const res = await fetch("http://localhost:9796/api/students/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) {
          const data = await res.json();
          setStatus(data.status || "PENDING");
        } else {
          setStatus("ERROR");
        }
      } catch {
        setStatus("ERROR");
      }
    }
    fetchStatus();
  }, [token]);

  const renderStatus = () => {
    switch (status) {
      case "LOADING": return "Loading status...";
      case "APPROVED": return <>🎉 CONGRATULATIONS! YOUR REQUEST HAS BEEN <span className="approved">APPROVED</span> BY ADMIN!</>;
      case "REJECTED": return <>❌ SORRY! YOUR REQUEST HAS BEEN <span className="rejected">REJECTED</span> BY ADMIN.</>;
      case "PENDING":  return <>⏳ YOUR REQUEST IS <span className="pending">PENDING</span>. Please wait for admin approval.</>;
      default:         return "Unknown status. Please contact support.";
    }
  };

  return (
    <div className="track-request">
      <div className="box">
        <h1>Track Your Request</h1>
        <p>Here’s the current status of your application:</p>
        <div className="status">{renderStatus()}</div>
      </div>
    </div>
  );
}

export default TrackRequestPage;
