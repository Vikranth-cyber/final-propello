import React from 'react';
import { FiActivity, FiTrendingUp, FiClock } from 'react-icons/fi';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const botData = {
  bot: 'PROPELLO AI',
  metrics: {
    dialed: 2450,
    connected: 1987,
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

// Color palette
const colors = {
  primary: '#6366F1',  // Vibrant purple
  secondary: '#10B981', // Emerald green
  accent: '#3B82F6',   // Royal blue
  background: '#F9FAFB',
  text: '#1F2937',
  lightText: '#6B7280'
};

const BotPerformance = () => (
  <div style={{
    padding: '16px',
    maxWidth: '1000px',
    margin: '0 auto',
    backgroundColor: colors.background
  }}>
    {/* Performance Cards */}
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '12px',
      padding: '20px',
      marginBottom: '20px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
      border: `1px solid ${colors.primary}20`
    }}>
      <h3 style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontSize: '18px',
        marginBottom: '20px',
        color: colors.primary,
        fontWeight: '600'
      }}>
        <FiActivity style={{ color: colors.primary }} /> Performance Metrics
      </h3>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px'
      }}>
        {[
          { label: 'Dialed', value: botData.metrics.dialed, color: colors.primary },
          { label: 'Connected', value: botData.metrics.connected, color: colors.secondary },
          { label: 'Conversion', value: `${botData.metrics.conversion}%`, color: '#F59E0B' },
          { label: 'Avg Duration', value: botData.metrics.avgDuration, color: colors.accent }
        ].map((item, idx) => (
          <div key={idx} style={{
            textAlign: 'left',
            padding: '16px',
            borderRadius: '8px',
            backgroundColor: `${item.color}08`,
            borderLeft: `4px solid ${item.color}`
          }}>
            <p style={{
              color: colors.lightText,
              fontSize: '14px',
              marginBottom: '8px'
            }}>{item.label}</p>
            <p style={{
              color: colors.text,
              fontSize: '24px',
              fontWeight: '700',
              margin: 0
            }}>
              {item.label === 'Avg Duration' ? (
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FiClock style={{ color: colors.accent }} /> {item.value}
                </span>
              ) : item.value}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Trend Chart */}
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
      border: `1px solid ${colors.secondary}20`
    }}>
      <h3 style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontSize: '18px',
        marginBottom: '20px',
        color: colors.secondary,
        fontWeight: '600'
      }}>
        <FiTrendingUp style={{ color: colors.secondary }} /> Weekly Trend
      </h3>
      
      <div style={{ height: '250px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={botData.trend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis 
              dataKey="week" 
              stroke={colors.lightText}
              tick={{ fill: colors.lightText }}
            />
            <YAxis 
              stroke={colors.lightText}
              tick={{ fill: colors.lightText }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#fff',
                borderRadius: '8px',
                border: `1px solid ${colors.primary}20`,
                boxShadow: `0 2px 12px ${colors.primary}10`
              }}
            />
            <Line 
              type="monotone" 
              dataKey="dialed" 
              stroke={colors.primary}
              strokeWidth={2} 
              dot={{ 
                r: 4,
                stroke: colors.primary,
                fill: '#fff',
                strokeWidth: 2
              }} 
              activeDot={{ 
                r: 6,
                stroke: colors.primary,
                fill: '#fff',
                strokeWidth: 2
              }}
            />
            <Line 
              type="monotone" 
              dataKey="connected" 
              stroke={colors.secondary}
              strokeWidth={2} 
              dot={{ 
                r: 4,
                stroke: colors.secondary,
                fill: '#fff',
                strokeWidth: 2
              }}
              activeDot={{ 
                r: 6,
                stroke: colors.secondary,
                fill: '#fff',
                strokeWidth: 2
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

export default BotPerformance;