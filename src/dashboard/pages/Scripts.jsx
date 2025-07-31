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
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          marginBottom: '30px'
        }}>
          <BsFileText size={28} color="#FF6600" />
          <h1 style={{
            color: '#FF6600',
            fontSize: isMobile ? '22px' : '28px',
            fontWeight: '700',
            margin: 0,
            letterSpacing: '0.5px'
          }}>
            Call Scripts
          </h1>
        </div>

        {/* Info Box */}
        <div style={{
          backgroundColor: 'rgba(255, 102, 0, 0.05)',
          padding: isMobile ? '20px' : '30px',
          borderRadius: '12px',
          border: '1px solid rgba(255, 102, 0, 0.2)',
          boxShadow: '0 6px 20px rgba(0,0,0,0.05)',
          marginBottom: '40px',
        }}>
          <p style={{
            color: '#FF6600',
            fontSize: isMobile ? '14px' : '16px',
            margin: 0,
            lineHeight: '1.6'
          }}>
            Download and manage the AI agent's script files for calls and follow-ups below.
          </p>
        </div>

        {/* Script List */}
        <div style={{
          backgroundColor: '#fff',
          border: '1px solid rgba(255, 102, 0, 0.15)',
          borderRadius: '12px',
          padding: isMobile ? '16px' : '24px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.04)'
        }}>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'grid',
            gap: '14px'
          }}>
            {scriptFiles.map((script, i) => (
              <li key={i} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: isMobile ? '12px' : '18px',
                backgroundColor: 'rgba(255, 102, 0, 0.03)',
                borderRadius: '10px',
                border: '1px solid rgba(255, 102, 0, 0.1)',
                transition: 'all 0.2s ease',
                '&:hover': {
                  borderColor: 'rgba(255, 102, 0, 0.3)',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
                }
              }}>
                <div>
                  <h4 style={{
                    color: '#FF6600',
                    margin: '0 0 6px 0',
                    fontSize: isMobile ? '15px' : '16px',
                    fontWeight: 600
                  }}>{script.name}</h4>
                  <p style={{
                    color: '#666',
                    margin: 0,
                    fontSize: isMobile ? '13px' : '14px'
                  }}>Last updated: {new Date().toLocaleDateString()}</p>
                </div>
                <a
                  href={script.file}
                  download
                  style={{
                    backgroundColor: '#FF6600',
                    color: '#fff',
                    padding: isMobile ? '8px 12px' : '8px 16px',
                    borderRadius: '6px',
                    fontSize: isMobile ? '13px' : '14px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      backgroundColor: '#e65c00',
                      transform: 'translateY(-1px)'
                    }
                  }}
                >
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

export default ScriptsPage;

// CSS Styles (same as StartAgent component)
const styles = `
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

.step-content {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  flex: 1;
}

/* Mobile Responsive Styles */
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
}

@media (max-width: 480px) {
  .premium-container {
    padding: 15px;
  }
}

/* Animation for content transitions */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.step-content > * {
  animation: fadeIn 0.3s ease-out forwards;
}
`;

// Inject styles
const styleTag = document.createElement('style');
styleTag.innerHTML = styles;
document.head.appendChild(styleTag);