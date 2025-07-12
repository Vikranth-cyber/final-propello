import React from 'react';
import { MdOutlineAnalytics } from 'react-icons/md';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useMediaQuery } from 'react-responsive';

const pieData = [
  { name: 'Interested', value: 320 },
  { name: 'Not Interested', value: 210 },
  { name: 'Follow-up', value: 150 },
  { name: 'Not Answered', value: 100 }
];

const COLORS = ['#007acc', '#ff4c4c', '#ffaa00', '#8884d8'];

const barData = [
  { day: 'Mon', leads: 50 },
  { day: 'Tue', leads: 70 },
  { day: 'Wed', leads: 60 },
  { day: 'Thu', leads: 90 },
  { day: 'Fri', leads: 75 },
  { day: 'Sat', leads: 45 },
  { day: 'Sun', leads: 30 }
];

const AnalyticsPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div style={{ 
      padding: isMobile ? '20px' : '40px',
      backgroundColor: '#fff',
      minHeight: '100vh'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        marginBottom: '30px'
      }}>
        <MdOutlineAnalytics size={28} color="#007acc" />
        <h1 style={{
          color: '#007acc',
          fontSize: isMobile ? '22px' : '28px',
          fontWeight: '700',
          margin: 0,
          letterSpacing: '0.5px'
        }}>
          Call Analytics
        </h1>
      </div>

      {/* KPI Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', 
        gap: '20px', 
        marginBottom: '40px' 
      }}>
        {[
          { label: 'Total Calls', value: '1,200' },
          { label: 'Leads Generated', value: '630' },
          { label: 'Positive Responses', value: '320' },
          { label: 'Follow-up Scheduled', value: '150' }
        ].map((stat, i) => (
          <div key={i} style={{
            backgroundColor: '#fff',
            border: '1px solid rgba(0, 180, 255, 0.2)',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            textAlign: 'center'
          }}>
            <p style={{ 
              color: '#007acc',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '8px'
            }}>
              {stat.label}
            </p>
            <h2 style={{ 
              color: '#333',
              fontSize: '24px',
              fontWeight: '700',
              margin: 0
            }}>
              {stat.value}
            </h2>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
        gap: '30px',
        marginBottom: '40px'
      }}>
        {/* Pie Chart */}
        <div style={{
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid rgba(0, 180, 255, 0.2)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{ 
            color: '#007acc',
            marginBottom: '16px',
            fontSize: '18px'
          }}>
            Lead Response Breakdown
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie 
                data={pieData} 
                dataKey="value" 
                outerRadius={80} 
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {pieData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid rgba(0, 180, 255, 0.2)',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div style={{
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid rgba(0, 180, 255, 0.2)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{ 
            color: '#007acc',
            marginBottom: '16px',
            fontSize: '18px'
          }}>
            Daily Leads Generated
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <XAxis 
                dataKey="day" 
                stroke="#666" 
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                stroke="#666" 
                tick={{ fontSize: 12 }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid rgba(0, 180, 255, 0.2)',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
              />
              <Bar 
                dataKey="leads" 
                fill="#007acc" 
                radius={[4, 4, 0, 0]}
                barSize={30}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div style={{
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '12px',
        border: '1px solid rgba(0, 180, 255, 0.2)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
      }}>
        <h3 style={{ 
          color: '#007acc',
          marginBottom: '16px',
          fontSize: '18px'
        }}>
          Recent Call Activity
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr',
          gap: '15px'
        }}>
          {[
            { time: 'Today, 10:30 AM', status: 'Positive', name: 'Rahul Verma' },
            { time: 'Today, 09:15 AM', status: 'Follow-up', name: 'Priya K' },
            { time: 'Yesterday, 4:45 PM', status: 'Negative', name: 'Amit S' }
          ].map((call, i) => (
            <div key={i} style={{
              padding: '15px',
              backgroundColor: 'rgba(0, 180, 255, 0.05)',
              borderRadius: '8px',
              border: '1px solid rgba(0, 180, 255, 0.1)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '8px'
              }}>
                <span style={{ 
                  color: '#666',
                  fontSize: '12px'
                }}>
                  {call.time}
                </span>
                <span style={{ 
                  color: call.status === 'Positive' ? '#007acc' : 
                         call.status === 'Negative' ? '#ff4c4c' : '#ffaa00',
                  fontSize: '12px',
                  fontWeight: '600'
                }}>
                  {call.status}
                </span>
              </div>
              <p style={{ 
                color: '#333',
                margin: 0,
                fontWeight: '500'
              }}>
                {call.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;