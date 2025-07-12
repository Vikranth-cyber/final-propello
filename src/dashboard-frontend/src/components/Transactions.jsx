import React from 'react';
import { FiActivity, FiPhoneOff, FiPhoneCall } from 'react-icons/fi';

const stageData = [
  { id: 1, stage: 'Call Dialed', status: 'Passed', time: 'Today, 10:45 AM', color: '#10B981', icon: <FiPhoneCall /> },
  { id: 2, stage: 'Ringing', status: 'Passed', time: 'Today, 10:45 AM', color: '#3B82F6', icon: <FiActivity /> },
  { id: 3, stage: 'Picked', status: 'Missed', time: 'Today, 10:45 AM', color: '#F59E0B', icon: <FiPhoneOff /> },
  { id: 4, stage: 'Connected', status: 'Failed', time: 'Today, 10:45 AM', color: '#EF4444', icon: <FiPhoneOff /> },
];

const Transactions = () => {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      padding: '25px',
      borderRadius: '16px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      border: '1px solid #E5E7EB',
      height: '100%',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '25px',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        <div style={{ fontSize: '18px', fontWeight: 600, color: '#0EA5E9' }}>Call Disconnection Stages</div>
        <div style={{
          color: '#10B981',
          fontSize: '14px',
          fontWeight: '600',
          cursor: 'pointer'
        }}>
          View Logs
        </div>
      </div>

      {stageData.map(stage => (
        <div key={stage.id} style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 0',
          borderBottom: '1px solid #F3F4F6',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          {/* Icon Box */}
          <div style={{
            width: 42,
            height: 42,
            borderRadius: '10px',
            backgroundColor: `${stage.color}15`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            color: stage.color
          }}>
            {stage.icon}
          </div>

          {/* Stage Details */}
          <div style={{ flex: 1, marginLeft: '15px', minWidth: '180px' }}>
            <div style={{ fontWeight: 600, color: '#111827' }}>{stage.stage}</div>
            <div style={{ fontSize: '13px', color: '#6B7280', marginTop: '4px' }}>{stage.time}</div>
          </div>

          {/* Status */}
          <div style={{
            fontWeight: '700',
            color: stage.color,
            fontSize: '14px',
            marginRight: '15px'
          }}>
            {stage.status}
          </div>

          {/* Optional Action (could be details/logs) */}
          <button style={{
            backgroundColor: 'transparent',
            border: `1px solid ${stage.color}33`,
            color: stage.color,
            fontSize: '13px',
            padding: '6px 12px',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: '0.2s ease'
          }}>
            Investigate
          </button>
        </div>
      ))}
    </div>
  );
};

export default Transactions;
