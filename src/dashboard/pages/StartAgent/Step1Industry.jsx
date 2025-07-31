import React, { useEffect } from "react";
import {
  FaLaptopCode,
  FaHospital,
  FaGraduationCap,
  FaHome,
  FaShoppingBag,
  FaEllipsisH,
} from "react-icons/fa";

const Step1Industry = ({ formData, setFormData, nextStep }) => {
  const industries = [
    { name: "IT", icon: <FaLaptopCode className="industry-icon" /> },
    { name: "Healthcare", icon: <FaHospital className="industry-icon" /> },
    { name: "Education", icon: <FaGraduationCap className="industry-icon" /> },
    { name: "Real Estate", icon: <FaHome className="industry-icon" /> },
    { name: "Retail", icon: <FaShoppingBag className="industry-icon" /> },
    { name: "Others", icon: <FaEllipsisH className="industry-icon" /> },
  ];

  const handleSelect = (industry) => {
    setFormData({ ...formData, industry });
    nextStep();
  };

  useEffect(() => {
    const styles = `
      .step-container {
        width: 100%;
        max-width: 1000px;
        background: white;
        border-radius: 20px;
        padding: 30px 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        margin: auto;
      }

      .step-header {
        text-align: center;
        margin-bottom: 30px;
      }

      .step-title {
        font-size: 1.8rem;
        font-weight: 700;
        background: linear-gradient(90deg, #ff6600, #ff8c00);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .step-subtitle {
        color: #6b7280;
        font-size: 1rem;
        max-width: 400px;
        margin: 0 auto;
        line-height: 1.5;
      }

      .card-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
      }

      .option-card {
        background: white;
        border-radius: 12px;
        padding: 25px 15px;
        text-align: center;
        cursor: pointer;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.03);
        border: 1px solid rgba(255, 102, 0, 0.1);
        transition: 0.3s ease;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .option-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(255, 102, 0, 0.1);
        border-color: rgba(255, 102, 0, 0.3);
      }

      .option-card.active {
        background: linear-gradient(135deg, #ff6600, #ff8c00);
        color: white;
      }

      .industry-icon {
        font-size: 2rem;
        color: #ff6600;
        margin-bottom: 10px;
        transition: 0.3s ease;
      }

      .option-card.active .industry-icon {
        color: white;
      }

      .option-text {
        font-size: 1.1rem;
        font-weight: 600;
      }

      .option-card.active .option-text {
        color: white;
      }

      @media (max-width: 992px) {
        .card-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (max-width: 600px) {
        .card-grid {
          grid-template-columns: repeat(1, 1fr);
        }

        .step-title {
          font-size: 1.5rem;
        }

        .step-subtitle {
          font-size: 0.9rem;
        }

        .industry-icon {
          font-size: 1.8rem;
        }

        .option-text {
          font-size: 1rem;
        }
      }
    `;
    const styleTag = document.createElement("style");
    styleTag.innerHTML = styles;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <div className="step-container">
      <div className="step-header">
        <h2 className="step-title">Choose your Industry</h2>
        <p className="step-subtitle">
          Select the industry that best describes your business
        </p>
      </div>

      <div className="card-grid">
        {industries.map((ind) => (
          <div
            key={ind.name}
            onClick={() => handleSelect(ind.name)}
            className={`option-card ${
              formData.industry === ind.name ? "active" : ""
            }`}
          >
            <div className="option-icon">{ind.icon}</div>
            <span className="option-text">{ind.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step1Industry;
