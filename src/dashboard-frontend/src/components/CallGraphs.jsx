import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { FiBarChart2 } from 'react-icons/fi';

const data = [
  { day: 'Mon', calls: 842 },
  { day: 'Tue', calls: 1043 },
  { day: 'Wed', calls: 932 },
  { day: 'Thu', calls: 1254 },
  { day: 'Fri', calls: 876 },
  { day: 'Sat', calls: 543 },
  { day: 'Sun', calls: 321 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: '#ffffff',
        border: '1px solid #10B98122',
        borderRadius: '8px',
        padding: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <p style={{ 
          color: '#0EA5E9', 
          fontWeight: '600', 
          marginBottom: '8px'
        }}>
          {label}
        </p>
        <p style={{ 
          color: '#111827',
          fontSize: '14px'
        }}>
          Calls: <strong style={{color: '#10B981'}}>{payload[0].value.toLocaleString()}</strong>
        </p>
      </div>
    );
  }
  return null;
};

const CallGraphs = () => (
  <div style={{ 
    backgroundColor: '#ffffff',
    padding: '25px', 
    borderRadius: '16px',
    boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
    height: '100%',
    border: '1px solid #E5E7EB',
    transition: 'transform 0.3s ease',
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
        color: '#0EA5E9', 
        fontSize: '18px',
        fontWeight: '600',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <FiBarChart2 />
        Calls Triggered (Weekly)
      </h3>
      <select style={{
        backgroundColor: '#F9FAFB',
        color: '#1F2937',
        border: '1px solid #D1D5DB',
        borderRadius: '8px',
        padding: '8px 12px',
        fontSize: '13px',
        cursor: 'pointer',
        transition: 'all 0.2s ease'
      }}>
        <option>Last 7 Days</option>
        <option>Last 30 Days</option>
        <option>This Month</option>
      </select>
    </div>

    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis 
          dataKey="day" 
          stroke="#6B7280"
          tickLine={false}
          axisLine={false}
        />
        <YAxis 
          stroke="#6B7280" 
          tickLine={false}
          axisLine={false}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar 
          dataKey="calls" 
          radius={[6, 6, 0, 0]} 
          animationDuration={1500}
          fill="#10B981"
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default CallGraphs;
