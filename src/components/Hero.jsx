import { useEffect, useState } from "react";

const Hero = ({ user }) => {
  const titles = [
    "Conversational AI That Sells",
    "Engage Customers in Real Time",
    "AI Assistants for Growth"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    scenario: ""
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % titles.length);
        setFade(true);
      }, 400);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const closeModal = () => setShowModal(false);

  return (
    <>
      <section
        id="home"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "40px",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          backgroundColor: "#ffffff",
          userSelect: "none",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "relative",
            zIndex: 1,
            background: "#ffffff",
            padding: "4rem 5rem 4rem 6rem",
            borderRadius: "32px",
            maxWidth: "1100px",
            width: "100%",
            boxShadow: "0 20px 60px rgba(252, 70, 107, 0.2)",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "4rem",
            flexWrap: "wrap",
            minHeight: "420px",
            border: "1px solid rgba(252, 70, 107, 0.2)"
          }}
          className="hero-container"
        >
          {/* Left Text */}
          <div style={{ flex: "1 1 450px", minWidth: "320px" }} className="hero-text-container">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.5rem",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "2.5px",
                fontSize: "1.1rem",
                background: "linear-gradient(90deg, #FC466B, #3F5EFB)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "var(--font-heading)",
                maxWidth: "max-content",
                padding: "0.4rem 1.2rem",
                borderRadius: "999px",
                backgroundColor: "rgba(252, 70, 107, 0.1)",
              }}
              className="hero-badge"
            >
              Humanlike AI Voice Agents
            </div>

            <h1
              style={{
                fontSize: "4rem",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                fontFamily: "var(--font-heading)",
                background: "linear-gradient(90deg, #FC466B, #3F5EFB)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                userSelect: "none",
                textAlign: "left",
                opacity: fade ? 1 : 0,
                transition: "opacity 0.4s ease-in-out",
              }}
              className="hero-title"
            >
              {titles[currentIndex]}
            </h1>

            <p
              style={{
                fontSize: "1.3rem",
                color: "#666666",
                maxWidth: "100%",
                margin: "0 auto",
                lineHeight: 1.6,
                userSelect: "none",
                textAlign: "left",
              }}
              className="hero-description"
            >
              Premium Voice AI for Business: Smarter Conversations, Better Conversions, and Seamless Customer Experiences
            </p>

            <div
              style={{
                marginTop: "3rem",
                display: "flex",
                justifyContent: "flex-start",
                gap: "1.5rem",
                flexWrap: "wrap",
              }}
              className="hero-buttons"
            >
              <button
                style={{
                  background: "linear-gradient(135deg, #FC466B, #3F5EFB)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "50px",
                  padding: "1.2rem 3rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  transition: "transform 0.3s ease",
                  userSelect: "none",
                  whiteSpace: "nowrap",
                  boxShadow: "0 0 25px rgba(252, 70, 107, 0.4)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
                className="hero-button primary"
              >
                Get Started Free
              </button>

              <button
                style={{
                  background: "transparent",
                  border: "2px solid #FC466B",
                  color: "#FC466B",
                  borderRadius: "50px",
                  padding: "1.2rem 3rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  userSelect: "none",
                  whiteSpace: "nowrap",
                  transition: "background-color 0.3s ease, color 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(252, 70, 107, 0.1)";
                  e.currentTarget.style.color = "#3F5EFB";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#FC466B";
                }}
                className="hero-button secondary"
                onClick={() => setShowModal(true)}
              >
                Book a Demo
              </button>
            </div>
          </div>

          {/* Mic Section - Only shown on desktop and tablet */}
          <div
            style={{
              flex: "0 0 220px",
              minWidth: "150px",
              maxWidth: "220px",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "320px",
            }}
            aria-hidden="true"
            className="mic-container"
          >
            <div className="mic" aria-hidden="true">
              <div className="mic-shadow"></div>
              <span className="mic-icon"></span>
            </div>
          </div>
        </div>

        {/* 🎤 Mic CSS */}
        <style>{`
          .mic {
            position: relative;
            width: 220px;
            height: 220px;
            color: #FC466B;
            user-select: none;
          }
          .mic::before, .mic::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 100%;
            z-index: 2;
            box-shadow: 0 0 20px 15px #FC466B;
          }
          .mic::before {
            width: 220px;
            height: 220px;
            background-color: #FFF0F5;
          }
          .mic::after {
            width: 140px;
            height: 140px;
            background-color: #FFE5F1;
            animation: circle-size 0.8s linear infinite alternate;
          }
          .mic-icon {
            box-sizing: border-box;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(3.2);
            display: block;
            width: 16px;
            height: 12px;
            border-bottom-left-radius: 120px;
            border-bottom-right-radius: 120px;
            border: 2px solid;
            border-top: 0;
            margin-top: 20px;
            z-index: 3;
            border-color: #3F5EFB;
          }
          .mic-icon::before, .mic-icon::after {
            content: "";
            display: block;
            box-sizing: border-box;
            position: absolute;
            border-color: #3F5EFB;
          }
          .mic-icon::before {
            width: 2px;
            height: 5px;
            top: calc(100% + 1px);
            left: 50%;
            transform: translate(-50%, 0);
            background-color: #3F5EFB;
          }
          .mic-icon::after {
            border: 2px solid;
            width: 8px;
            height: 18px;
            left: 50%;
            top: -10px;
            border-radius: 4px;
            transform: translate(-50%, 0);
          }
          .mic-shadow {
            width: 220px;
            height: 220px;
            position: absolute;
            top: 50%;
            left: 50%;
            border-radius: 100%;
            z-index: 1;
            box-shadow:
              0 0 50px 5px #FC466B,
              0 0 100px 20px #3F5EFB,
              0 0 150px 25px #FC466B;
            animation: shadow-rotate 2s linear infinite;
            transform-origin: center;
            transform: translate(-50%, -50%);
          }
          @keyframes circle-size {
            from {
              width: 140px;
              height: 140px;
              box-shadow: 0 0 15px 15px #FC466B;
            }
            to {
              width: 120px;
              height: 120px;
              box-shadow: 0 0 20px 25px #3F5EFB;
            }
          }
          @keyframes shadow-rotate {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
          }

          /* Responsive Styles */
          @media (max-width: 1200px) {
            .hero-container {
              padding: 3.5rem 4.5rem 3.5rem 5rem !important;
            }
            
            .hero-title {
              font-size: 3.5rem !important;
            }
          }

          @media (max-width: 1024px) {
            .hero-container {
              padding: 3rem 4rem 3rem 4.5rem !important;
              gap: 3rem !important;
            }
            
            .hero-title {
              font-size: 3rem !important;
            }
            
            .hero-description {
              font-size: 1.15rem !important;
            }
          }

          @media (max-width: 900px) {
            .hero-title {
              font-size: 2.8rem !important;
            }
            
            .hero-buttons {
              gap: 1rem !important;
            }
            
            .hero-button {
              padding: 1rem 2rem !important;
            }
          }

          @media (max-width: 768px) {
            .hero-container {
              padding: 2.5rem 3rem !important;
              flex-direction: column !important;
              text-align: center !important;
              min-height: auto !important;
            }
            
            .hero-text-container {
              text-align: center !important;
              min-width: 100% !important;
            }
            
            .hero-badge {
              margin: 0 auto 1.5rem !important;
            }
            
            .hero-title {
              font-size: 2.5rem !important;
              text-align: center !important;
              margin-bottom: 1rem !important;
            }
            
            .hero-description {
              text-align: center !important;
              font-size: 1.1rem !important;
            }
            
            .hero-buttons {
              justify-content: center !important;
              margin-top: 2rem !important;
            }
          }

          @media (max-width: 600px) {
            .mic-container {
              display: none !important;
            }
            
            .hero-container {
              padding: 2rem 2rem !important;
              text-align: center !important;
            }
            
            .hero-title {
              font-size: 2.2rem !important;
              text-align: center !important;
              margin-left: auto;
              margin-right: auto;
            }
            
            .hero-description {
              font-size: 1rem !important;
              text-align: center !important;
            }
            
            .hero-badge {
              font-size: 0.9rem !important;
              padding: 0.3rem 1rem !important;
              margin-left: auto !important;
              margin-right: auto !important;
            }
            
            .hero-buttons {
              flex-direction: column;
              align-items: center;
            }
          }

          @media (max-width: 480px) {
            .hero-container {
              padding: 1.5rem 1.5rem !important;
              border-radius: 24px !important;
            }
            
            .hero-title {
              font-size: 2rem !important;
            }
            
            .hero-buttons {
              flex-direction: column;
              gap: 1rem !important;
              width: 100%;
            }
            
            .hero-button {
              width: 100%;
              padding: 0.9rem 1.5rem !important;
              justify-content: center;
            }
          }

          @media (max-width: 375px) {
            .hero-title {
              font-size: 1.8rem !important;
            }
            
            .hero-badge {
              font-size: 0.8rem !important;
              letterSpacing: 1.5px !important;
            }
            
            .hero-description {
              font-size: 0.95rem !important;
            }
          }
        `}</style>
      </section>

      {/* Demo Modal */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "2.5rem",
              borderRadius: "16px",
              width: "95%",
              maxWidth: "500px",
              boxShadow: "0 4px 30px rgba(252, 70, 107, 0.2)",
              textAlign: "center",
              border: "1px solid rgba(252, 70, 107, 0.3)"
            }}
            className="modal-container"
          >
            <h2 style={{ 
              marginBottom: "1.5rem", 
              color: "#3F5EFB",
              fontSize: "1.8rem",
              fontFamily: "var(--font-heading)"
            }}>
              Book a Demo
            </h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              style={{
                ...inputStyle,
                backgroundColor: "rgba(255,255,255,0.9)",
                border: "1px solid rgba(252, 70, 107, 0.3)",
                color: "#333"
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Business Email"
              value={formData.email}
              onChange={handleChange}
              style={{
                ...inputStyle,
                backgroundColor: "rgba(255,255,255,0.9)",
                border: "1px solid rgba(252, 70, 107, 0.3)",
                color: "#333"
              }}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number with Country Code"
              value={formData.phone}
              onChange={handleChange}
              style={{
                ...inputStyle,
                backgroundColor: "rgba(255,255,255,0.9)",
                border: "1px solid rgba(252, 70, 107, 0.3)",
                color: "#333"
              }}
            />
            <textarea
              name="scenario"
              placeholder="Describe Call Scenario"
              value={formData.scenario}
              onChange={handleChange}
              style={{ 
                ...inputStyle, 
                height: "80px",
                backgroundColor: "rgba(255,255,255,0.9)",
                border: "1px solid rgba(252, 70, 107, 0.3)",
                color: "#333"
              }}
            />
            <p
              style={{
                color: "#FC466B",
                marginTop: "1rem",
                fontSize: "0.9rem",
                fontStyle: "italic"
              }}
            >
              Our AI agent speaks in English, Hindi, and Hinglish
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "1.5rem" }}>
              <button
                onClick={closeModal}
                style={{
                  background: "transparent",
                  color: "#FC466B",
                  padding: "0.8rem 1.5rem",
                  border: "2px solid #FC466B",
                  borderRadius: "8px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(252, 70, 107, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                Close
              </button>
              <button
                style={{
                  background: "linear-gradient(135deg, #FC466B, #3F5EFB)",
                  color: "#fff",
                  padding: "0.8rem 1.5rem",
                  border: "none",
                  borderRadius: "8px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Responsive Styles */}
      <style>{`
        @media (max-width: 600px) {
          .modal-container {
            padding: 1.5rem !important;
            max-width: 90% !important;
          }
          
          .modal-container h2 {
            font-size: 1.5rem !important;
            margin-bottom: 1rem !important;
          }
          
          .modal-container input,
          .modal-container textarea,
          .modal-container button {
            padding: 0.7rem 1rem !important;
            font-size: 0.9rem !important;
          }
          
          .modal-container p {
            font-size: 0.8rem !important;
          }
        }
        
        @media (max-width: 400px) {
          .modal-container {
            padding: 1.2rem !important;
          }
          
          .modal-container h2 {
            font-size: 1.3rem !important;
          }
          
          .modal-container button {
            padding: 0.6rem 1rem !important;
            font-size: 0.85rem !important;
          }
        }
      `}</style>
    </>
  );
};

const inputStyle = {
  width: "100%",
  padding: "0.9rem",
  margin: "0.5rem 0",
  borderRadius: "8px",
  fontSize: "1rem",
  outline: "none",
  transition: "border 0.3s ease"
};

export default Hero;