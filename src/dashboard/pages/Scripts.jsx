import React from 'react';
import { BsFileText, BsDownload } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';

const scriptFiles = [
  { name: 'Real Estate Lead Intro', file: '/scripts/real-estate-intro.txt' },
  { name: 'Follow-up Reminder Call', file: '/scripts/follow-up-reminder.txt' },
  { name: 'Property Site Visit Confirmation', file: '/scripts/site-visit-confirmation.txt' },
  { name: 'Final Call - Lead Nurturing', file: '/scripts/final-call-nurture.txt' }
];

const ScriptsPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className="premium-container">
      <div className="step-content">

        {/* Page Title */}
        <div className="scripts-header">
          <BsFileText size={28} color="#3f5efb" />
          <h1 className="gradient-heading">Call Scripts</h1>
        </div>

        {/* Info Box */}
        <div className="gradient-box">
          <p className="gradient-text">
            Download and manage the AI agent's script files for calls and follow-ups below.
          </p>
        </div>

        {/* Script List */}
        <div className="scripts-card">
          <ul className="scripts-list">
            {scriptFiles.map((script, i) => (
              <li className="script-item" key={i}>
                <div>
                  <h4 className="gradient-heading-small">{script.name}</h4>
                  <p className="script-date">Last updated: {new Date().toLocaleDateString()}</p>
                </div>
                <a href={script.file} download className="gradient-download">
                  <BsDownload size={16} />
                  {!isMobile && 'Download'}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

// CSS injection
const styles = `
.premium-container {
  width: calc(100% - 250px);
  min-height: calc(100vh - 80px);
  margin: 80px 0 0 250px;
  padding: 30px;
  background: #f9fafb;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

.step-content {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.scripts-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
}

.gradient-heading {
  font-size: 28px;
  font-weight: 700;
  background: linear-gradient(135deg, #3f5efb, #fc466b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  letter-spacing: 0.5px;
}

.gradient-heading-small {
  font-size: 16px;
  font-weight: 600;
  background: linear-gradient(135deg, #3f5efb, #fc466b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 0 6px 0;
}

.gradient-box {
  background: linear-gradient(135deg, rgba(63, 94, 251, 0.05), rgba(252, 70, 107, 0.05));
  padding: 30px;
  border-radius: 12px;
  border: 1px solid rgba(63, 94, 251, 0.2);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
  margin-bottom: 40px;
}

.gradient-text {
  font-size: 16px;
  font-weight: 500;
  background: linear-gradient(135deg, #3f5efb, #fc466b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  line-height: 1.6;
}

.scripts-card {
  background-color: #fff;
  border: 1px solid rgba(63, 94, 251, 0.15);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
}

.scripts-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 14px;
}

.script-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px;
  background: linear-gradient(135deg, rgba(63, 94, 251, 0.03), rgba(252, 70, 107, 0.03));
  border-radius: 10px;
  border: 1px solid rgba(63, 94, 251, 0.1);
  transition: all 0.2s ease;
}

.script-item:hover {
  border-color: rgba(63, 94, 251, 0.3);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.script-date {
  color: #666;
  font-size: 14px;
  margin: 0;
}

.gradient-download {
  background: linear-gradient(135deg, #3f5efb, #fc466b);
  color: #fff;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
}

.gradient-download:hover {
  opacity: 0.9;
  transform: translateY(-1px);
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
    margin-top: 60px;
    padding: 15px;
  }

  .gradient-heading {
    font-size: 22px;
  }

  .gradient-box {
    padding: 20px;
  }

  .scripts-card {
    padding: 16px;
  }

  .script-item {
    padding: 12px;
  }

  .gradient-download {
    padding: 8px 12px;
    font-size: 13px;
  }

  .script-date {
    font-size: 13px;
  }

  .gradient-heading-small {
    font-size: 15px;
  }
}
`;

// Inject styles
const styleTag = document.createElement('style');
styleTag.innerHTML = styles;
document.head.appendChild(styleTag);

export default ScriptsPage;
