import React from 'react';
import { FiPlay, FiVolume2, FiDownload, FiMoreVertical } from 'react-icons/fi';

const SummaryTable = () => {
  const data = [
    { id: 1, type: 'Call', duration: '1:12', result: 'Connected', timestamp: 'Today, 10:32 AM', sentiment: 'Positive' },
    { id: 2, type: 'Call', duration: '0:09', result: 'Hangup', timestamp: 'Today, 10:29 AM', sentiment: 'Negative' },
    { id: 3, type: 'Call', duration: '2:00', result: 'Voicemail', timestamp: 'Today, 10:25 AM', sentiment: 'Neutral' },
    { id: 4, type: 'Call', duration: '1:45', result: 'Connected', timestamp: 'Today, 10:18 AM', sentiment: 'Positive' },
    { id: 5, type: 'Call', duration: '0:45', result: 'Connected', timestamp: 'Today, 10:12 AM', sentiment: 'Neutral' },
  ];

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'Positive': return '#10B981'; // Green
      case 'Negative': return '#EF4444'; // Red
      default: return '#F59E0B'; // Orange
    }
  };

  const actionButtonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#3B82F6', // Blue
    cursor: 'pointer',
    fontSize: '16px',
    padding: '8px',
    borderRadius: '50%',
    transition: 'all 0.2s ease',
  };

  return (
    <div style={{
      backgroundColor: '#ffffff',
      padding: '25px',
      borderRadius: '16px',
      marginBottom: '30px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      border: '1px solid #E5E7EB'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '25px',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <h3 style={{
          color: '#3B82F6', // Blue
          fontSize: '18px',
          fontWeight: '600'
        }}>
          Recent Call Summary
        </h3>
        <button style={{
          backgroundColor: '#E0F2FE',
          color: '#3B82F6',
          border: 'none',
          borderRadius: '6px',
          padding: '8px 16px',
          fontSize: '13px',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}>
          View All Calls
        </button>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          minWidth: '800px'
        }}>
          <thead>
            <tr style={{
              textAlign: 'left',
              backgroundColor: '#F9FAFB',
              color: '#374151',
              fontSize: '14px'
            }}>
              <th style={{ padding: '12px 15px' }}>ID</th>
              <th style={{ padding: '12px 15px' }}>Type</th>
              <th style={{ padding: '12px 15px' }}>Duration</th>
              <th style={{ padding: '12px 15px' }}>Result</th>
              <th style={{ padding: '12px 15px' }}>Sentiment</th>
              <th style={{ padding: '12px 15px' }}>Timestamp</th>
              <th style={{ padding: '12px 15px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr key={row.id} style={{
                borderBottom: '1px solid #F3F4F6',
                transition: 'background 0.2s ease',
                cursor: 'pointer'
              }}>
                <td style={{ padding: '14px 15px' }}>{row.id}</td>
                <td style={{ padding: '14px 15px' }}>{row.type}</td>
                <td style={{ padding: '14px 15px' }}>{row.duration}</td>
                <td style={{ padding: '14px 15px' }}>{row.result}</td>
                <td style={{
                  padding: '14px 15px',
                  color: getSentimentColor(row.sentiment),
                  fontWeight: '500'
                }}>
                  {row.sentiment}
                </td>
                <td style={{ padding: '14px 15px' }}>{row.timestamp}</td>
                <td style={{ padding: '14px 15px' }}>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button style={actionButtonStyle} title="Play Recording">
                      <FiPlay />
                    </button>
                    <button style={actionButtonStyle} title="Download Recording">
                      <FiDownload />
                    </button>
                    <button style={actionButtonStyle} title="More Options">
                      <FiMoreVertical />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SummaryTable;
