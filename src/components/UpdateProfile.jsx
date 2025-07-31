// components/UpdateProfile.jsx
import React, { useState } from "react";

export default function UpdateProfile({ onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted! ");
  };

  return (
    <div style={{ 
      color: "#333", 
      padding: "25px",
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
        Update Profile
      </h2>
      <form onSubmit={handleSubmit}>
        <label style={{
          display: "block",
          marginBottom: "8px",
          fontWeight: "600",
          color: "#ff6d00"
        }}>New Username</label>
        <input
          type="text"
          placeholder="Enter new username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            marginBottom: "20px",
            padding: "12px 15px",
            backgroundColor: "#fff8f0",
            color: "#333",
            borderRadius: "8px",
            border: "1px solid #ffb74d",
            fontSize: "1rem",
            outline: "none",
            transition: "all 0.3s ease",
            '&:focus': {
              borderColor: "#ff6d00",
              boxShadow: "0 0 0 2px rgba(255, 109, 0, 0.2)"
            }
          }}
        />
        <label style={{
          display: "block",
          marginBottom: "8px",
          fontWeight: "600",
          color: "#ff6d00"
        }}>New Password</label>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            marginBottom: "20px",
            padding: "12px 15px",
            backgroundColor: "#fff8f0",
            color: "#333",
            borderRadius: "8px",
            border: "1px solid #ffb74d",
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
            width: "100%",
            padding: "12px",
            backgroundColor: "#ff6d00",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer",
            color: "white",
            fontSize: "1rem",
            transition: "all 0.3s ease",
            '&:hover': {
              backgroundColor: "#ff8500",
              transform: "translateY(-2px)"
            },
            '&:active': {
              transform: "translateY(0)"
            }
          }}
        >
          Submit
        </button>
      </form>
      <p
        onClick={onClose}
        style={{
          marginTop: "15px",
          color: "#ff6d00",
          textAlign: "center",
          cursor: "pointer",
          fontWeight: "600",
          transition: "all 0.3s ease",
          '&:hover': {
            textDecoration: "underline"
          }
        }}
      >
        Close
      </p>
    </div>
  );
}