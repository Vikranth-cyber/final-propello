import React from 'react';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

const CallsStats = () => {
  const stats = [
    { title: 'Site Visits Scheduled', value: 187, change: '+12%', trend: 'up' },
    { title: 'Calls > 1 Min', value: 2785, change: '+15%', trend: 'up' },
    { title: 'Calls < 10 Sec', value: 632, change: '-7%', trend: 'down' },
    { title: 'Positive Sentiment', value: 2874, change: '+2%', trend: 'up' },
  ];

  const getTrendColor = (trend) => trend === 'up' ? '#10B981' : '#F43F5E';
  const getTrendBgColor = (trend) => trend === 'up' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(244, 63, 94, 0.1)';

  return (
    <div style={{
      padding: '24px 0',
      width: '100%',
      maxWidth: '1400px',
      margin: '0 auto'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
        gap: '24px',
        padding: '0 16px'
      }}>
        {stats.map((s, i) => (
          <div
            key={i}
            style={{
              backgroundColor: '#FFFFFF',
              padding: '24px',
              borderRadius: '16px',
              boxShadow: '0 4px 24px rgba(14, 165, 233, 0.08)',
              border: `1px solid ${getTrendColor(s.trend)}30`,
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden',
              ':hover': {
                transform: 'translateY(-4px)',
                boxShadow: `0 8px 32px rgba(14, 165, 233, 0.12), 0 0 0 2px ${getTrendColor(s.trend)}20`
              }
            }}
          >
            {/* Trend accent bar */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '4px',
              height: '100%',
              backgroundColor: getTrendColor(s.trend),
              borderTopLeftRadius: '16px',
              borderBottomLeftRadius: '16px'
            }}></div>

            <h3 style={{
              color: '#64748B',
              fontSize: '14px',
              marginBottom: '16px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: getTrendColor(s.trend)
              }}></span>
              {s.title}
            </h3>
            
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
              <p style={{
                fontSize: '28px',
                fontWeight: '700',
                margin: 0,
                color: '#1E293B',
                lineHeight: '1.2'
              }}>
                {s.value.toLocaleString()}
              </p>
              
              <div style={{
                backgroundColor: getTrendBgColor(s.trend),
                padding: '6px 10px',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                minWidth: '70px',
                justifyContent: 'center'
              }}>
                <span style={{
                  color: getTrendColor(s.trend),
                  fontSize: '13px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  {s.trend === 'up' ? (
                    <FiArrowUp size={14} style={{ strokeWidth: '3px' }} />
                  ) : (
                    <FiArrowDown size={14} style={{ strokeWidth: '3px' }} />
                  )}
                  {s.change}
                </span>
              </div>
            </div>

            {/* Subtle animated trend line */}
            <div style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              width: '100%',
              height: '4px',
              background: `linear-gradient(90deg, ${getTrendColor(s.trend)}00 0%, ${getTrendColor(s.trend)}80 50%, ${getTrendColor(s.trend)}00 100%)`,
              opacity: '0.6',
              animation: 'shine 3s infinite'
            }}></div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes shine {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
};

export default CallsStats;