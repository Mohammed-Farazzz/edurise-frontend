import React from "react";
import { useNavigate } from "react-router-dom";

function SuccessPage() {
  const navigate = useNavigate();

  const handleTrackRequest = () => {
    navigate("/track-request");
  };

  return (
    <div style={styles.container}>
      <div style={styles.message}>
        🎉 Submission Successful! <br />
        Thank you for providing your details.
      </div>
      <button style={styles.btn} onClick={handleTrackRequest}>
        Track Request
      </button>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#f9f9f9",
    color: "#333",
    fontFamily: "'Segoe UI', sans-serif",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 20,
    boxSizing: "border-box",
  },
  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#a60059",
    marginBottom: 30,
    userSelect: "none",
  },
  btn: {
    backgroundColor: "#a60059",
    color: "white",
    border: "none",
    padding: "12px 25px",
    fontSize: 16,
    borderRadius: 30,
    cursor: "pointer",
    transition: "background-color 0.3s",
    userSelect: "none",
    width: "auto",     // ✅ let it fit content
    minWidth: "160px", // ✅ optional: make sure it's not too small
    textAlign: "center"
}
};

export default SuccessPage;
