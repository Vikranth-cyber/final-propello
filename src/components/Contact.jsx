import React, { useState } from "react";
import { sendMessage } from "../message"; // Correct path relative to components/

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
      await sendMessage(formData); // Send data to Firestore via your helper
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
        padding: "5rem 1.5rem",
        background: "white",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          background: "white",
          padding: "3rem 3.5rem",
          borderRadius: "24px",
          maxWidth: "600px",
          width: "100%",
          boxShadow: `
            0 0 20px rgba(255, 109, 0, 0.1),
            inset 0 0 10px rgba(255, 183, 77, 0.2)
          `,
          border: "1px solid #FFB74D",
          color: "#333",
          transition: "all 0.3s ease"
        }}
      >
        <h2
          style={{
            fontSize: "2.6rem",
            background: "linear-gradient(90deg, #FF9800, #FFB74D)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "var(--font-heading)",
            marginBottom: "2rem",
            textAlign: "center",
            textShadow: "0 2px 4px rgba(255, 152, 0, 0.2)"
          }}
        >
          Contact Us
        </h2>

        {submitted ? (
          <p
            style={{
              fontSize: "1.3rem",
              textAlign: "center",
              color: "#FF9800",
              fontWeight: "600"
            }}
          >
            ✅ Thanks for reaching out! We'll get back to you shortly.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
            />

            <button
              type="submit"
              style={submitBtnStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.03)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              Send Message
            </button>
            {error && (
              <p style={{ color: "#E53935", textAlign: "center", fontWeight: "500" }}>{error}</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
};

const inputStyle = {
  padding: "1rem",
  borderRadius: "12px",
  border: "1px solid #FFB74D",
  background: "#FFF8F0",
  color: "#333",
  fontSize: "1rem",
  outline: "none",
  transition: "all 0.3s ease",
  '&:focus': {
    borderColor: "#FF9800",
    boxShadow: "0 0 0 3px rgba(255, 152, 0, 0.2)"
  }
};

const submitBtnStyle = {
  background: "linear-gradient(to right, #FF9800, #FFB74D)",
  padding: "1.1rem",
  borderRadius: "12px",
  border: "none",
  fontWeight: "700",
  fontSize: "1.05rem",
  cursor: "pointer",
  color: "white",
  boxShadow: "0 4px 15px rgba(255, 152, 0, 0.3)",
  transition: "all 0.3s ease",
  marginTop: "0.5rem",
  '&:hover': {
    boxShadow: "0 6px 20px rgba(255, 152, 0, 0.4)"
  }
};

export default Contact;