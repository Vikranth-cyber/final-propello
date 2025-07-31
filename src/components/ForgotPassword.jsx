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
    <div style={{ 
      color: "#333", 
      padding: "20px",
      maxWidth: "400px",
      margin: "0 auto",
      backgroundColor: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(255, 109, 0, 0.1)"
    }}>
      <h2 style={{ 
        textAlign: "center", 
        marginBottom: "20px",
        color: "#ff6d00",
        fontSize: "1.8rem"
      }}>
        Forgot Password
      </h2>
      <form onSubmit={handleReset}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "12px 15px",
            width: "100%",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ffb74d",
            backgroundColor: "#fff8f0",
            color: "#333",
            fontSize: "1rem",
            outline: "none",
            transition: "all 0.3s ease",
            '&:focus': {
              borderColor: "#ff6d00",
              boxShadow: "0 0 0 2px rgba(255, 109, 0, 0.2)"
            }
          }}
        />
        <button
          type="submit"
          style={{
            padding: "12px",
            width: "100%",
            borderRadius: "8px",
            backgroundColor: "#ff6d00",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
            color: "white",
            fontSize: "1rem",
            transition: "all 0.3s ease",
            marginBottom: "10px",
            '&:hover': {
              backgroundColor: "#ff8500",
              transform: "translateY(-2px)"
            },
            '&:active': {
              transform: "translateY(0)"
            }
          }}
        >
          Send Reset Link
        </button>
      </form>
      {message && (
        <p style={{ 
          textAlign: "center", 
          marginTop: "10px", 
          color: message.includes("Error") ? "#ff3d00" : "#4caf50",
          fontWeight: "500"
        }}>
          {message}
        </p>
      )}
      <p
        onClick={onBack}
        style={{
          color: "#ff6d00",
          cursor: "pointer",
          marginTop: "15px",
          textAlign: "center",
          fontWeight: "600",
          transition: "all 0.3s ease",
          '&:hover': {
            textDecoration: "underline"
          }
        }}
      >
        Back to Login
      </p>
    </div>
  );
}