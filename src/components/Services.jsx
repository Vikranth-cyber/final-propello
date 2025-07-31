import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt, FaHandshake, FaComments, FaShieldAlt, 
  FaNetworkWired, FaChartBar
} from "react-icons/fa";

const services = [
  { title: "Outbound AI Calling", description: "Automated outbound AI calls for seamless customer engagement.", icon: <FaPhoneAlt size={20} /> },
  { title: "Sales AI Calling", description: "Boost conversions with AI-driven sales call automation.", icon: <FaHandshake size={20} /> },
  { title: "Inbound AI Handling", description: "Manage WhatsApp, Email, Chatbot, and scheduling automatically.", icon: <FaComments size={20} /> },
  { title: "Data Security", description: "Enterprise-grade encryption and compliance for secure communications.", icon: <FaShieldAlt size={20} /> },
  { title: "Omnichannel Automation", description: "Integrate AI across multiple platforms for effortless customer interaction.", icon: <FaNetworkWired size={20} /> },
  { title: "Custom Dashboards & Analytics", description: "Monitor AI call performance and customer engagement in real-time.", icon: <FaChartBar size={20} /> },
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
        <h2 className="orange-text">Our Services</h2>
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
              <h3 className="service-title orange-text">{s.title}</h3>
              <p className="service-desc">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        :root {
          --orange-primary: #FF6B00;
          --orange-secondary: #FF8C42;
          --orange-light: #FFA76B;
          --orange-lighter: #FFD1B3;
          --text-dark: #333333;
          --text-medium: #555555;
          --text-light: #777777;
        }

        .services-section {
          min-height: 100vh;
          padding: 2rem;
          background: #FFFFFF;
          color: var(--text-dark);
          font-family: 'Segoe UI', sans-serif;
          text-align: center;
        }

        .orange-text {
          background: linear-gradient(to right, var(--orange-primary), var(--orange-secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .services-main {
          max-width: 1100px;
          margin: 0 auto;
          padding: 1rem;
        }

        h2 {
          font-size: 2.2rem;
          margin-bottom: 2rem;
        }

        .services-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .service-card {
          background: #FFFFFF;
          border-radius: 12px;
          padding: 1.5rem;
          min-height: 180px;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          border: 1px solid var(--orange-lighter);
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
        }

        .service-icon {
          font-size: 1.5rem;
          color: var(--orange-primary);
          margin-bottom: 1rem;
        }

        .service-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .service-desc {
          font-size: 1rem;
          color: var(--text-medium);
          line-height: 1.4;
        }

        @media (max-width: 1000px) {
          .services-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .services-section {
            padding: 1.5rem;
          }
          
          .services-container {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          h2 {
            font-size: 1.8rem;
          }

          .service-card {
            min-height: auto;
            padding: 1.2rem;
          }

          .service-title {
            font-size: 1.1rem;
          }

          .service-desc {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;