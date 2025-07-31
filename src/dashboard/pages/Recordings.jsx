import React from 'react';
import { BsMic, BsPlayCircle, BsPauseCircle } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';

const dummyRecordings = [
  {
    id: 1,
    leadName: 'Rahul Verma',
    campaign: 'Real Estate',
    date: '2025-06-19',
    duration: '02:32',
    audioUrl: '/recordings/rahul-verma.mp3'
  },
  {
    id: 2,
    leadName: 'Sneha Rao',
    campaign: 'Retail',
    date: '2025-06-18',
    duration: '01:58',
    audioUrl: '/recordings/sneha-rao.mp3'
  },
  {
    id: 3,
    leadName: 'Amit Singh',
    campaign: 'Insurance',
    date: '2025-06-17',
    duration: '03:15',
    audioUrl: '/recordings/amit-singh.mp3'
  }
];

const RecordingsPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [currentlyPlaying, setCurrentlyPlaying] = React.useState(null);

  const handlePlay = (id) => {
    setCurrentlyPlaying(currentlyPlaying === id ? null : id);
  };

  return (
    <div className="premium-container">
      <div className="step-content">
        {/* Page Heading */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          marginBottom: '24px'
        }}>
          <BsMic size={28} color="#FF6600" />
          <h1 style={{
            color: '#FF6600',
            fontSize: isMobile ? '22px' : '28px',
            fontWeight: '700',
            margin: 0,
            letterSpacing: '0.5px'
          }}>
            Call Recordings
          </h1>
        </div>

        {/* Info Box */}
        <div style={{
          backgroundColor: 'rgba(255, 102, 0, 0.05)',
          padding: isMobile ? '16px' : '24px',
          borderRadius: '12px',
          border: '1px solid rgba(255, 102, 0, 0.15)',
          marginBottom: '32px',
          boxShadow: '0 6px 20px rgba(0,0,0,0.05)'
        }}>
          <p style={{
            color: '#FF6600',
            fontSize: isMobile ? '14px' : '15px',
            margin: 0
          }}>
            Listen to voice AI call recordings. Tap the play button to review conversations with leads in retail, real estate, and more.
          </p>
        </div>

        {/* Recordings List */}
        <div style={{
          border: '1px solid rgba(255, 102, 0, 0.15)',
          borderRadius: '12px',
          padding: isMobile ? '14px' : '20px',
          backgroundColor: '#fff',
          boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
        }}>
          {isMobile ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {dummyRecordings.map(recording => (
                <div key={recording.id} style={{
                  borderBottom: '1px solid rgba(255, 102, 0, 0.1)',
                  paddingBottom: '16px'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '8px'
                  }}>
                    <span style={{ fontWeight: '600', color: '#FF6600' }}>{recording.leadName}</span>
                    <span style={{ color: '#666' }}>{recording.date}</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '10px'
                  }}>
                    <span style={{ color: '#555' }}>{recording.campaign}</span>
                    <span style={{ color: '#555' }}>{recording.duration}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button
                      onClick={() => handlePlay(recording.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#FF6600',
                        fontSize: '24px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      {currentlyPlaying === recording.id ? <BsPauseCircle /> : <BsPlayCircle />}
                      <span style={{ fontSize: '14px' }}>
                        {currentlyPlaying === recording.id ? 'Pause' : 'Play'}
                      </span>
                    </button>
                  </div>
                  {currentlyPlaying === recording.id && (
                    <div style={{ marginTop: '10px' }}>
                      <audio controls style={{ width: '100%' }}>
                        <source src={recording.audioUrl} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '900px' }}>
              <thead>
                <tr style={{
                  backgroundColor: 'rgba(255, 102, 0, 0.05)',
                  borderBottom: '2px solid rgba(255, 102, 0, 0.2)'
                }}>
                  <th style={thStyle}>Lead Name</th>
                  <th style={thStyle}>Campaign</th>
                  <th style={thStyle}>Date</th>
                  <th style={thStyle}>Duration</th>
                  <th style={thStyle}>Playback</th>
                </tr>
              </thead>
              <tbody>
                {dummyRecordings.map(recording => (
                  <tr key={recording.id} style={{
                    borderBottom: '1px solid rgba(255, 102, 0, 0.1)',
                  }}>
                    <td style={tdStyle}>{recording.leadName}</td>
                    <td style={tdStyle}>{recording.campaign}</td>
                    <td style={tdStyle}>{recording.date}</td>
                    <td style={tdStyle}>{recording.duration}</td>
                    <td style={tdStyle}>
                      <audio controls style={{ width: '180px' }}>
                        <source src={recording.audioUrl} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

const thStyle = {
  padding: '14px',
  color: '#FF6600',
  textAlign: 'left',
  fontSize: '14px',
  fontWeight: '600',
  letterSpacing: '0.4px'
};

const tdStyle = {
  padding: '14px',
  fontSize: '14px',
  color: '#444'
};

export default RecordingsPage;

// CSS Styles - Updated with proper mobile header spacing
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
    margin-top: 110px; /* Increased to account for mobile header height */
    padding: 15px;
    min-height: calc(100vh - 110px); /* Adjusted to match */
  }
}

@media (max-width: 480px) {
  .premium-container {
    margin-top: 110px;
    padding: 15px 10px;
    min-height: calc(100vh - 110px);
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