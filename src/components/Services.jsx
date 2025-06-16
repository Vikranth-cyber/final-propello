import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPhoneAlt, FaHandshake, FaComments, FaShieldAlt, FaNetworkWired, FaChartBar,
  FaArrowRight, FaArrowLeft, FaHospital, FaShoppingBag, FaTruck, FaGraduationCap,
  FaBuilding, FaMoneyBillWave
} from "react-icons/fa";

const services = [
  { title: "Outbound AI Calling", description: "Automated outbound AI calls for seamless customer engagement.", icon: <FaPhoneAlt size={20} /> },
  { title: "Sales AI Calling", description: "Boost conversions with AI-driven sales call automation.", icon: <FaHandshake size={20} /> },
  { title: "Inbound AI Handling", description: "Manage WhatsApp, Email, Chatbot, and scheduling automatically.", icon: <FaComments size={20} /> },
  { title: "Data Security", description: "Enterprise-grade encryption and compliance for secure communications.", icon: <FaShieldAlt size={20} /> },
  { title: "Omnichannel Automation", description: "Integrate AI across multiple platforms for effortless customer interaction.", icon: <FaNetworkWired size={20} /> },
  { title: "Custom Dashboards & Analytics", description: "Monitor AI call performance and customer engagement in real-time.", icon: <FaChartBar size={20} /> },
];

const industries = [
  { title: "Healthcare", description: "Automate appointment booking, reminders, and patient queries.", icon: <FaHospital size={22} /> },
  { title: "Retail & E-commerce", description: "Answer product questions, track orders, and handle returns.", icon: <FaShoppingBag size={22} /> },
  { title: "Logistics & Delivery", description: "Provide real-time updates on shipments and automate driver communication.", icon: <FaTruck size={22} /> },
  { title: "Education", description: "Manage admissions queries, schedule demos, and follow up on leads.", icon: <FaGraduationCap size={22} /> },
  { title: "Real Estate", description: "Automate lead qualification and follow-ups.", icon: <FaBuilding size={22} /> },
  { title: "Finance & Banking", description: "Improve customer service and security confirmations.", icon: <FaMoneyBillWave size={22} /> },
];

const Services = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section id="services" className="services-section">
      <AnimatePresence mode="wait">
        {!showDetails ? (
          <motion.div
            key="services"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="services-main"
          >
            <h2 className="breezy-text">Our Services</h2>
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
                  <h3 className="service-title breezy-text">{s.title}</h3>
                  <p className="service-desc">{s.description}</p>
                </motion.div>
              ))}
            </div>
            <motion.button 
              onClick={() => setShowDetails(true)} 
              className="read-more-btn"
              whileHover={{ scale: 1.05 }}
            >
              View Industries We Serve <FaArrowRight />
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="details"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="details-section"
          >
            <motion.button 
              className="back-btn" 
              onClick={() => setShowDetails(false)}
              whileHover={{ scale: 1.05 }}
            >
              <FaArrowLeft /> Back to Services
            </motion.button>
            <h1 className="details-title breezy-text">Industries We Serve</h1>
            <div className="services-container">
              {industries.map((industry, idx) => (
                <motion.div 
                  key={idx} 
                  className="service-card"
                  whileTap={{ scale: 1.06 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 250 }}
                >
                  <div className="service-icon">{industry.icon}</div>
                  <h3 className="service-title breezy-text">{industry.title}</h3>
                  <p className="service-desc">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

<style jsx>{`
  :root {
    --breeze: #5D9EFF;
    --breeze-light: #C7E3FF;
  }

  .services-section {
    min-height: 100vh;
    padding: 1.5rem 1rem;
    background: rgba(0, 0, 0, 0.2);
    color: var(--breeze-light);
    font-family: 'Segoe UI', sans-serif;
    text-align: center;
    position: relative;
  }

  .breezy-text {
    background: linear-gradient(to right, var(--breeze), var(--breeze-light));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .services-main,
  .details-section {
    max-width: 1100px;
    margin: 0 auto;
    padding: 1rem;
  }

  h2, .details-title {
    font-size: 1.9rem;
    margin-bottom: 1.5rem;
  }

  .services-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.7rem;
    margin-bottom: 2rem;
  }

  .service-card {
    background: rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 1rem;
    min-height: 140px;
    text-align: center;
    transition: transform 0.3s ease;
  }

  .service-card:active,
  .service-card:hover {
    transform: scale(1.03);
  }

  .service-icon {
    font-size: 1.2rem;
    color: var(--breeze);
    margin-bottom: 0.6rem;
  }

  .service-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.3rem;
  }

  .service-desc {
    font-size: 0.95rem;
    color: #B0CFEA;
  }

  .read-more-btn {
    position: absolute;
    bottom: 20px;
    right: 20px;
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
    font-weight: bold;
    background: var(--breeze);
    color: #111;
    border: none;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  }

  .back-btn {
    background: none;
    border: none;
    color: var(--breeze-light);
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    margin-bottom: 1.2rem;
    padding: 0.5rem 1rem;
    border-radius: 20px;
  }

  .back-btn:hover {
    background: rgba(255, 255, 255, 0.08);
  }

  @media (max-width: 1000px) {
    .services-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .services-container {
      grid-template-columns: 1fr;
    }

    .read-more-btn {
      bottom: 15px;
      right: 12px;
      padding: 0.6rem 1.1rem;
      font-size: 0.8rem;
    }

    h2, .details-title {
      font-size: 1.7rem;
    }

    .service-title {
      font-size: 1rem;
    }

    .service-desc {
      font-size: 0.9rem;
    }
  }
`}</style>
    </section>
  );
};

export default Services;
