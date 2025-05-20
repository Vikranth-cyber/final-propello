import React from "react";
import {
  FaPhoneAlt,
  FaHandshake,
  FaComments,
  FaShieldAlt,
  FaNetworkWired,
  FaChartBar,
} from "react-icons/fa";

const services = [
  {
    title: "Outbound AI Calling",
    description: "Automated outbound AI calls for seamless customer engagement.",
    icon: <FaPhoneAlt size={24} color="#A3E4D7" />,
  },
  {
    title: "Sales AI Calling",
    description: "Boost conversions with AI-driven sales call automation.",
    icon: <FaHandshake size={24} color="#A3E4D7" />,
  },
  {
    title: "Inbound AI Handling",
    description: "Manage WhatsApp, Email, Chatbot, and scheduling automatically.",
    icon: <FaComments size={24} color="#A3E4D7" />,
  },
  {
    title: "Data Security",
    description: "Enterprise-grade encryption and compliance for secure communications.",
    icon: <FaShieldAlt size={24} color="#A3E4D7" />,
  },
  {
    title: "Omnichannel Automation",
    description: "Integrate AI across multiple platforms for effortless customer interaction.",
    icon: <FaNetworkWired size={24} color="#A3E4D7" />,
  },
  {
    title: "Custom Dashboards & Analytics",
    description: "Monitor AI call performance and customer engagement in real-time.",
    icon: <FaChartBar size={24} color="#A3E4D7" />,
  },
];

const Services = () => {
  return (
    <>
      <style>{`
        #services {
          padding: 3rem 1rem;
          background: transparent;
          color: #E5E9F0;
          font-family: var(--font-body);
          text-align: center;
        }

        #services h2 {
          font-size: 2.6rem;
          font-weight: 700;
          margin-bottom: 2rem;
          background: linear-gradient(90deg, #5D9EFF, #A3E4D7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          user-select: none;
        }

        .services-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .service-card {
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid #5D9EFF;
          border-radius: 10px;
          padding: 1rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 220px;
        }

        .service-card:hover {
          transform: scale(1.05);
          box-shadow: 0 0 10px #5D9EFF;
        }

        .service-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0.6rem 0 0.3rem;
          color: #A3E4D7;
        }

        .service-desc {
          font-size: 0.9rem;
          color: #BFC9D9;
        }

        /* Tablet: 2 columns */
        @media (max-width: 992px) {
          .services-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Mobile: 1 column */
        @media (max-width: 600px) {
          .services-container {
            grid-template-columns: 1fr;
          }

          #services h2 {
            font-size: 2rem;
          }

          .service-title {
            font-size: 1.1rem;
          }

          .service-desc {
            font-size: 0.85rem;
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
