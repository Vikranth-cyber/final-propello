import React, { useState } from "react";
import { sendMessage } from "../message"; // Adjust this path if needed

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await sendMessage(formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Form error:", err);
      setError(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: "0 1.5rem", // Removed top padding
        background: "white",
        display: "flex",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          background: "white",
          padding: "4rem 3.5rem",
          borderRadius: "28px",
          maxWidth: "650px",
          width: "100%",
          boxShadow: "0 20px 50px rgba(252, 70, 107, 0.1)",
          border: "1px solid rgba(63, 94, 251, 0.2)",
          color: "#333",
          transition: "all 0.3s ease",
          position: "relative",
          zIndex: 1,
          overflow: "hidden"
        }}
      >
        {/* Decorative gradients */}
        <div style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(252, 70, 107, 0.1) 0%, transparent 70%)",
          zIndex: -1
        }}></div>
        <div style={{
          position: "absolute",
          bottom: "-100px",
          left: "-100px",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(63, 94, 251, 0.1) 0%, transparent 70%)",
          zIndex: -1
        }}></div>

        <h2
          style={{
            fontSize: "2.8rem",
            background: "linear-gradient(90deg, #FC466B, #3F5EFB)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "var(--font-heading)",
            marginBottom: "2.5rem",
            textAlign: "center",
            fontWeight: "800",
            position: "relative",
            paddingBottom: "1rem"
          }}
        >
          <strong>Contact Us</strong>
          <span style={{
            position: "absolute",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100px",
            height: "4px",
            background: "linear-gradient(90deg, #FC466B, #3F5EFB)",
            borderRadius: "2px"
          }}></span>
        </h2>

        {submitted ? (
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                fontSize: "1.4rem",
                color: "#3F5EFB",
                fontWeight: "600",
                marginBottom: "1rem"
              }}
            >
              ✅ Thanks for reaching out!
            </p>
            <p style={{
              fontSize: "1.1rem",
              color: "#555",
              lineHeight: "1.6"
            }}>
              We'll get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1.8rem" }}
          >
            <div>
              <label style={labelStyle}>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Your Message</label>
              <textarea
                name="message"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                style={{ ...inputStyle, resize: "vertical", minHeight: "150px" }}
              />
            </div>

            <button
              type="submit"
              style={submitBtnStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(252, 70, 107, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 5px 20px rgba(63, 94, 251, 0.3)";
              }}
            >
              Send Message
            </button>
            {error && (
              <p style={{
                color: "#FC466B",
                textAlign: "center",
                fontWeight: "500",
                marginTop: "0.5rem"
              }}>
                {error}
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
};

const inputStyle = {
  padding: "1.1rem 1.2rem",
  borderRadius: "12px",
  border: "1px solid rgba(63, 94, 251, 0.3)",
  background: "#F8F9FF",
  color: "#333",
  fontSize: "1rem",
  outline: "none",
  transition: "all 0.3s ease",
  width: "100%",
  boxSizing: "border-box"
};

const labelStyle = {
  display: "block",
  marginBottom: "0.5rem",
  color: "#3F5EFB",
  fontWeight: "500",
  fontSize: "0.95rem"
};

const submitBtnStyle = {
  background: "linear-gradient(to right, #FC466B, #3F5EFB)",
  padding: "1.2rem",
  borderRadius: "12px",
  border: "none",
  fontWeight: "600",
  fontSize: "1.1rem",
  cursor: "pointer",
  color: "white",
  boxShadow: "0 5px 20px rgba(63, 94, 251, 0.3)",
  transition: "all 0.3s ease",
  marginTop: "0.5rem",
  position: "relative",
  overflow: "hidden"
};

export default Contact;
