import React from "react";
import { motion } from "framer-motion";
import {
  MdOutbound,
  MdMonetizationOn,
  MdSupportAgent,
  MdEnhancedEncryption,
  MdHub,
  MdQueryStats,
} from "react-icons/md";

const services = [
  {
    title: "Outbound AI Calling",
    description: "Automated outbound AI calls for seamless customer engagement.",
    icon: <MdOutbound size={40} />,
  },
  {
    title: "Sales AI Calling",
    description: "Boost conversions with AI-driven persuasive sales conversations.",
    icon: <MdMonetizationOn size={40} />,
  },
  {
    title: "Inbound AI Handling",
    description: "Manage WhatsApp, Email, Chatbot, and scheduling automatically.",
    icon: <MdSupportAgent size={40} />,
  },
  {
    title: "Data Security",
    description: "Enterprise-grade encryption and compliance for secure communications.",
    icon: <MdEnhancedEncryption size={40} />,
  },
  {
    title: "Omnichannel Automation",
    description: "Integrate AI across multiple platforms for effortless customer interaction.",
    icon: <MdHub size={40} />,
  },
  {
    title: "Custom Dashboards & Analytics",
    description: "Monitor AI call performance and customer engagement in real-time.",
    icon: <MdQueryStats size={40} />,
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="services-main"
      >
        <h2 className="gradient-text title-heading">Our Services</h2>
        <div className="services-container">
          {services.map((s, idx) => (
            <motion.div
              key={idx}
              className="service-card"
              whileTap={{ scale: 1.06 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-title gradient-text">{s.title}</h3>
              <p className="service-desc">{s.description}</p>
            </motion.div>
          ))}
          {/* Fill empty spaces if not divisible by 3 */}
          {services.length % 3 !== 0 &&
            Array.from({ length: 3 - (services.length % 3) }).map((_, i) => (
              <div key={`empty-${i}`} className="service-card empty-card"></div>
            ))}
        </div>
      </motion.div>

      <style jsx>{`
        .services-section {
          min-height: 100vh;
          padding: 3rem 1rem;
          background: #ffffff;
          color: #333333;
          font-family: 'Segoe UI', sans-serif;
          text-align: center;
        }

        .gradient-text {
          background: linear-gradient(90deg, #FC466B, #3F5EFB);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .title-heading {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 2.8rem;
        }

        .services-main {
          max-width: 1200px;
          margin: 0 auto;
        }

        .services-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .service-card {
          background: #f7f8ff;
          border-radius: 16px;
          padding: 2rem 1.6rem;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
          border: 1px solid #e3e7fd;
          min-height: 260px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 28px rgba(252, 70, 107, 0.15);
        }

        .service-icon {
          font-size: 2.5rem;
          font-weight: bold;
          color: #FC466B;
          margin-bottom: 1rem;
        }

        .service-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .service-desc {
          font-size: 0.95rem;
          color: #555555;
          line-height: 1.5;
        }

        .empty-card {
          background: transparent;
          box-shadow: none;
          border: none;
        }

        @media (max-width: 1000px) {
          .services-container {
            grid-template-columns: repeat(2, 1fr);
          }

          .title-heading {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 600px) {
          .services-container {
            grid-template-columns: 1fr;
            gap: 1.2rem;
          }

          .title-heading {
            font-size: 2rem;
          }

          .service-card {
            padding: 1.4rem 1rem;
          }

          .service-title {
            font-size: 1.1rem;
          }

          .service-desc {
            font-size: 0.88rem;
          }

          .service-icon {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
