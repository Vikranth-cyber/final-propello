import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid, Legend, Cell } from 'recharts';
import { FiBarChart2, FiActivity, FiTrendingUp, FiClock, FiArrowUp, FiArrowDown, FiPlay, FiDownload, FiMoreVertical } from 'react-icons/fi';
import { useMediaQuery } from 'react-responsive';

const Analytics = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  return (
    <div className="analytics-container">
      <div className="analytics-content">
        <h1 className="analytics-title">Call Analytics Dashboard</h1>

        <StatCards isMobile={isMobile} />
        <CallsStats isMobile={isMobile} />
        <BotPerformance isMobile={isMobile} />

        <div className="graphs-container">
          <CallGraphs isMobile={isMobile} />
        </div>

        <SummaryTable isMobile={isMobile} />
      </div>
    </div>
  );
};

const StatCards = ({ isMobile }) => {
  const cards = [
    { 
      title: 'Calls Triggered', 
      value: '5,240', 
      change: '+4.1%', 
      color: '#3f5efb',
      icon: <FiBarChart2 size={20} />,
      trend: 'up'
    },
    { 
      title: 'Calls Connected', 
      value: '3,820', 
      change: '+3.8%', 
      color: '#10B981',
      icon: <FiActivity size={20} />,
      trend: 'up'
    },
    { 
      title: 'Calls Failed', 
      value: '645', 
      change: '-1.2%', 
      color: '#EF4444',
      icon: <FiTrendingUp size={20} />,
      trend: 'down'
    },
    { 
      title: 'Follow-ups Scheduled', 
      value: '194', 
      change: '+6.7%', 
      color: '#fc466b',
      icon: <FiClock size={20} />,
      trend: 'up'
    },
  ];

  return (
    <div className="stat-cards-container">
      <div className="stat-cards-grid">
        {cards.map((card, index) => (
          <div key={index} className="stat-card">
            <div className="stat-card-accent" style={{ backgroundColor: card.color }} />
            <div className="stat-card-content">
              <div className="stat-card-header">
                <div>
                  <h3 className="stat-card-title">{card.title}</h3>
                  <p className="stat-card-value">{card.value}</p>
                </div>
                <div className="stat-card-icon" style={{ backgroundColor: `${card.color}15`, color: card.color }}>
                  {card.icon}
                </div>
              </div>
              <div className="stat-card-trend">
                <span className={`trend-${card.trend}`}>
                  {card.trend === 'up' ? <FiArrowUp size={14} /> : <FiArrowDown size={14} />}
                  {card.change}
                </span>
                <span className="trend-label">vs last month</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CallGraphs = ({ isMobile }) => {
  const data = [
    { day: 'Mon', calls: 842, fill: '#3f5efb' },
    { day: 'Tue', calls: 1043, fill: '#5a6df5' },
    { day: 'Wed', calls: 932, fill: '#3f5efb' },
    { day: 'Thu', calls: 1254, fill: '#5a6df5' },
    { day: 'Fri', calls: 876, fill: '#3f5efb' },
    { day: 'Sat', calls: 543, fill: '#5a6df5' },
    { day: 'Sun', calls: 321, fill: '#3f5efb' },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="tooltip-label">{label}</p>
          <p className="tooltip-value">
            Calls: <strong>{payload[0].value.toLocaleString()}</strong>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="graph-card">
      <div className="graph-card-header">
        <h3 className="graph-title">
          <FiBarChart2 size={18} />
          Calls Triggered (Weekly)
        </h3>
        <select className="graph-select">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>This Month</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={isMobile ? 220 : 280}>
        <BarChart data={data}>
          <XAxis 
            dataKey="day" 
            stroke="#6B7280"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            stroke="#6B7280" 
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar 
            dataKey="calls" 
            radius={[4, 4, 0, 0]} 
            animationDuration={1500}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const CallsStats = ({ isMobile }) => {
  const stats = [
    { title: 'Site Visits Scheduled', value: 187, change: '+12%', trend: 'up' },
    { title: 'Calls > 1 Min', value: 2785, change: '+15%', trend: 'up' },
    { title: 'Calls < 10 Sec', value: 632, change: '-7%', trend: 'down' },
    { title: 'Positive Sentiment', value: 2874, change: '+2%', trend: 'up' },
  ];

  return (
    <div className="stats-container">
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div key={i} className="stat-item">
            <h3 className="stat-item-title">{s.title}</h3>
            <div className="stat-item-value-container">
              <p className="stat-item-value">{s.value.toLocaleString()}</p>
              <span className={`stat-item-change trend-${s.trend}`}>
                {s.trend === 'up' ? <FiArrowUp size={12} /> : <FiArrowDown size={12} />}
                {s.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const BotPerformance = ({ isMobile }) => {
  const botData = {
    bot: 'PROPELLO AI',
    metrics: {
      dialed: 2450,
      connected: 1987,
      pickup: 1823,
      positive: 1421,
      scheduled: 487,
      over1min: 1543,
      conversion: 68.2,
      avgDuration: '2:45'
    },
    trend: [
      { week: 'W1', dialed: 520, connected: 410 },
      { week: 'W2', dialed: 610, connected: 495 },
      { week: 'W3', dialed: 680, connected: 562 },
      { week: 'W4', dialed: 640, connected: 520 }
    ]
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="tooltip-label">{label}</p>
          {payload.map((entry, index) => (
            <p key={`item-${index}`} className="tooltip-value">
              <span className="tooltip-dot" style={{ backgroundColor: entry.color }} />
              {entry.name}: <strong>{entry.value.toLocaleString()}</strong>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bot-performance-container">
      <div className="bot-performance-card">
        <h3 className="bot-performance-title">
          <FiActivity size={18} /> {botData.bot} Performance
        </h3>
        <div className="bot-metrics-grid">
          {['dialed', 'connected', 'conversion', 'avgDuration'].map((key, idx) => (
            <div key={idx} className="bot-metric">
              <p className="bot-metric-label">
                {key === 'avgDuration' ? 'Avg Duration' : key.replace(/([A-Z])/g, ' $1').trim()}
              </p>
              <p className="bot-metric-value">
                {key === 'avgDuration' ? <><FiClock size={14} /> {botData.metrics[key]}</> : `${botData.metrics[key]}${key === 'conversion' ? '%' : ''}`}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="trend-card">
        <div className="trend-card-header">
          <h3 className="trend-title">
            <FiTrendingUp size={18} /> Weekly Performance Trend
          </h3>
          <select className="trend-select">
            <option>Last 4 Weeks</option>
            <option>Last 8 Weeks</option>
            <option>Quarterly</option>
          </select>
        </div>
        <div className="trend-chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={botData.trend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis 
                dataKey="week" 
                stroke="#6B7280" 
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                stroke="#6B7280" 
                tick={{ fontSize: 12 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="dialed" 
                name="Dialed Calls" 
                stroke="#3f5efb" 
                strokeWidth={2} 
                dot={{ r: 4, stroke: '#3f5efb', strokeWidth: 2, fill: '#fff' }} 
              />
              <Line 
                type="monotone" 
                dataKey="connected" 
                name="Connected Calls" 
                stroke="#fc466b" 
                strokeWidth={2} 
                dot={{ r: 4, stroke: '#fc466b', strokeWidth: 2, fill: '#fff' }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const SummaryTable = ({ isMobile }) => {
  const data = [
    { id: 1, type: 'Call', duration: '1:12', result: 'Connected', timestamp: 'Today, 10:32 AM', sentiment: 'Positive' },
    { id: 2, type: 'Call', duration: '0:09', result: 'Hangup', timestamp: 'Today, 10:29 AM', sentiment: 'Negative' },
    { id: 3, type: 'Call', duration: '2:00', result: 'Voicemail', timestamp: 'Today, 10:25 AM', sentiment: 'Neutral' },
    { id: 4, type: 'Call', duration: '1:45', result: 'Connected', timestamp: 'Today, 10:18 AM', sentiment: 'Positive' },
    { id: 5, type: 'Call', duration: '0:45', result: 'Connected', timestamp: 'Today, 10:12 AM', sentiment: 'Neutral' },
  ];

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'Positive': return '#10B981';
      case 'Negative': return '#EF4444';
      default: return '#F59E0B';
    }
  };

  return (
    <div className="summary-table-container">
      <div className="table-header">
        <h3 className="table-title">Recent Call Summary</h3>
        <button className="view-all-btn">
          View All Calls
        </button>
      </div>
      <div className="table-scroll-container">
        <table className="summary-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Duration</th>
              <th>Result</th>
              <th>Sentiment</th>
              <th>Timestamp</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.type}</td>
                <td>{row.duration}</td>
                <td>{row.result}</td>
                <td style={{ color: getSentimentColor(row.sentiment) }}>
                  {row.sentiment}
                </td>
                <td>{row.timestamp}</td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn" title="Play Recording">
                      <FiPlay />
                    </button>
                    <button className="action-btn" title="Download Recording">
                      <FiDownload />
                    </button>
                    <button className="action-btn" title="More Options">
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

const styles = `
.analytics-container {
  padding: 24px;
  background-color: #f9fafb;
  min-height: calc(100vh - 64px);
  margin-left: 250px;
  margin-top: 64px;
  width: calc(100% - 250px);
  transition: all 0.3s ease;
}

.analytics-content {
  max-width: 1400px;
  margin: 0 auto;
}

.analytics-title {
  color: #111827;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 32px;
  position: relative;
  padding-left: 16px;
  padding-top: ${window.innerWidth <= 768 ? '20px' : '0'};
}

.analytics-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 24px;
  width: 4px;
  background: linear-gradient(to bottom, #3f5efb, #fc466b);
  border-radius: 2px;
}

/* Stat Cards */
.stat-cards-container {
  margin-bottom: 32px;
}

.stat-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.stat-card {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid #e5e7eb;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.stat-card-accent {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
}

.stat-card-content {
  padding: 20px;
}

.stat-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
}

.stat-card-title {
  color: #6b7280;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
  text-transform: uppercase;
}

.stat-card-value {
  font-size: 24px;
  font-weight: 700;
  color: #111827;
  margin: 0;
  line-height: 1.2;
}

.stat-card-icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.stat-card:hover .stat-card-icon {
  transform: scale(1.1);
}

.stat-card-trend {
  display: flex;
  align-items: center;
  margin-top: 12px;
}

.trend-up {
  color: #10B981;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
}

.trend-down {
  color: #EF4444;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
}

.trend-label {
  color: #9ca3af;
  font-size: 12px;
  margin-left: 6px;
}

/* Graph Card */
.graphs-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-bottom: 24px;
}

.graph-card {
  background: #ffffff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
}

.graph-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.graph-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.graph-title {
  color: #3f5efb;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
}

.graph-select {
  background-color: rgba(63, 94, 251, 0.1);
  color: #3f5efb;
  border: 1px solid rgba(63, 94, 251, 0.3);
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
}

.graph-select:hover {
  background-color: rgba(63, 94, 251, 0.2);
}

.custom-tooltip {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.tooltip-label {
  color: #3f5efb;
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 14px;
}

.tooltip-value {
  color: #111827;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.tooltip-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 6px;
}

/* Stats Grid */
.stats-container {
  margin-bottom: 32px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.stat-item {
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.stat-item-title {
  color: #3f5efb;
  font-size: 14px;
  margin-bottom: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.stat-item-value-container {
  display: flex;
  align-items: flex-end;
}

.stat-item-value {
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  margin-right: 8px;
  color: #111827;
}

.stat-item-change {
  font-size: 14px;
  margin-bottom: 3px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 500;
}

/* Bot Performance */
.bot-performance-container {
  margin-bottom: 32px;
}

.bot-performance-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  margin-bottom: 24px;
  transition: all 0.3s ease;
}

.bot-performance-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.bot-performance-title {
  color: #3f5efb;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.bot-metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.bot-metric {
  padding: 12px;
  border-radius: 8px;
  background: #f9fafb;
}

.bot-metric-label {
  color: #6b7280;
  font-size: 14px;
  margin-bottom: 8px;
  text-transform: capitalize;
}

.bot-metric-value {
  color: #111827;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
}

.trend-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
}

.trend-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.trend-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.trend-title {
  color: #3f5efb;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
}

.trend-select {
  background-color: rgba(63, 94, 251, 0.1);
  color: #3f5efb;
  border: 1px solid rgba(63, 94, 251, 0.3);
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
}

.trend-select:hover {
  background-color: rgba(63, 94, 251, 0.2);
}

.trend-chart-container {
  height: 280px;
}

/* Summary Table */
.summary-table-container {
  background: #ffffff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
}

.summary-table-container:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.table-title {
  color: #3f5efb;
  font-size: 16px;
  font-weight: 600;
}

.view-all-btn {
  background-color: rgba(63, 94, 251, 0.1);
  color: #3f5efb;
  border: 1px solid rgba(63, 94, 251, 0.3);
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
}

.view-all-btn:hover {
  background-color: rgba(63, 94, 251, 0.2);
}

.table-scroll-container {
  overflow-x: auto;
}

.summary-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 800px;
}

.summary-table th {
  text-align: left;
  background-color: #f9fafb;
  color: #374151;
  font-size: 14px;
  font-weight: 600;
  padding: 12px 16px;
  white-space: nowrap;
}

.summary-table td {
  padding: 12px 16px;
  font-size: 14px;
  color: #4b5563;
  border-bottom: 1px solid #f3f4f6;
  white-space: nowrap;
}

.summary-table tr:hover {
  background-color: #f9fafb;
}

.action-buttons {
  display: flex;
  gap: 8px;
}

.action-btn {
  background-color: transparent;
  border: none;
  color: #3f5efb;
  cursor: pointer;
  font-size: 16px;
  padding: 6px;
  border-radius: 6px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.action-btn:hover {
  background-color: rgba(63, 94, 251, 0.1);
  transform: scale(1.1);
}

/* Responsive Styles */
@media (max-width: 1280px) {
  .analytics-container {
    margin-left: 220px;
    width: calc(100% - 220px);
  }
}

@media (max-width: 1024px) {
  .analytics-container {
    margin-left: 0;
    width: 100%;
    padding-top: 80px;
  }
  
  .stat-cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .bot-metrics-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .analytics-container {
    padding: 16px;
    padding-top: 80px;
  }
  
  .analytics-title {
    font-size: 20px;
    margin-bottom: 24px;
    padding-top: 0;
  }
  
  .stat-cards-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .bot-metrics-grid {
    grid-template-columns: 1fr;
  }
  
  .graph-card-header, 
  .trend-card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  
  .graph-select,
  .trend-select,
  .view-all-btn {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .stat-card-content {
    padding: 16px;
  }
  
  .stat-card-value {
    font-size: 20px;
  }
  
  .trend-chart-container {
    height: 220px;
  }

  .analytics-title {
    font-size: 18px;
    margin-bottom: 20px;
  }
}
`;

// Inject styles
const styleTag = document.createElement('style');
styleTag.innerHTML = styles;
document.head.appendChild(styleTag);

export default Analytics;