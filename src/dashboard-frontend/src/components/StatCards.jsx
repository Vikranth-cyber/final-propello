import React from 'react';

const StatCards = () => {
  const cards = [
    { 
      title: 'Calls Triggered', 
      value: '5,240', 
      change: '+4.1%', 
      color: '#0EA5E9',  // Sky Blue
      icon: '📞',
      trend: 'up'
    },
    { 
      title: 'Calls Connected', 
      value: '3,820', 
      change: '+3.8%', 
      color: '#10B981',  // Green
      icon: '✅',
      trend: 'up'
    },
    { 
      title: 'Calls Failed', 
      value: '645', 
      change: '-1.2%', 
      color: '#F43F5E',  // Red
      icon: '❌',
      trend: 'down'
    },
    { 
      title: 'Follow-ups Scheduled', 
      value: '194', 
      change: '+6.7%', 
      color: '#8B5CF6',  // Violet
      icon: '📅',
      trend: 'up'
    },
  ];

  return (
    <div style={{ paddingTop: '20px' }}>
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '25px',
        marginBottom: '30px'
      }}>
        {cards.map((card, index) => (
          <div 
            key={index} 
            style={{ 
              background: '#ffffff',
              padding: '25px',
              borderRadius: '16px',
              border: `1px solid ${card.color}30`,
              boxShadow: `0 6px 16px ${card.color}15`,
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Top Highlight Line */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '4px',
              background: `linear-gradient(90deg, ${card.color}, transparent)`
            }} />

            <div style={{ 
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '20px'
            }}>
              <div>
                <h3 style={{ 
                  color: '#0EA5E9',
                  fontSize: '14px',
                  fontWeight: '500',
                  letterSpacing: '0.5px',
                  marginBottom: '8px',
                  textTransform: 'uppercase'
                }}>
                  {card.title}
                </h3>
                <p style={{ 
                  fontSize: '28px',
                  fontWeight: '700',
                  color: card.color,
                  margin: 0,
                  lineHeight: '1.2',
                }}>
                  {card.value}
                </p>
              </div>

              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: `${card.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                color: card.color
              }}>
                {card.icon}
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '15px'
            }}>
              <span style={{
                color: card.trend === 'up' ? '#10B981' : '#F43F5E',
                fontSize: '13px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center'
              }}>
                {card.trend === 'up' ? '↑' : '↓'} {card.change}
              </span>
              <span style={{
                color: '#9CA3AF',
                fontSize: '12px',
                marginLeft: '8px'
              }}>
                vs last month
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatCards;
