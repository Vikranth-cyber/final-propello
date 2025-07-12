import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { FiActivity, FiTrendingUp, FiClock } from 'react-icons/fi';

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

const COLORS = ['#10B981', '#F59E0B', '#3B82F6', '#EF4444'];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
        <p style={{ color: '#3B82F6', fontWeight: '600', marginBottom: '8px' }}>{label}</p>
        {payload.map((entry, index) => (
          <p key={`item-${index}`} style={{ color: '#111827', fontSize: '13px' }}>
            <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: entry.color, marginRight: '6px' }}></span>
            {entry.name}: <strong>{entry.value.toLocaleString()}</strong>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const BotPerformance = () => (
  <div style={{ marginBottom: '40px' }}>
    {/* Performance Overview Card */}
    <div style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '25px', border: '1px solid #E5E7EB', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
      <h3 style={{ color: '#3B82F6', fontSize: '20px', fontWeight: '600', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <FiActivity style={{ color: '#3B82F6' }} /> {botData.bot} Performance
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        {['dialed', 'connected', 'conversion', 'avgDuration'].map((key, idx) => (
          <div key={idx}>
            <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '6px' }}>{key === 'avgDuration' ? 'Avg Duration' : key.charAt(0).toUpperCase() + key.slice(1)}</p>
            <p style={{ color: '#111827', fontSize: '22px', fontWeight: '700', display: 'flex', alignItems: 'center' }}>
              {key === 'avgDuration' ? <><FiClock style={{ marginRight: '6px' }} /> {botData.metrics[key]}</> : `${botData.metrics[key]}${key === 'conversion' ? '%' : ''}`}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Trend Chart */}
    <div style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '25px', marginTop: '30px', border: '1px solid #E5E7EB', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
        <h3 style={{ color: '#3B82F6', fontSize: '18px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FiTrendingUp style={{ color: '#3B82F6' }} /> Weekly Performance Trend
        </h3>
        <select style={{ backgroundColor: '#EFF6FF', color: '#1E3A8A', border: '1px solid #BFDBFE', borderRadius: '8px', padding: '8px 12px', fontSize: '13px' }}>
          <option>Last 4 Weeks</option>
          <option>Last 8 Weeks</option>
          <option>Quarterly</option>
        </select>
      </div>
      <div style={{ height: '300px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={botData.trend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="week" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line type="monotone" dataKey="dialed" name="Dialed Calls" stroke={COLORS[0]} strokeWidth={2} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="connected" name="Connected Calls" stroke={COLORS[2]} strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

export default BotPerformance;