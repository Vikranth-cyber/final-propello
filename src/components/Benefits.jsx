import React from 'react';
import { FaBrain, FaRocket, FaChartBar, FaPlug } from 'react-icons/fa';

const Benefits = () => {
  const benefits = [
    {
      icon: <FaBrain size={24} style={{ color: "#A3E4D7" }} />,
      title: "Truly Humanlike AI",
      description: "Natural tone, emotion-sensitive answers, and multilingual fluency.",
    },
    {
      icon: <FaChartBar size={24} style={{ color: "#A3E4D7" }} />,
      title: "Better Conversions",
      description: "Drive sales with compelling, NEPQ-style conversations designed for your business.",
    },
    {
      icon: <FaRocket size={24} style={{ color: "#A3E4D7" }} />,
      title: "Effortless Scaling",
      description: "Run thousands of calls daily—without hiring.",
    },
    {
      icon: <FaPlug size={24} style={{ color: "#A3E4D7" }} />,
      title: "Plug-and-Play Setup",
      description: "Fast integration with your CRM and support tools. Zero hassle.",
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
        backgroundColor: "#000", // BLACK background
      }}
    >
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
        Why Choose Propello AI?
      </h2>

      <div
        style={{
          background: "#000", // BLACK background
          padding: "2rem",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "1200px",
          boxShadow: "0 0 12px #5D9EFF, inset 0 0 8px #5D9EFF", // Glowing blue border
          border: "1px solid #5D9EFF",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2rem",
          }}
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#000", // BLACK card
                border: "1px solid #5D9EFF",
                boxShadow: "0 0 10px #5D9EFF, inset 0 0 6px #5D9EFF",
                padding: "1.5rem 1rem",
                borderRadius: "12px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow =
                  "0 0 16px #5D9EFF, 0 0 24px #5D9EFF, inset 0 0 10px #5D9EFF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 0 10px #5D9EFF, inset 0 0 6px #5D9EFF";
              }}
            >
              {benefit.icon}
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
    </section>
  );
};

export default Benefits;
