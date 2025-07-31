import React from "react";
import { FaRobot, FaInbox, FaPaperPlane, FaCommentDots, FaMagic } from "react-icons/fa";

const Step4UseCase = ({ formData, setFormData, nextStep }) => {
  const useCases = [
    { name: "AI and Automation", icon: <FaRobot className="usecase-icon" /> },
    { name: "Inbound Calls", icon: <FaInbox className="usecase-icon" /> },
    { name: "Outbound Calls", icon: <FaPaperPlane className="usecase-icon" /> },
    { name: "Messaging", icon: <FaCommentDots className="usecase-icon" /> },
    { name: "Others", icon: <FaMagic className="usecase-icon" /> }
  ];

  const handleSelect = (useCase) => {
    setFormData({ ...formData, useCase });
    nextStep();
  };

  return (
    <div className="step-container">
      <div className="step-header">
        <h2 className="step-title">
          Select Your Use Case
        </h2>
        <p className="step-subtitle">Choose the primary use case for your AI agent</p>
      </div>

      <div className="card-grid">
        {useCases.map((useCase) => (
          <div
            key={useCase.name}
            onClick={() => handleSelect(useCase.name)}
            className={`option-card ${formData.useCase === useCase.name ? "active" : ""}`}
          >
            <div className="option-icon">{useCase.icon}</div>
            <span className="option-text">{useCase.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step4UseCase;

const styles = `
.step-container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  min-height: calc(100vh - 180px);
}

.step-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 0 20px;
}

.step-title {
  font-size: 1.8rem;
  margin-bottom: 10px;
  font-weight: 700;
  color: #2a2a2a;
  background: linear-gradient(90deg, #ff6600, #ff8c00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.step-subtitle {
  font-size: 1rem;
  color: #6b7280;
  max-width: 400px;
  margin: 0 auto;
  line-height: 1.5;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 10px;
}

.option-card {
  background: white;
  border-radius: 12px;
  padding: 30px 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 102, 0, 0.1);
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 120px;
  position: relative;
  overflow: hidden;
}

.option-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(255, 102, 0, 0.1);
  border-color: rgba(255, 102, 0, 0.3);
}

.option-card.active {
  background: linear-gradient(135deg, #ff6600, #ff8c00);
  color: white;
  box-shadow: 0 10px 25px rgba(255, 102, 0, 0.2);
}

.option-icon {
  margin-bottom: 15px;
}

.usecase-icon {
  font-size: 2rem;
  color: #ff6600;
  transition: all 0.3s ease;
}

.option-card.active .usecase-icon {
  color: white;
}

.option-text {
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.option-card.active .option-text {
  color: white;
}

@media (max-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .step-title {
    font-size: 1.5rem;
  }
  
  .step-subtitle {
    font-size: 0.9rem;
  }
  
  .option-card {
    padding: 25px 15px;
    min-height: 100px;
  }
  
  .usecase-icon {
    font-size: 1.8rem;
  }
  
  .option-text {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .card-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .step-title {
    font-size: 1.3rem;
  }
  
  .step-container {
    padding: 30px 15px;
  }
}
`;

document.head.insertAdjacentHTML('beforeend', `<style>${styles}</style>`);