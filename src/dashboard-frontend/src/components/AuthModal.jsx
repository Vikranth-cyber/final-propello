import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const AuthModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle auth logic here
    onClose();
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Handle forgot password logic here
    alert(`Password reset link sent to ${email}`);
    setShowForgotPassword(false);
  };

  const inputStyle = {
    display: 'block',
    width: '100%',
    padding: isMobile ? '12px 14px' : '14px 16px',
    margin: '8px 0',
    backgroundColor: '#fff',
    border: '1px solid #007acc',
    borderRadius: '6px',
    color: '#333',
    fontSize: '14px',
    transition: 'all 0.3s ease',
    ':focus': {
      borderColor: '#00b4ff',
      outline: 'none',
      boxShadow: '0 0 0 2px rgba(0, 180, 255, 0.2)'
    }
  };

  const btnStyle = {
    background: 'linear-gradient(90deg, #00b4ff 0%, #007acc 100%)',
    color: '#fff',
    padding: isMobile ? '12px' : '14px',
    width: '100%',
    border: 'none',
    borderRadius: '6px',
    fontWeight: '600',
    fontSize: '15px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 10px rgba(0, 180, 255, 0.3)',
    marginTop: '10px',
    ':hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 15px rgba(0, 180, 255, 0.4)'
    },
    ':active': {
      transform: 'translateY(0)'
    }
  };

  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      bottom: 0, 
      backgroundColor: 'rgba(255,255,255,0.9)', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      zIndex: 1000,
      backdropFilter: 'blur(5px)'
    }}>
      <div style={{ 
        backgroundColor: '#fff', 
        padding: isMobile ? '25px' : '40px', 
        borderRadius: '12px', 
        width: isMobile ? '90%' : '400px',
        boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
        border: '1px solid rgba(0, 180, 255, 0.3)'
      }}>
        {showForgotPassword ? (
          <>
            <h2 style={{ 
              color: '#007acc', 
              marginBottom: '20px', 
              fontSize: isMobile ? '20px' : '24px',
              textAlign: 'center'
            }}>
              Reset Password
            </h2>
            
            <form onSubmit={handleForgotPassword}>
              <input 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle} 
                type="email"
                required
              />
              
              <button style={btnStyle} type="submit">
                Send Reset Link
              </button>
              
              <p style={{ 
                color: '#666', 
                marginTop: '15px', 
                textAlign: 'center',
                fontSize: '14px'
              }}>
                Remember your password?{' '}
                <span 
                  onClick={() => setShowForgotPassword(false)} 
                  style={{ 
                    color: '#007acc', 
                    cursor: 'pointer',
                    fontWeight: '600',
                    transition: 'all 0.2s ease'
                  }}
                > 
                  Sign In
                </span>
              </p>
            </form>
          </>
        ) : (
          <>
            <h2 style={{ 
              color: '#007acc', 
              marginBottom: '20px', 
              fontSize: isMobile ? '20px' : '24px',
              textAlign: 'center'
            }}>
              Welcome to PROPELLO AI
            </h2>
            
            <form onSubmit={handleSubmit}>
              <input 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle} 
                type="email"
                required
              />
              <input 
                placeholder="Password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle} 
                required
              />
              
              <p 
                onClick={() => setShowForgotPassword(true)}
                style={{ 
                  color: '#007acc', 
                  cursor: 'pointer', 
                  fontSize: '14px',
                  textAlign: 'right',
                  margin: '8px 0 15px'
                }}
              >
                Forgot Password?
              </p>
              
              <button style={btnStyle} type="submit">
                Login
              </button>
            </form>
          </>
        )}
        
        <button 
          onClick={onClose} 
          style={{ 
            marginTop: '15px', 
            background: 'none', 
            border: '1px solid #007acc', 
            color: '#007acc', 
            padding: isMobile ? '10px' : '12px 16px',
            width: '100%',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            ':hover': {
              background: 'rgba(0, 180, 255, 0.1)'
            }
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AuthModal;