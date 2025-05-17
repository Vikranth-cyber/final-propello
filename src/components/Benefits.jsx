import React from 'react';
import { FaShieldAlt, FaRobot, FaLightbulb, FaChartLine } from 'react-icons/fa';

const Benefits = () => {
  const benefits = [
    {
      icon: <FaRobot size={20} />,
      title: "AI-Powered Conversations",
      description:
        "Human-like interactions powered by neural networks that understand context and nuance.",
    },
    {
      icon: <FaLightbulb size={20} />,
      title: "Continuous Learning",
      description:
        "Adaptive algorithms that improve with every interaction, delivering smarter responses.",
    },
    {
      icon: <FaShieldAlt size={20} />,
      title: "Enterprise Security",
      description:
        "Military-grade encryption and compliance with the strictest data protection standards.",
    },
    {
      icon: <FaChartLine size={20} />,
      title: "Actionable Insights",
      description:
        "Real-time analytics and performance metrics to drive data-driven decisions.",
    },
  ];

  return (
    <section
      id="benefits"
      style={{
        padding: "5rem 1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "transparent",
      }}
    >
      {/* Title - gradient text only, no background */}
      <h2
        style={{
          fontSize: "2.5rem",
          fontFamily: "var(--font-heading)",
          background: "linear-gradient(90deg, #5D9EFF, #A3E4D7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "2rem",
          letterSpacing: "1px",
          userSelect: "none",
          textAlign: "center",
          width: "100%",
          maxWidth: "800px",
        }}
      >
        Key Benefits
      </h2>

      {/* Benefits Grid Container */}
      <div
        style={{
          background: "rgba(27, 31, 59, 0.6)",
          padding: "2rem",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "1200px",
         boxShadow: "0 0 8px #5D9EFF, 0 0 15px #A3E4D7, 0 0 25px #5D9EFF, inset 0 0 6px #A3E4D7",
          backdropFilter: "blur(12px)",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2rem",

            // Responsive grid columns on smaller screens
            // We'll add media queries using a style tag below
          }}
          className="benefits-grid"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                padding: "1.5rem 1rem 1.5rem 3.5rem",
                borderRadius: "12px",
                background:
                  "linear-gradient(135deg, rgba(93,158,255,0.15), rgba(163,228,215,0.08))",
                border: "1px solid rgba(163,228,215,0.3)",
                backdropFilter: "blur(8px)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
                willChange: "transform",
                boxShadow:
                  "0 0 5px #5D9EFF, 0 0 15px #A3E4D7, inset 0 0 8px #5D9EFF", // subtle neon glow
              }}
              onTouchStart={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow =
                  "0 0 10px #5D9EFF, 0 0 25px #A3E4D7, inset 0 0 12px #A3E4D7";
              }}
              onTouchEnd={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 0 5px #5D9EFF, 0 0 15px #A3E4D7, inset 0 0 8px #5D9EFF";
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow =
                  "0 0 10px #5D9EFF, 0 0 25px #A3E4D7, inset 0 0 12px #A3E4D7";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 0 5px #5D9EFF, 0 0 15px #A3E4D7, inset 0 0 8px #5D9EFF";
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "1rem",
                  top: "1.4rem",
                  padding: "0.6rem",
                  borderRadius: "50%",
                  background: "rgba(93, 158, 255, 0.2)",
                  color: "#A3E4D7",
                  boxShadow: "0 0 8px #5D9EFF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {benefit.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                  color: "#A3E4D7",
                  fontFamily: "var(--font-heading)",
                }}
              >
                {benefit.title}
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  color: "#E5E9F0",
                  fontFamily: "var(--font-body)",
                }}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive styles */}
      <style>
        {`
          /* Container max width shrink on smaller screens */
          @media (max-width: 768px) {
            #benefits > div {
              padding: 1.5rem;
              max-width: 95vw !important;
              box-shadow:
                0 0 6px #5D9EFF,
                0 0 12px #A3E4D7,
                0 0 18px #5D9EFF,
                inset 0 0 6px #A3E4D7;
            }

            .benefits-grid {
              grid-template-columns: 1fr !important;
              gap: 1.5rem !important;
            }

            #benefits h2 {
              font-size: 2rem !important;
              max-width: 100% !important;
            }

            #benefits h3 {
              font-size: 1.1rem !important;
            }

            #benefits p {
              font-size: 0.9rem !important;
            }
          }

          @media (max-width: 400px) {
            #benefits {
              padding: 3rem 0.5rem !important;
            }
            #benefits h2 {
              font-size: 1.6rem !important;
            }
            #benefits > div {
              padding: 1rem !important;
            }
            #benefits h3 {
              font-size: 1rem !important;
            }
            #benefits p {
              font-size: 0.85rem !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Benefits;
