import React from "react";
import { FaPhoneAlt, FaHandshake, FaComments, FaShieldAlt, FaNetworkWired, FaChartBar } from "react-icons/fa";

const services = [
  {
    title: "Outbound AI Calling",
    description: "Automated outbound AI calls for seamless customer engagement.",
    icon: <FaPhoneAlt size={18} style={{ color: "#A3E4D7", marginBottom: "0.3rem" }} />,
  },
  {
    title: "Sales AI Calling",
    description: "Boost conversions with AI-driven sales call automation.",
    icon: <FaHandshake size={18} style={{ color: "#A3E4D7", marginBottom: "0.3rem" }} />,
  },
  {
    title: "Inbound AI Handling",
    description: "Manage WhatsApp, Email, Chatbot, and scheduling automatically.",
    icon: <FaComments size={18} style={{ color: "#A3E4D7", marginBottom: "0.3rem" }} />,
  },
  {
    title: "Data Security",
    description: "Enterprise-grade encryption and compliance for secure communications.",
    icon: <FaShieldAlt size={18} style={{ color: "#A3E4D7", marginBottom: "0.3rem" }} />,
  },
  {
    title: "Omnichannel Automation",
    description: "Integrate AI across multiple platforms for effortless customer interaction.",
    icon: <FaNetworkWired size={18} style={{ color: "#A3E4D7", marginBottom: "0.3rem" }} />,
  },
  {
    title: "Custom Dashboards & Analytics",
    description: "Monitor AI call performance and customer engagement in real-time.",
    icon: <FaChartBar size={18} style={{ color: "#A3E4D7", marginBottom: "0.3rem" }} />,
  },
];

const Services = () => {
  return (
    <>
      <style>{`
        #services {
          padding: 2rem 0.8rem;
          background: transparent;
          color: #E5E9F0;
          font-family: var(--font-body);
          position: relative;
          z-index: 1;
        }

        #services h2 {
          text-align: center;
          font-size: 1.9rem;
          font-weight: 700;
          margin-bottom: 1.2rem;
          user-select: none;
          background: linear-gradient(90deg, #5D9EFF, #A3E4D7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .services-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.6rem;
          width: 100%;
          max-width: 850px;
          margin: 0 auto;
        }

        .service-card {
          background: rgba(255,255,255,0.05);
          border: 2px solid #5D9EFF;
          border-radius: 8px;
          padding: 0.4rem; /* Reduced padding for smaller height */
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          backdrop-filter: blur(5px);
          cursor: pointer;
          user-select: none;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          
          aspect-ratio: 1 / 1;
          width: 100%;
          box-sizing: border-box;
          
          box-shadow: 0 0 5px #5D9EFF, inset 0 0 3px #5D9EFF;
        }

        .service-card:hover {
          transform: scale(1.05);
          box-shadow: 0 0 10px #A3E4D7, inset 0 0 5px #A3E4D7;
        }

        .service-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: #A3E4D7;
          margin-bottom: 0.2rem;
        }

        .service-desc {
          font-size: 0.75rem;
          color: #9BAACB;
        }

        @media (max-width: 768px) {
          .services-container {
            display: flex;
            flex-direction: column;
            gap: 0.6rem;
            max-width: 300px;
            margin: 0 auto;
          }

          .service-card {
            padding: 0.6rem;
          }

          .service-desc {
            display: none;
          }
        }
      `}</style>

      <section id="services">
        <h2>Our Services</h2>
        <div className="services-container">
          {services.map((s, idx) => (
            <div key={idx} className="service-card">
              {s.icon}
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
