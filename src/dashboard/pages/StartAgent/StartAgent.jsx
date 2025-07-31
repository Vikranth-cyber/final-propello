import React, { useState, useEffect } from "react";
import Step1Industry from "./Step1Industry";
import Step2Team from "./Step2Team";
import Step3Channel from "./Step3Channel";
import Step4UseCase from "./Step4UseCase";
import Step5Summary from "./Step5Summary";
import { FiZap, FiMessageSquare, FiUsers, FiCalendar, FiChevronLeft, FiCheck } from "react-icons/fi";

const StartAgent = () => {
  const [step, setStep] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [formData, setFormData] = useState({
    industry: "",
    team: "",
    channels: [],
    useCase: "",
    phoneNumbersFile: null,
    scriptText: "",
    scheduleTime: "",
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextStep = () => {
    window.scrollTo(0, 0);
    setStep((prev) => prev + 1);
  };
  const prevStep = () => {
    window.scrollTo(0, 0);
    setStep((prev) => prev - 1);
  };

  const steps = [
    { title: "Welcome", icon: <FiZap /> },
    { title: "Industry", icon: <FiUsers /> },
    { title: "Team", icon: <FiUsers /> },
    { title: "Channels", icon: <FiMessageSquare /> },
    { title: "Use Case", icon: <FiCalendar /> },
    { title: "Summary", icon: <FiCheck /> },
  ];

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1Industry formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 2:
        return <Step2Team formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <Step3Channel formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 4:
        return <Step4UseCase formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 5:
        return <Step5Summary formData={formData} setFormData={setFormData} prevStep={prevStep} />;
      default:
        return (
          <div className="welcome-screen">
            <div className="welcome-content">
              <div className="premium-header">
                <div className="agent-badge">NEW</div>
                <h1 className="welcome-title">Start Your Smart AI Agent</h1>
                <p className="welcome-subtitle">
                  Launch a 24/7 AI-powered agent that can answer queries, manage leads, book meetings and more.
                </p>
              </div>

              <div className="feature-grid">
                {[ 
                  { 
                    icon: <FiZap className="feature-icon-svg" />, 
                    text: "24/7 Active",
                    desc: "Never miss a customer interaction, works round the clock"
                  },
                  { 
                    icon: <FiMessageSquare className="feature-icon-svg" />, 
                    text: "Answer Questions",
                    desc: "Instant responses to common customer queries"
                  },
                  { 
                    icon: <FiUsers className="feature-icon-svg" />, 
                    text: "Manage Leads",
                    desc: "Automatically capture and qualify new leads"
                  },
                  { 
                    icon: <FiCalendar className="feature-icon-svg" />, 
                    text: "Book Meetings",
                    desc: "Seamless scheduling with your calendar integration"
                  }
                ].map((feature) => (
                  <div key={feature.text} className="feature-card">
                    <div className="feature-icon">{feature.icon}</div>
                    <div className="feature-text">
                      <h3 className="feature-title">{feature.text}</h3>
                      <p className="feature-desc">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="action-section">
                <button onClick={() => setStep(1)} className="primary-btn glow-on-hover">
                  <FiZap className="btn-icon" /> Start Setup
                </button>
                <div className="setup-time">
                  <div className="time-badge">⏱️</div>
                  <span>Setup takes less than 2 minutes</span>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="premium-container">
      {step > 0 && (
        <div className="step-header">
          <button onClick={prevStep} className="back-button">
            <FiChevronLeft /> {isMobile ? '' : 'Back'}
          </button>
          <div className="progress-steps">
            {steps.map((s, index) => (
              <div 
                key={index} 
                className={`step-indicator ${index === step ? 'active' : ''} ${index < step ? 'completed' : ''}`}
                onClick={() => index > 0 && index <= step && setStep(index)}
              >
                <div className="step-icon">
                  {index < step ? <FiCheck /> : s.icon}
                </div>
                {!isMobile && <span className="step-title">{s.title}</span>}
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="step-content">
        {renderStep()}
      </div>
      
      {/* Injected CSS */}
      <style jsx>{`
        .premium-container {
          width: calc(100% - 250px);
          min-height: calc(100vh - 80px);
          margin: 80px 0 0 250px;
          padding: 30px;
          background: #f9fafb;
          box-sizing: border-box;
          position: relative;
          font-family: 'Inter', sans-serif;
        }

        .step-header {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto 30px;
          display: flex;
          align-items: center;
          position: relative;
        }

        .step-content {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          flex: 1;
        }

        .progress-steps {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          gap: 15px;
          margin: 0 20px;
        }

        .step-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          padding: 0 10px;
          min-width: 60px;
        }

        .step-indicator:hover:not(.active) {
          opacity: 0.8;
        }

        .step-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #e5e7eb;
          color: #6b7280;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .step-indicator.completed .step-icon {
          background: #ff6600;
          color: white;
        }

        .step-indicator.active .step-icon {
          background: #ff6600;
          color: white;
          transform: scale(1.1);
        }

        .step-title {
          font-size: 0.85rem;
          font-weight: 600;
          color: #9ca3af;
          text-align: center;
          transition: all 0.3s ease;
        }

        .step-indicator.completed .step-title,
        .step-indicator.active .step-title {
          color: #111827;
        }

        .step-indicator:not(:last-child)::after {
          content: '';
          position: absolute;
          top: 20px;
          left: calc(100% - 10px);
          width: 20px;
          height: 2px;
          background: #e5e7eb;
          z-index: -1;
        }

        .step-indicator.completed:not(:last-child)::after {
          background: #ff6600;
        }

        .welcome-screen {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .welcome-content {
          width: 100%;
          max-width: 1000px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .premium-header {
          background: white;
          border-radius: 20px;
          padding: 40px;
          margin-bottom: 30px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
          text-align: center;
          border: 1px solid rgba(255, 102, 0, 0.1);
          width: 100%;
          position: relative;
        }

        .agent-badge {
          position: absolute;
          top: -10px;
          right: 30px;
          background: #ff6600;
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 700;
          box-shadow: 0 4px 8px rgba(255, 102, 0, 0.2);
        }

        .welcome-title {
          font-size: 2.5rem;
          margin: 0 0 15px 0;
          font-weight: 700;
          color: #111827;
          line-height: 1.2;
          background: linear-gradient(90deg, #ff6600, #ff8c00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .welcome-subtitle {
          font-size: 1.1rem;
          color: #6b7280;
          margin: 0 auto 20px;
          max-width: 600px;
          font-weight: 500;
          line-height: 1.6;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          width: 100%;
          margin-bottom: 40px;
        }

        .feature-card {
          background: white;
          border-radius: 16px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid rgba(255, 102, 0, 0.1);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.03);
          transition: all 0.3s ease;
          text-align: center;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
          border-color: rgba(255, 102, 0, 0.3);
        }

        .feature-icon {
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 102, 0, 0.05);
          border-radius: 18px;
          margin-bottom: 25px;
        }

        .feature-icon-svg {
          font-size: 2rem;
          color: #ff6600;
        }

        .feature-title {
          margin: 0 0 12px 0;
          font-size: 1.3rem;
          color: #111827;
          font-weight: 700;
        }

        .feature-desc {
          margin: 0;
          font-size: 1rem;
          color: #6b7280;
          line-height: 1.6;
        }

        .action-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          margin-top: 20px;
        }

        .primary-btn {
          background: #ff6600;
          color: white;
          border: none;
          padding: 18px 36px;
          font-size: 1.1rem;
          border-radius: 12px;
          cursor: pointer;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 15px rgba(255, 102, 0, 0.3);
          transition: all 0.3s ease;
          width: 100%;
          max-width: 320px;
          margin-bottom: 25px;
        }

        .primary-btn:hover {
          background: #e65c00;
          transform: translateY(-3px);
          box-shadow: 0 12px 20px rgba(255, 102, 0, 0.4);
        }

        .glow-on-hover:hover {
          box-shadow: 0 0 20px rgba(255, 102, 0, 0.5);
        }

        .btn-icon {
          margin-right: 12px;
          font-size: 1.3rem;
        }

        .back-button {
          background: white;
          border: 1px solid #e5e7eb;
          padding: 10px 18px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.95rem;
          font-weight: 600;
          color: #4b5563;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
          transition: all 0.2s ease;
        }

        .back-button:hover {
          background: #f3f4f6;
          border-color: #d1d5db;
        }

        .setup-time {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.95rem;
          color: #6b7280;
          margin-top: 15px;
        }

        .time-badge {
          background: #f3f4f6;
          border-radius: 50%;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
        }

        /* Mobile Responsive Styles */
        @media (max-width: 1024px) {
          .premium-container {
            width: 100%;
            margin-left: 0;
            padding: 20px;
            margin-top: 120px;
          }
        }

        @media (max-width: 768px) {
          .premium-container {
            margin-top: 120px;
            padding: 15px;
          }
          
          .feature-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .welcome-title {
            font-size: 1.8rem;
          }
          
          .welcome-subtitle {
            font-size: 1rem;
          }
          
          .step-indicator {
            min-width: 40px;
          }
          
          .step-icon {
            width: 32px;
            height: 32px;
          }
          
          .step-title {
            font-size: 0.75rem;
          }
          
          .back-button {
            padding: 8px 14px;
            font-size: 0.85rem;
          }
          
          .feature-card {
            padding: 20px;
          }
        }

        @media (max-width: 480px) {
          .premium-container {
            margin-top: 120px;
            padding-top: 15px;
          }
          
          .premium-header {
            padding: 30px 20px;
            margin-top: 10px;
          }
          
          .welcome-title {
            font-size: 1.5rem;
          }
          
          .feature-grid {
            grid-template-columns: 1fr;
          }
          
          .feature-icon {
            width: 60px;
            height: 60px;
            margin-bottom: 20px;
          }
          
          .feature-title {
            font-size: 1.1rem;
          }
          
          .primary-btn {
            padding: 16px 24px;
            font-size: 1rem;
          }
          
          .progress-steps {
            gap: 8px;
            margin: 0 10px;
          }
          
          .step-indicator {
            min-width: 30px;
            padding: 0 5px;
          }
          
          .step-indicator:not(:last-child)::after {
            width: 10px;
            left: calc(100% - 5px);
          }

          .agent-badge {
            right: 20px;
            padding: 4px 12px;
            font-size: 0.7rem;
          }
        }

        /* Animation for step transitions */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .step-content > * {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default StartAgent;