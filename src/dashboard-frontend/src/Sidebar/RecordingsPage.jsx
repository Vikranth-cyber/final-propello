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
    campaign: 'Real Estate',
    date: '2025-06-18',
    duration: '01:58',
    audioUrl: '/recordings/sneha-rao.mp3'
  },
  {
    id: 3,
    leadName: 'Amit Singh',
    campaign: 'Real Estate',
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
    <div style={{ 
      padding: isMobile ? '20px' : '40px',
      backgroundColor: '#fff',
      minHeight: '100vh'
    }}>
      {/* Header Section */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        marginBottom: '30px'
      }}>
        <BsMic size={28} color="#007acc" />
        <h1 style={{
          color: '#007acc',
          fontSize: isMobile ? '22px' : '28px',
          fontWeight: '700',
          margin: 0,
          letterSpacing: '0.5px'
        }}>
          Call Recordings
        </h1>
      </div>

      {/* Info Card */}
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
          lineHeight: '1.6',
          margin: 0
        }}>
          Access and listen to all call recordings made by the bot to potential leads. 
          {!isMobile && ' Click the play button to listen to any recording.'}
        </p>
      </div>

      {/* Recordings Table */}
      <div style={{
        backgroundColor: '#fff',
        border: '1px solid rgba(0, 180, 255, 0.2)',
        borderRadius: '12px',
        padding: isMobile ? '12px' : '20px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
        overflowX: 'auto'
      }}>
        {isMobile ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {dummyRecordings.map(recording => (
              <div key={recording.id} style={{
                borderBottom: '1px solid rgba(0, 180, 255, 0.1)',
                paddingBottom: '16px'
              }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  marginBottom: '8px'
                }}>
                  <span style={{ fontWeight: '600', color: '#007acc' }}>{recording.leadName}</span>
                  <span style={{ color: '#666' }}>{recording.date}</span>
                </div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  marginBottom: '12px'
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
                      color: '#007acc',
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
                  <div style={{ marginTop: '12px' }}>
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
          <table style={{ 
            width: '100%', 
            borderCollapse: 'collapse',
            minWidth: isMobile ? '100%' : '800px'
          }}>
            <thead>
              <tr style={{ 
                backgroundColor: 'rgba(0, 180, 255, 0.05)',
                borderBottom: '2px solid rgba(0, 180, 255, 0.2)'
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
                  borderBottom: '1px solid rgba(0, 180, 255, 0.1)',
                  ':hover': {
                    backgroundColor: 'rgba(0, 180, 255, 0.02)'
                  }
                }}>
                  <td style={tdStyle}>{recording.leadName}</td>
                  <td style={tdStyle}>{recording.campaign}</td>
                  <td style={tdStyle}>{recording.date}</td>
                  <td style={tdStyle}>{recording.duration}</td>
                  <td style={tdStyle}>
                    <audio controls style={{ 
                      width: '180px',
                      height: '40px',
                      '::-webkit-media-controls-panel': {
                        backgroundColor: 'rgba(0, 180, 255, 0.1)'
                      }
                    }}>
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
  );
};

const thStyle = {
  padding: '16px',
  color: '#007acc',
  textAlign: 'left',
  fontSize: '14px',
  fontWeight: '600',
  letterSpacing: '0.5px'
};

const tdStyle = {
  padding: '16px',
  fontSize: '14px',
  color: '#444'
};

export default RecordingsPage;