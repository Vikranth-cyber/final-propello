import React, { useState } from 'react';
import { RiShieldKeyholeLine, RiLockPasswordLine, RiGoogleFill, RiAppleFill, RiSmartphoneLine } from 'react-icons/ri';
import { useMediaQuery } from 'react-responsive';

const SecurityPage = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [twoFactorAuth, setTwoFactorAuth] = useState(true);
  const [activeDevices, setActiveDevices] = useState([
    { id: 1, device: 'MacBook Pro', os: 'macOS', browser: 'Chrome', location: 'San Francisco, CA', lastActive: '2 hours ago' },
    { id: 2, device: 'iPhone 13', os: 'iOS', browser: 'Safari', location: 'New York, NY', lastActive: '5 minutes ago' }
  ]);

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const handlePasswordChange = (e) => {
    e.preventDefault();
    alert('Password updated successfully!');
  };

  const revokeDevice = (id) => {
    setActiveDevices(activeDevices.filter(device => device.id !== id));
  };

  return (
    <div className="premium-container">
      <div className="step-content">
        <div className="page-header">
          <RiShieldKeyholeLine size={isMobile ? 28 : 32} color="#fc466b" />
          <h1>Account Security</h1>
          <p>Manage your account security settings and active sessions</p>
        </div>

        <div className="security-grid">
          <div className="security-card">
            <div className="card-header">
              <RiLockPasswordLine size={24} color="#fc466b" />
              <h3>Change Password</h3>
            </div>
            <form onSubmit={handlePasswordChange} className="password-form">
              <div className="form-group">
                <label>Current Password</label>
                <input 
                  type="password" 
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter current password"
                />
              </div>
              <div className="form-group">
                <label>New Password</label>
                <input 
                  type="password" 
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                />
              </div>
              <div className="form-group">
                <label>Confirm New Password</label>
                <input 
                  type="password" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                />
              </div>
              <button type="submit" className="primary-btn">
                Update Password
              </button>
            </form>
          </div>

          <div className="security-card">
            <div className="card-header">
              <RiSmartphoneLine size={24} color="#fc466b" />
              <h3>Two-Factor Authentication</h3>
            </div>
            <div className="toggle-group">
              <span>Status: {twoFactorAuth ? 'Enabled' : 'Disabled'}</span>
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={twoFactorAuth}
                  onChange={() => setTwoFactorAuth(!twoFactorAuth)}
                />
                <span className="slider"></span>
              </label>
            </div>
            <p className="description">
              Two-factor authentication adds an extra layer of security to your account.
            </p>
            <div className="auth-methods">
              <div className="auth-method">
                <RiGoogleFill size={20} color="#4285F4" />
                <span>Google Authenticator</span>
              </div>
              <div className="auth-method">
                <RiAppleFill size={20} color="#000000" />
                <span>Apple Authenticator</span>
              </div>
            </div>
          </div>
        </div>

        <div className="active-sessions">
          <h3>Active Sessions</h3>
          <p>These are devices currently logged into your account</p>
          
          <div className="devices-list">
            {activeDevices.map(device => (
              <div key={device.id} className="device-card">
                <div className="device-info">
                  <div className="device-icon">
                    {device.os === 'iOS' ? <RiSmartphoneLine size={24} color="#fc466b" /> : <RiSmartphoneLine size={24} color="#fc466b" />}
                  </div>
                  <div className="device-details">
                    <h4>{device.device} ({device.os})</h4>
                    <p>{device.browser} • {device.location}</p>
                    <small>Last active: {device.lastActive}</small>
                  </div>
                </div>
                <button 
                  onClick={() => revokeDevice(device.id)}
                  className="revoke-btn"
                >
                  Revoke Access
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = `
.premium-container {
  width: calc(100% - 250px);
  min-height: calc(100vh - 80px);
  margin: 80px 0 0 250px;
  padding: 30px;
  background: #ffffff;
  box-sizing: border-box;
  position: relative;
  font-family: 'Inter', sans-serif;
}

.step-content {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  flex: 1;
}

.page-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 40px;
}

.page-header h1 {
  font-size: 2rem;
  margin: 15px 0 10px;
  font-weight: 700;
  background: linear-gradient(90deg, #fc466b, #3f5efb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.page-header p {
  color: #666;
  font-size: 1rem;
  margin: 0;
}

.security-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.security-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(252, 70, 107, 0.1);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
}

.card-header h3 {
  font-size: 1.3rem;
  background: linear-gradient(90deg, #fc466b, #3f5efb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
}

.password-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 0.9rem;
  color: #555;
  font-weight: 500;
}

.form-group input {
  padding: 12px 15px;
  border-radius: 10px;
  border: 1px solid #ddd;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #fafafa;
}

.form-group input:focus {
  outline: none;
  border-color: #fc466b;
  box-shadow: 0 0 0 3px rgba(252, 70, 107, 0.1);
}

.primary-btn {
  background: linear-gradient(90deg, #fc466b, #3f5efb);
  color: white;
  border: none;
  padding: 14px 20px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  margin-top: 10px;
}

.primary-btn:hover {
  background: linear-gradient(90deg, #e14269, #2d4bd8);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(252, 70, 107, 0.3);
}

.toggle-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}

.toggle-group span {
  font-size: 0.95rem;
  color: #555;
}

.toggle-switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 24px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #fc466b;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.description {
  color: #666;
  font-size: 0.9rem;
  margin: 15px 0;
}

.auth-methods {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.auth-method {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 15px;
  border-radius: 8px;
  background: #f5f5f5;
  font-size: 0.9rem;
}

.active-sessions {
  background: #ffffff;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(252, 70, 107, 0.1);
}

.active-sessions h3 {
  font-size: 1.3rem;
  background: linear-gradient(90deg, #fc466b, #3f5efb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 0 10px;
}

.active-sessions p {
  color: #666;
  font-size: 0.95rem;
  margin: 0 0 20px;
}

.devices-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.device-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-radius: 12px;
  background: #fafafa;
  border: 1px solid #eee;
}

.device-info {
  display: flex;
  align-items: center;
  gap: 15px;
}

.device-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(252, 70, 107, 0.1);
  border-radius: 50%;
  color: #fc466b;
}

.device-details h4 {
  margin: 0 0 5px;
  font-size: 1rem;
  color: #333;
}

.device-details p {
  margin: 0 0 5px;
  font-size: 0.85rem;
  color: #666;
}

.device-details small {
  color: #999;
  font-size: 0.8rem;
}

.revoke-btn {
  background: none;
  border: 1px solid #fc466b;
  color: #fc466b;
  padding: 8px 15px;
  border-radius: 8px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.revoke-btn:hover {
  background: #fc466b;
  color: white;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .premium-container {
    width: 100%;
    margin-left: 0;
    padding: 20px;
  }
}

@media (max-width: 768px) {
  .premium-container {
    margin-top: 120px;
    padding: 15px;
  }
  
  .page-header h1 {
    font-size: 1.8rem;
  }
  
  .security-grid {
    grid-template-columns: 1fr;
  }
  
  .device-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
  
  .revoke-btn {
    align-self: flex-end;
  }
}

@media (max-width: 480px) {
  .page-header h1 {
    font-size: 1.5rem;
  }
  
  .security-card {
    padding: 20px;
  }
  
  .auth-methods {
    flex-direction: column;
  }
}
`;


const styleTag = document.createElement('style');
styleTag.innerHTML = styles;
document.head.appendChild(styleTag);

export default SecurityPage;