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
    <div style={{ 
      padding: isMobile ? '20px' : '40px',
      backgroundColor: '#fff',
      minHeight: '100vh'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        marginBottom: '30px'
      }}>
        <BsFileText size={28} color="#007acc" />
        <h1 style={{
          color: '#007acc',
          fontSize: isMobile ? '22px' : '28px',
          fontWeight: '700',
          margin: 0,
          letterSpacing: '0.5px'
        }}>
          Call Scripts
        </h1>
      </div>

      <div style={{
        backgroundColor: 'rgba(0, 180, 255, 0.05)',
        padding: isMobile ? '20px' : '30px',
        borderRadius: '12px',
        border: '1px solid rgba(0, 180, 255, 0.2)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        marginBottom: '40px',
        backdropFilter: 'blur(5px)'
      }}>
        <p style={{ 
          color: '#007acc',
          fontSize: isMobile ? '14px' : '16px',
          margin: 0,
          lineHeight: '1.6'
        }}>
          Download and manage your AI Bot's call scripts below.
        </p>
      </div>

      <div style={{
        backgroundColor: '#fff',
        border: '1px solid rgba(0, 180, 255, 0.2)',
        borderRadius: '12px',
        padding: isMobile ? '16px' : '24px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
      }}>
        <ul style={{ 
          listStyle: 'none', 
          padding: 0, 
          margin: 0,
          display: 'grid',
          gap: '12px'
        }}>
          {scriptFiles.map((script, i) => (
            <li key={i} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: isMobile ? '12px' : '16px',
              backgroundColor: 'rgba(0, 180, 255, 0.03)',
              borderRadius: '8px',
              border: '1px solid rgba(0, 180, 255, 0.1)',
              transition: 'all 0.2s ease',
              ':hover': {
                backgroundColor: 'rgba(0, 180, 255, 0.08)'
              }
            }}>
              <div>
                <h4 style={{ 
                  color: '#007acc',
                  margin: '0 0 4px 0',
                  fontSize: '16px'
                }}>{script.name}</h4>
                <p style={{ 
                  color: '#666',
                  margin: 0,
                  fontSize: '14px'
                }}>Last updated: {new Date().toLocaleDateString()}</p>
              </div>
              <a
                href={script.file}
                download
                style={{
                  backgroundColor: '#007acc',
                  color: '#fff',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s ease',
                  ':hover': {
                    backgroundColor: '#0066b3',
                    transform: 'translateY(-2px)'
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
  );
};

export default ScriptsPage;