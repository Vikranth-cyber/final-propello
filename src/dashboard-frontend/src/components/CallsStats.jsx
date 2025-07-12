import React from 'react';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

const CallsStats = () => {
  const stats = [
    { title: 'Site Visits Scheduled', value: 187, change: '+12%', trend: 'up' },
    { title: 'Calls > 1 Min', value: 2785, change: '+15%', trend: 'up' },
    { title: 'Calls < 10 Sec', value: 632, change: '-7%', trend: 'down' },
    { title: 'Positive Sentiment', value: 2874, change: '+2%', trend: 'up' },
  ];

  const getTrendColor = (trend) =>
    trend === 'up' ? '#10B981' : '#F43F5E'; // Green for up, red for down

  return (
    <div style={{ paddingTop: '20px' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '20px',
        marginBottom: '30px'
      }}>
        {stats.map((s, i) => (
          <div
            key={i}
            style={{
              backgroundColor: '#F9FAFB',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              border: `1px solid ${getTrendColor(s.trend)}22`,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
          >
            <h3 style={{
              color: '#0EA5E9', // violet for title
              fontSize: '14px',
              marginBottom: '10px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              {s.title}
            </h3>
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              <p style={{
                fontSize: '24px',
                fontWeight: '700',
                margin: 0,
                marginRight: '10px',
                color: '#1F2937'
              }}>
                {s.value.toLocaleString()}
              </p>
              <span style={{
                color: getTrendColor(s.trend),
                fontSize: '13px',
                marginBottom: '4px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontWeight: '500'
              }}>
                {s.trend === 'up' ? <FiArrowUp size={14} /> : <FiArrowDown size={14} />}
                {s.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CallsStats;
