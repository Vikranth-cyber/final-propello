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
    <div style={{ color: "white", padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Update Profile
      </h2>
      <form onSubmit={handleSubmit}>
        <label>New Username</label>
        <input
          type="text"
          placeholder="Enter new username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            marginBottom: "10px",
            padding: "10px",
            backgroundColor: "#111",
            color: "white",
            borderRadius: "10px",
            border: "1px solid #555",
          }}
        />
        <label>New Password</label>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            marginBottom: "10px",
            padding: "10px",
            backgroundColor: "#111",
            color: "white",
            borderRadius: "10px",
            border: "1px solid #555",
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#00b7ff",
            border: "none",
            borderRadius: "30px",
            fontWeight: "bold",
            cursor: "pointer",
            color: "black",
          }}
        >
          Submit
        </button>
      </form>
      <p
        onClick={onClose}
        style={{
          marginTop: "15px",
          color: "#00b7ff",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        Close
      </p>
    </div>
  );
}
