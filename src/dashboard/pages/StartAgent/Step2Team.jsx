import React from "react";
import { FaMoneyBillWave, FaUsers, FaClipboardList, FaConciergeBell, FaBullhorn, FaMagic } from "react-icons/fa";

const Step2Team = ({ formData, setFormData, nextStep }) => {
  const teams = [
    { name: "Sales", icon: <FaMoneyBillWave className="team-icon" /> },
    { name: "HR", icon: <FaUsers className="team-icon" /> },
    { name: "Admin", icon: <FaClipboardList className="team-icon" /> },
    { name: "Customer Support", icon: <FaConciergeBell className="team-icon" /> },
    { name: "Marketing Team", icon: <FaBullhorn className="team-icon" /> },
    { name: "Others", icon: <FaMagic className="team-icon" /> }
  ];

  const handleSelect = (team) => {
    setFormData({ ...formData, team });
    nextStep();
  };

  return (
    <div className="step-container">
      <div className="step-header">
        <h2 className="step-title">
          Which team is using Propello AI?
        </h2>
        <p className="step-subtitle">Select the team that will primarily use this AI agent</p>
      </div>

      <div className="card-grid">
        {teams.map((team) => (
          <div
            key={team.name}
            onClick={() => handleSelect(team.name)}
            className={`option-card ${formData.team === team.name ? "active" : ""}`}
          >
            <div className="option-icon">{team.icon}</div>
            <span className="option-text">{team.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step2Team;

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
  background: linear-gradient(90deg, #fc466b 70%, #3f5efb 100%);
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
  border: 1px solid rgba(252, 70, 107, 0.1);
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
  box-shadow: 0 10px 25px rgba(252, 70, 107, 0.1);
  border-color: rgba(252, 70, 107, 0.3);
}

.option-card.active {
  background: linear-gradient(135deg, #fc466b 70%, #3f5efb 100%);
  color: white;
  box-shadow: 0 10px 25px rgba(252, 70, 107, 0.2);
}

.option-icon {
  margin-bottom: 15px;
}

.team-icon {
  font-size: 2rem;
  color: #fc466b;
  transition: all 0.3s ease;
}

.option-card.active .team-icon {
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
  
  .team-icon {
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