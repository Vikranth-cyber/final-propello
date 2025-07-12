import { useState } from "react";
import {
  FaXTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaArrowLeft,
} from "react-icons/fa6";

const Footer = () => {
  const [showFAQs, setShowFAQs] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const socialIcons = [
    { icon: <FaXTwitter />, url: "https://x.com/Propello_AI" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/propello.ai/" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/company/106969732/admin/analytics/followers/" },
    { icon: <FaYoutube />, url: "https://www.youtube.com/@Propello_AI" },
  ];

  const modalStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#0A0E17",
    color: "#E5E9F0",
    padding: "1.5rem",
    borderRadius: "20px",
    boxShadow: "0 0 50px rgba(0,0,0,0.5)",
    zIndex: 1000,
    maxWidth: "90%",
    width: "450px",
    maxHeight: "70vh",
    overflowY: "auto",
    scrollbarWidth: "thin",
    scrollbarColor: "#5D9EFF #0A0E17",
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 999,
  };

  const backButtonStyle = {
    background: "none",
    border: "none",
    color: "#5D9EFF",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    cursor: "pointer",
    marginBottom: "1rem",
    fontSize: "0.9rem",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.8rem",
    marginBottom: "1rem",
    background: "#1A2138",
    border: "1px solid #2D374D",
    borderRadius: "8px",
    color: "#E5E9F0",
    fontSize: "0.95rem",
  };

  const buttonStyle = {
    width: "100%",
    padding: "0.8rem",
    background: "linear-gradient(90deg, #5D9EFF, #A3E4D7)",
    border: "none",
    borderRadius: "8px",
    color: "#0A0E17",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "0.95rem",
    marginTop: "0.5rem",
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Login attempted with:", username, password);
    // For demo purposes, just close the modal
    setShowAdminLogin(false);
    setUsername("");
    setPassword("");
  };

  return (
    <>
      {showFAQs && (
        <>
          <div style={overlayStyle} onClick={() => setShowFAQs(false)} />
          <div style={modalStyle}>
            <button style={backButtonStyle} onClick={() => setShowFAQs(false)}>
              <FaArrowLeft /> Back
            </button>
            <h2 style={{ marginBottom: "1rem", fontSize: "1.3rem" }}>FAQs</h2>
            <div style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
              <p><strong>How is Propello AI different from Siri, Alexa, or Google Assistant?</strong><br />
                Propello AI is business-focused, integrates with CRM, handles mass calls, and supports Indian languages.</p>
              <p><strong>Is Propello AI available 24/7?</strong><br />
                Yes, it's always on.</p>
              <p><strong>Do I need technical skills to use it?</strong><br />
                No, it's a no-code platform for everyone.</p>
            </div>
          </div>
        </>
      )}

      {showPrivacy && (
        <>
          <div style={overlayStyle} onClick={() => setShowPrivacy(false)} />
          <div style={modalStyle}>
            <button style={backButtonStyle} onClick={() => setShowPrivacy(false)}>
              <FaArrowLeft /> Back
            </button>
            <h2 style={{ marginBottom: "1rem", fontSize: "1.3rem" }}>Privacy Policy</h2>
            <div style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
              <p><strong>Your Privacy, Our Priority</strong><br />
                We do not store sensitive data beyond need. All interactions are encrypted. We comply with Indian privacy laws.</p>
            </div>
          </div>
        </>
      )}

      {showAdminLogin && (
        <>
          <div style={overlayStyle} onClick={() => setShowAdminLogin(false)} />
          <div style={modalStyle}>
            <button style={backButtonStyle} onClick={() => setShowAdminLogin(false)}>
              <FaArrowLeft /> Back
            </button>
            <h2 style={{ marginBottom: "1rem", fontSize: "1.3rem" }}>Admin Login</h2>
            <form onSubmit={handleAdminLogin}>
              <div>
                <label htmlFor="username" style={{ display: "block", marginBottom: "0.5rem" }}>Username</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={inputStyle}
                  placeholder="Enter admin username"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" style={{ display: "block", marginBottom: "0.5rem" }}>Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={inputStyle}
                  placeholder="Enter password"
                  required
                />
              </div>
              <button type="submit" style={buttonStyle}>Login</button>
            </form>
          </div>
        </>
      )}

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "2rem 1rem",
          background: "transparent",
          boxSizing: "border-box",
        }}
      >
        <footer
          style={{
            width: "100%",
            maxWidth: "1400px",
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "32px",
            padding: "2rem",
            boxShadow: "0 20px 50px rgba(93, 158, 255, 0.35)",
            color: "#9BAACB",
            userSelect: "none",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: "2rem",
                alignItems: "flex-start",
              }}
            >
              {/* Center - Logo & Tagline */}
              <div
                style={{
                  flex: "1 1 100%",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    fontSize: "clamp(1.5rem, 4vw, 2rem)",
                    margin: "0 0 0.8rem 0",
                    color: "#E5E9F0",
                    fontWeight: "700",
                    lineHeight: "1.2",
                  }}
                >
                  <span
                    style={{
                      background: "linear-gradient(90deg, #5D9EFF, #A3E4D7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Propello
                  </span>{" "}
                  AI
                </h3>
                <p
                  style={{
                    opacity: 0.8,
                    lineHeight: 1.6,
                    fontSize: "clamp(0.9rem, 2vw, 1rem)",
                    margin: 0,
                  }}
                >
                  Next-generation conversational AI for modern businesses
                </p>
              </div>

              {/* FAQs & Privacy Buttons */}
              <div
                style={{
                  flex: "1 1 100%",
                  display: "flex",
                  justifyContent: "center",
                  gap: "1.5rem",
                }}
              >
                <button
                  onClick={() => setShowFAQs(true)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#9BAACB",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                  }}
                >
                  FAQs
                </button>
                <button
                  onClick={() => setShowPrivacy(true)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#9BAACB",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                  }}
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => setShowAdminLogin(true)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#9BAACB",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                  }}
                >
                  Admin Login
                </button>
              </div>

              {/* Social Media Icons */}
              <div
                style={{
                  flex: "1 1 100%",
                  display: "flex",
                  justifyContent: "center",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                {socialIcons.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontSize: "1.5rem",
                      color: "#9BAACB",
                      opacity: 0.85,
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Contact Info */}
              <div
                style={{
                  flex: "1 1 100%",
                  textAlign: "center",
                  fontSize: "0.95rem",
                }}
              >
                <p style={{ margin: "0.2rem 0" }}>📞 +91 8850477716</p>
                <p style={{ margin: "0.2rem 0" }}>✉️ hello@propelloai.in</p>
              </div>
            </div>

            {/* Bottom - Copyright */}
            <div
              style={{
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "1rem",
                fontSize: "0.85rem",
                color: "#AAB8D0",
                gap: "0.5rem",
              }}
            >
              <span>Made with ❤️ in India</span>
              <span style={{ textAlign: "right" }}>
                © {new Date().getFullYear()} All rights reserved
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;