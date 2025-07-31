import React from 'react';
import { FiHelpCircle } from 'react-icons/fi';
import { useMediaQuery } from 'react-responsive';

const HelpCenter = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="premium-container">
      <div className="step-content">
        <div className="page-header">
          <FiHelpCircle size={isMobile ? 28 : 32} color="#FF6600" />
          <h1>Help Center</h1>
          <p>Find answers to common questions and get support</p>
        </div>

        <div className="help-content">
          <div className="help-card">
            <div className="help-item">
              <div className="help-question">
                <span className="help-q">Q:</span>
                <span>How do I set up my AI bot?</span>
              </div>
              <div className="help-answer">
                <span className="help-a">A:</span>
                <span>Navigate to <em>Start Agent</em> and follow the guided onboarding steps.</span>
              </div>
            </div>

            <div className="help-item">
              <div className="help-question">
                <span className="help-q">Q:</span>
                <span>How can I download call recordings?</span>
              </div>
              <div className="help-answer">
                <span className="help-a">A:</span>
                <span>Visit the <em>Recordings</em> page and click the play or download buttons.</span>
              </div>
            </div>

            <div className="help-item">
              <div className="help-question">
                <span className="help-q">Q:</span>
                <span>Can I edit my schedule?</span>
              </div>
              <div className="help-answer">
                <span className="help-a">A:</span>
                <span>Yes, go to the <em>Scheduling</em> page to customize call timings and availability.</span>
              </div>
            </div>

            <div className="help-item">
              <div className="help-question">
                <span className="help-q">Q:</span>
                <span>Who do I contact for technical issues?</span>
              </div>
              <div className="help-answer">
                <span className="help-a">A:</span>
                <span>Use the <em>Contact</em> page for support or email us directly at support@example.com.</span>
              </div>
            </div>
          </div>

          <div className="additional-help">
            <h3>Need more help?</h3>
            <p>Our support team is available 24/7 to assist you with any questions or issues.</p>
            <button className="primary-btn">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = `
.premium-container {
  width: calc(100% - 250px);
  min-height: calc(100vh - 80px);
  margin: 80px 0 0 250px;
  padding: 30px;
  background: #ffffff;
  box-sizing: border-box;
  position: relative;
  font-family: 'Inter', sans-serif;
}

.step-content {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  flex: 1;
}

.page-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 40px;
}

.page-header h1 {
  font-size: 2rem;
  color: #1a1a1a;
  margin: 15px 0 10px;
  font-weight: 700;
  background: linear-gradient(90deg, #FF6600, #FF8C00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.page-header p {
  color: #666;
  font-size: 1rem;
  margin: 0;
}

.help-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.help-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 102, 0, 0.1);
}

.help-item {
  padding: 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.help-item:last-child {
  border-bottom: none;
}

.help-question {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #333;
  font-size: 1.05rem;
}

.help-answer {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: #555;
  line-height: 1.6;
}

.help-q {
  color: #FF6600;
  font-weight: 700;
}

.help-a {
  color: #FF6600;
  font-weight: 700;
}

.help-answer em {
  font-style: normal;
  font-weight: 600;
  color: #FF6600;
}

.additional-help {
  background: rgba(255, 102, 0, 0.05);
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  border: 1px solid rgba(255, 102, 0, 0.1);
}

.additional-help h3 {
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 15px;
}

.additional-help p {
  color: #666;
  margin-bottom: 20px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.primary-btn {
  background: #FF6600;
  color: white;
  border: none;
  padding: 14px 30px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.primary-btn:hover {
  background: #E65C00;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 102, 0, 0.3);
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .premium-container {
    width: 100%;
    margin-left: 0;
    padding: 20px;
  }
}

@media (max-width: 768px) {
  .premium-container {
    margin-top: 120px;
    padding: 15px;
  }
  
  .page-header h1 {
    font-size: 1.8rem;
  }
  
  .help-card {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .page-header h1 {
    font-size: 1.5rem;
  }
  
  .help-question,
  .help-answer {
    font-size: 0.95rem;
  }
  
  .additional-help {
    padding: 20px;
  }
}
`;

// Inject styles
const styleTag = document.createElement('style');
styleTag.innerHTML = styles;
document.head.appendChild(styleTag);

export default HelpCenter;