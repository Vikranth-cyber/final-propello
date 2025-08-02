import React from 'react';
import {
  MdRecordVoiceOver,
  MdTrendingUp,
  MdIntegrationInstructions,
  MdCloudDone,
} from 'react-icons/md';

const benefits = [
  {
    icon: <MdRecordVoiceOver size={40} style={{ color: "#FC466B" }} />,
    title: "Natural Conversations",
    description:
      "Engage users with humanlike tone, emotional nuance, and fluent multilingual support.",
  },
  {
    icon: <MdTrendingUp size={40} style={{ color: "#FC466B" }} />,
    title: "Boost Sales Faster",
    description:
      "Use NEPQ-style scripting and AI-driven follow-ups to close more leads at scale.",
  },
  {
    icon: <MdCloudDone size={40} style={{ color: "#FC466B" }} />,
    title: "Scale Without Limits",
    description:
      "Run thousands of voice interactions daily without increasing headcount or effort.",
  },
  {
    icon: <MdIntegrationInstructions size={40} style={{ color: "#FC466B" }} />,
    title: "Seamless Integration",
    description:
      "Instant setup with CRMs, helpdesks, and tools—no developer time required.",
  },
];

const Benefits = () => {
  return (
    <section
      id="benefits"
      style={{
        padding: "clamp(2rem, 5vw, 5rem) 1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          fontSize: "clamp(2.2rem, 5vw, 3rem)",
          fontWeight: 800,
          fontFamily: "'Segoe UI', sans-serif",
          background: "linear-gradient(90deg, #FC466B, #3F5EFB)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "2.5rem",
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
          background: "white",
          padding: "clamp(1rem, 3vw, 2rem)",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "1200px",
          boxShadow: "0 0 6px #3F5EFB55, inset 0 0 4px #FC466B55",
          border: "1px solid #FC466B33",
          transition: "all 0.3s ease",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "clamp(1rem, 3vw, 2rem)",
          }}
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                border: "1px solid #FC466B22",
                boxShadow: "0 0 6px #FC466B33, inset 0 0 3px #3F5EFB33",
                padding: "clamp(1.2rem, 2vw, 1.8rem)",
                borderRadius: "12px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
                minHeight: "220px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow =
                  "0 0 10px #FC466B88, 0 0 14px #3F5EFB88, inset 0 0 6px #3F5EFB88";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 0 6px #FC466B33, inset 0 0 3px #3F5EFB33";
              }}
            >
              <div style={{ marginBottom: "1rem" }}>{benefit.icon}</div>
              <h3
                style={{
                  fontSize: "clamp(1.1rem, 3vw, 1.3rem)",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                  background: "linear-gradient(90deg, #FC466B, #3F5EFB)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "'Segoe UI', sans-serif",
                }}
              >
                {benefit.title}
              </h3>
              <p
                style={{
                  fontSize: "clamp(0.95rem, 2.5vw, 1rem)",
                  lineHeight: 1.6,
                  color: "#333",
                  fontFamily: "'Segoe UI', sans-serif",
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
