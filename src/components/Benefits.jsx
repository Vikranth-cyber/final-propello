import React from 'react';
import { FaComments, FaRocket, FaCogs, FaChartBar } from 'react-icons/fa';

const Benefits = () => {
  const benefits = [
    {
      icon: <FaComments size={24} style={{ color: "#A3E4D7" }} />,
      title: "Natural Conversations",
      description: "Engage users with lifelike tone, emotional nuance, and fluent multilingual support.",
    },
    {
      icon: <FaChartBar size={24} style={{ color: "#A3E4D7" }} />,
      title: "Boost Sales Faster",
      description: "Use proven NEPQ-style scripting to close more leads—automated and at scale.",
    },
    {
      icon: <FaRocket size={24} style={{ color: "#A3E4D7" }} />,
      title: "Scale Without Limits",
      description: "Run thousands of voice interactions daily—no added headcount needed.",
    },
    {
      icon: <FaCogs size={24} style={{ color: "#A3E4D7" }} />,
      title: "Easy Integration",
      description: "Instant setup with your CRM, helpdesk, and tools. No dev time required.",
    },
  ];

  return (
    <section
      id="benefits"
      style={{
        padding: "clamp(2rem, 5vw, 5rem) 1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#000",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
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
          padding: "0 1rem",
        }}
      >
        Why Choose Propello AI?
      </h2>

      <div
        style={{
          background: "#000",
          padding: "clamp(1rem, 3vw, 2rem)",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "1200px",
          boxShadow: "0 0 6px #5D9EFF88, inset 0 0 4px #5D9EFF88",
          border: "1px solid #5D9EFF66",
          transition: "all 0.3s ease",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
            gap: "clamp(1rem, 3vw, 2rem)",
            justifyContent: "center",
          }}
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#000",
                border: "1px solid #5D9EFF44",
                boxShadow: "0 0 6px #5D9EFF55, inset 0 0 3px #5D9EFF55",
                padding: "clamp(1rem, 2vw, 1.5rem) clamp(0.8rem, 2vw, 1rem)",
                borderRadius: "12px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
                minHeight: "200px",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow =
                  "0 0 10px #5D9EFFAA, 0 0 14px #5D9EFFAA, inset 0 0 6px #5D9EFFAA";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 0 6px #5D9EFF55, inset 0 0 3px #5D9EFF55";
              }}
            >
              <div style={{ marginBottom: "1rem" }}>{benefit.icon}</div>
              <h3
                style={{
                  fontSize: "clamp(1.1rem, 3vw, 1.2rem)",
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
                  fontSize: "clamp(0.85rem, 2.5vw, 0.95rem)",
                  lineHeight: 1.6,
                  color: "#E5E9F0",
                  fontFamily: "var(--font-body)",
                  flex: 1,
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