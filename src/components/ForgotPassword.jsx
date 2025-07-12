// components/ForgotPassword.jsx
import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebaseconfig";

export default function ForgotPassword({ onBack }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent!");
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  return (
    <div style={{ color: "white", padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Forgot Password</h2>
      <form onSubmit={handleReset}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "10px",
            width: "100%",
            marginBottom: "10px",
            borderRadius: "8px",
            border: "1px solid #555",
            backgroundColor: "#111",
            color: "white",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "12px",
            width: "100%",
            borderRadius: "30px",
            backgroundColor: "#00b7ff",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
            color: "black",
          }}
        >
          Send Reset Link
        </button>
      </form>
      {message && (
        <p style={{ textAlign: "center", marginTop: "10px", color: "#00b7ff" }}>{message}</p>
      )}
      <p
        onClick={onBack}
        style={{
          color: "#00b7ff",
          cursor: "pointer",
          marginTop: "15px",
          textAlign: "center",
        }}
      >
        Back to Login
      </p>
    </div>
  );
}
