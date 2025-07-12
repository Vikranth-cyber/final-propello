import React, { useState } from 'react';
import { MdOutlineSchedule } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';

const SchedulingPage = () => {
  const [numbers, setNumbers] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const handleCSVUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (event) {
      const text = event.target.result;
      const rows = text.split('\n').filter((line) => line.trim() !== '');
      const cleanedNumbers = rows.map(line => line.replace(/\D/g, '').trim());
      setNumbers(cleanedNumbers);
    };
    reader.readAsText(file);
  };

  const handleSchedule = () => {
    if (!selectedDate || !selectedTime || numbers.length === 0) {
      alert("Please provide date, time, and upload numbers.");
      return;
    }
    alert(`Scheduled ${numbers.length} calls on ${selectedDate} at ${selectedTime}`);
  };

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
        <MdOutlineSchedule size={28} color="#007acc" />
        <h1 style={{
          color: '#007acc',
          fontSize: isMobile ? '22px' : '28px',
          fontWeight: '700',
          margin: 0,
          letterSpacing: '0.5px'
        }}>
          Call Scheduling
        </h1>
      </div>

      <div style={{
        backgroundColor: 'rgba(0, 180, 255, 0.05)',
        padding: isMobile ? '20px' : '30px',
        borderRadius: '12px',
        border: '1px solid rgba(0, 180, 255, 0.2)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        marginBottom: '30px',
        backdropFilter: 'blur(5px)'
      }}>
        <p style={{ 
          color: '#007acc',
          fontSize: isMobile ? '14px' : '16px',
          marginBottom: '15px',
          fontWeight: '500'
        }}>
          Upload your phone numbers CSV:
        </p>
        
        <label style={{
          display: 'block',
          padding: '12px',
          borderRadius: '8px',
          border: '1px dashed #007acc',
          backgroundColor: 'rgba(0, 180, 255, 0.03)',
          textAlign: 'center',
          cursor: 'pointer',
          marginBottom: '20px',
          transition: 'all 0.2s ease',
          ':hover': {
            backgroundColor: 'rgba(0, 180, 255, 0.08)'
          }
        }}>
          <input 
            type="file" 
            accept=".csv" 
            onChange={handleCSVUpload} 
            style={{ display: 'none' }}
          />
          Click to upload CSV
        </label>

        <div style={{ 
          display: 'flex', 
          gap: '20px', 
          marginBottom: '20px',
          flexDirection: isMobile ? 'column' : 'row'
        }}>
          <div style={{ flex: 1 }}>
            <label style={{ 
              display: 'block',
              color: '#007acc',
              fontSize: '14px',
              marginBottom: '8px',
              fontWeight: '500'
            }}>
              Date
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              style={{ 
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #007acc',
                backgroundColor: 'rgba(0, 180, 255, 0.03)',
                color: '#333',
                fontSize: '14px'
              }}
            />
          </div>
          
          <div style={{ flex: 1 }}>
            <label style={{ 
              display: 'block',
              color: '#007acc',
              fontSize: '14px',
              marginBottom: '8px',
              fontWeight: '500'
            }}>
              Time
            </label>
            <input
              type="time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              style={{ 
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #007acc',
                backgroundColor: 'rgba(0, 180, 255, 0.03)',
                color: '#333',
                fontSize: '14px'
              }}
            />
          </div>
        </div>

        <button
          onClick={handleSchedule}
          style={{
            padding: '14px 24px',
            borderRadius: '8px',
            background: 'linear-gradient(90deg, #007acc 0%, #00b4ff 100%)',
            color: '#fff',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer',
            width: '100%',
            fontSize: '16px',
            boxShadow: '0 4px 15px rgba(0, 180, 255, 0.3)',
            transition: 'all 0.2s ease',
            ':hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 20px rgba(0, 180, 255, 0.4)'
            }
          }}
        >
          Schedule Calls
        </button>
      </div>

      {numbers.length > 0 && (
        <div style={{
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid rgba(0, 180, 255, 0.2)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          maxHeight: '300px',
          overflowY: 'auto'
        }}>
          <h3 style={{ 
            color: '#007acc', 
            marginBottom: '15px',
            fontSize: '18px'
          }}>
            Uploaded Numbers ({numbers.length})
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr 1fr' : '1fr 1fr 1fr 1fr',
            gap: '10px'
          }}>
            {numbers.map((num, index) => (
              <div key={index} style={{
                padding: '8px',
                backgroundColor: 'rgba(0, 180, 255, 0.05)',
                borderRadius: '6px',
                border: '1px solid rgba(0, 180, 255, 0.1)',
                fontSize: '14px',
                color: '#555',
                textAlign: 'center'
              }}>
                {num}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SchedulingPage;