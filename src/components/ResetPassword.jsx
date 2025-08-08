// components/ResetPassword.jsx
import React, { useState } from "react";
import { confirmPasswordReset } from "firebase/auth";
import { auth } from "../firebaseconfig";
import { useSearchParams } from "react-router-dom";

export default function ResetPassword({ onBack }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [searchParams] = useSearchParams();
  const oobCode = searchParams.get("oobCode");

  const handleReset = async (e) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      setMessage("Error: Passwords don't match");
      return;
    }

    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      setMessage("Password reset successfully! You can now login with your new password.");
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  return (
    <div
      style={{
        color: "#333",
        padding: "20px",
        maxWidth: "400px",
        margin: "0 auto",
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(63, 94, 251, 0.1)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "1.8rem",
          background: "linear-gradient(135deg, #fc466b, #3f5efb)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "700",
        }}
      >
        Reset Password
      </h2>
      <form onSubmit={handleReset}>
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          required
          minLength="6"
          onChange={(e) => setNewPassword(e.target.value)}
          style={{
            padding: "12px 15px",
            width: "100%",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            backgroundColor: "#f9f9f9",
            color: "#333",
            fontSize: "1rem",
            outline: "none",
            transition: "all 0.3s ease",
          }}
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          required
          minLength="6"
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={{
            padding: "12px 15px",
            width: "100%",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            backgroundColor: "#f9f9f9",
            color: "#333",
            fontSize: "1rem",
            outline: "none",
            transition: "all 0.3s ease",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "12px",
            width: "100%",
            borderRadius: "8px",
            background: "linear-gradient(135deg, #fc466b, #3f5efb)",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
            color: "white",
            fontSize: "1rem",
            transition: "all 0.3s ease",
          }}
        >
          Reset Password
        </button>
      </form>
      {message && (
        <p
          style={{
            textAlign: "center",
            marginTop: "10px",
            color: message.includes("Error") ? "#fc466b" : "#3f5efb",
            fontWeight: "500",
          }}
        >
          {message}
        </p>
      )}
      <p
        onClick={onBack}
        style={{
          background: "linear-gradient(135deg, #fc466b, #3f5efb)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          cursor: "pointer",
          marginTop: "15px",
          textAlign: "center",
          fontWeight: "600",
          transition: "all 0.3s ease",
        }}
      >
        Back to Login
      </p>
    </div>
  );
}