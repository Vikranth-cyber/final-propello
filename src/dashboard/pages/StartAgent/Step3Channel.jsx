import React, { useEffect } from "react";
import { FiPhone, FiMessageCircle, FiMail, FiMonitor } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";

const Step3Channel = ({ formData, setFormData, nextStep }) => {
  const channels = [
    { name: "Voice", icon: <FiPhone className="channel-icon" /> },
    { name: "SMS", icon: <FiMessageCircle className="channel-icon" /> },
    { name: "WhatsApp", icon: <IoLogoWhatsapp className="channel-icon" /> },
    { name: "Email", icon: <FiMail className="channel-icon" /> },
    { name: "Chat", icon: <FiMonitor className="channel-icon" /> }
  ];

  const handleToggle = (channel) => {
    const selected = formData.channels.includes(channel)
      ? formData.channels.filter((ch) => ch !== channel)
      : [...formData.channels, channel];
    setFormData({ ...formData, channels: selected });
  };

  useEffect(() => {
    if (formData.channels.length > 0) {
      const timer = setTimeout(() => {
        nextStep();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [formData.channels, nextStep]);

  return (
    <div className="step-container">
      <div className="step-header">
        <h2 className="step-title">Select Communication Channels</h2>
        <p className="step-subtitle">
          Choose all channels your AI agent will operate on
        </p>
      </div>

      <div className="card-grid">
        {channels.map((channel) => (
          <div
            key={channel.name}
            onClick={() => handleToggle(channel.name)}
            className={`option-card ${formData.channels.includes(channel.name) ? "active" : ""}`}
          >
            <div className="option-icon">{channel.icon}</div>
            <span className="option-text">{channel.name}</span>
            {formData.channels.includes(channel.name) && (
              <div className="selected-badge">✓</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step3Channel;

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

.channel-icon {
  font-size: 2rem;
  color: #fc466b;
  transition: all 0.3s ease;
}

.option-card.active .channel-icon {
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

.selected-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: white;
  color: #fc466b;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.option-card.active .selected-badge {
  background: white;
  color: #fc466b;
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
  
  .channel-icon {
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
  
  .selected-badge {
    width: 24px;
    height: 24px;
    font-size: 0.9rem;
  }
}
`;

document.head.insertAdjacentHTML('beforeend', `<style>${styles}</style>`);