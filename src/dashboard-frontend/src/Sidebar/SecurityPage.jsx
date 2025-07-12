import React, { useState } from 'react';
import { RiLockLine } from 'react-icons/ri';
import { useMediaQuery } from 'react-responsive';

const SecurityPage = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newUsername: '',
    newPassword: ''
  });
  const [message, setMessage] = useState('');
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.currentPassword === 'user_current_pass') {
      setMessage('✅ Username and password updated successfully.');
      setFormData({ currentPassword: '', newUsername: '', newPassword: '' });
    } else {
      setMessage('❌ Current password is incorrect.');
    }
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
        <RiLockLine size={28} color="#007acc" />
        <h1 style={{
          color: '#007acc',
          fontSize: isMobile ? '22px' : '28px',
          fontWeight: '700',
          margin: 0,
          letterSpacing: '0.5px'
        }}>
          Account Security
        </h1>
      </div>

      <div style={{
        backgroundColor: '#fff',
        padding: isMobile ? '20px' : '30px',
        borderRadius: '12px',
        border: '1px solid rgba(0, 180, 255, 0.2)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
      }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              display: 'block',
              color: '#007acc',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '8px'
            }}>
              Current Password
            </label>
            <input
              type="password"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #007acc',
                backgroundColor: 'rgba(0, 180, 255, 0.03)',
                color: '#333',
                fontSize: '14px',
                transition: 'all 0.2s ease',
                ':focus': {
                  outline: 'none',
                  borderColor: '#00b4ff',
                  boxShadow: '0 0 0 2px rgba(0, 180, 255, 0.2)'
                }
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              display: 'block',
              color: '#007acc',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '8px'
            }}>
              New Username
            </label>
            <input
              type="text"
              name="newUsername"
              value={formData.newUsername}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #007acc',
                backgroundColor: 'rgba(0, 180, 255, 0.03)',
                color: '#333',
                fontSize: '14px',
                transition: 'all 0.2s ease',
                ':focus': {
                  outline: 'none',
                  borderColor: '#00b4ff',
                  boxShadow: '0 0 0 2px rgba(0, 180, 255, 0.2)'
                }
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              display: 'block',
              color: '#007acc',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '8px'
            }}>
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #007acc',
                backgroundColor: 'rgba(0, 180, 255, 0.03)',
                color: '#333',
                fontSize: '14px',
                transition: 'all 0.2s ease',
                ':focus': {
                  outline: 'none',
                  borderColor: '#00b4ff',
                  boxShadow: '0 0 0 2px rgba(0, 180, 255, 0.2)'
                }
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '14px',
              borderRadius: '8px',
              background: 'linear-gradient(90deg, #007acc 0%, #00b4ff 100%)',
              color: '#fff',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              boxShadow: '0 4px 15px rgba(0, 180, 255, 0.3)',
              transition: 'all 0.2s ease',
              ':hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(0, 180, 255, 0.4)'
              }
            }}
          >
            Update Credentials
          </button>
        </form>

        {message && (
          <p style={{ 
            marginTop: '20px', 
            padding: '12px',
            borderRadius: '8px',
            backgroundColor: message.includes('✅') ? 'rgba(0, 180, 255, 0.1)' : 'rgba(255, 100, 100, 0.1)',
            color: message.includes('✅') ? '#007acc' : '#ff3333',
            textAlign: 'center',
            fontSize: '14px'
          }}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default SecurityPage;