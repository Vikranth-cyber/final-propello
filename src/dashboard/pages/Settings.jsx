import React, { useState } from 'react';
import { RiSettings3Line, RiNotification3Line, RiGlobalLine, RiDatabaseLine } from 'react-icons/ri';
import { useMediaQuery } from 'react-responsive';

const SettingsPage = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true
  });
  const [language, setLanguage] = useState('en');
  const [dataLimit, setDataLimit] = useState('standard');
  
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const handleNotificationChange = (type) => {
    setNotifications({
      ...notifications,
      [type]: !notifications[type]
    });
  };

  return (
    <div className="premium-container">
      <div className="step-content">
        <div className="page-header">
          <RiSettings3Line size={isMobile ? 28 : 32} color="#fc466b" />
          <h1>Account Settings</h1>
          <p>Customize your account preferences and notification settings</p>
        </div>

        <div className="settings-grid">
          <div className="settings-card">
            <div className="card-header">
              <RiNotification3Line size={24} color="#fc466b" />
              <h3>Notification Preferences</h3>
            </div>
            <div className="settings-group">
              <label className="setting-item">
                <span>Email Notifications</span>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={notifications.email}
                    onChange={() => handleNotificationChange('email')}
                  />
                  <span className="slider"></span>
                </label>
              </label>
              <label className="setting-item">
                <span>SMS Notifications</span>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={notifications.sms}
                    onChange={() => handleNotificationChange('sms')}
                  />
                  <span className="slider"></span>
                </label>
              </label>
              <label className="setting-item">
                <span>Push Notifications</span>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={notifications.push}
                    onChange={() => handleNotificationChange('push')}
                  />
                  <span className="slider"></span>
                </label>
              </label>
            </div>
          </div>

          <div className="settings-card">
            <div className="card-header">
              <RiGlobalLine size={24} color="#fc466b" />
              <h3>Language & Region</h3>
            </div>
            <div className="settings-group">
              <div className="form-group">
                <label>Language</label>
                <select 
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="form-select"
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                  <option value="ja">Japanese</option>
                </select>
              </div>
              <div className="form-group">
                <label>Timezone</label>
                <select className="form-select">
                  <option>UTC-08:00 (Pacific Time)</option>
                  <option>UTC-05:00 (Eastern Time)</option>
                  <option>UTC+00:00 (GMT)</option>
                  <option>UTC+05:30 (IST)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="settings-card">
            <div className="card-header">
              <RiDatabaseLine size={24} color="#fc466b" />
              <h3>Data Usage</h3>
            </div>
            <div className="settings-group">
              <div className="form-group">
                <label>Data Sync Frequency</label>
                <select className="form-select">
                  <option>Real-time</option>
                  <option>Every 15 minutes</option>
                  <option>Every hour</option>
                  <option>Every 6 hours</option>
                </select>
              </div>
              <div className="form-group">
                <label>Data Limit</label>
                <div className="radio-group">
                  <label className="radio-option">
                    <input 
                      type="radio" 
                      name="dataLimit"
                      checked={dataLimit === 'low'}
                      onChange={() => setDataLimit('low')}
                    />
                    <span className="radio-custom"></span>
                    <span>Low (Save Data)</span>
                  </label>
                  <label className="radio-option">
                    <input 
                      type="radio" 
                      name="dataLimit"
                      checked={dataLimit === 'standard'}
                      onChange={() => setDataLimit('standard')}
                    />
                    <span className="radio-custom"></span>
                    <span>Standard</span>
                  </label>
                  <label className="radio-option">
                    <input 
                      type="radio" 
                      name="dataLimit"
                      checked={dataLimit === 'high'}
                      onChange={() => setDataLimit('high')}
                    />
                    <span className="radio-custom"></span>
                    <span>High Quality</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="save-settings">
          <button className="primary-btn">
            Save Settings
          </button>
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

.settings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.settings-card {
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

.settings-group {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
}

.setting-item span {
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

.form-select {
  padding: 12px 15px;
  border-radius: 10px;
  border: 1px solid #ddd;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #fafafa;
  width: 100%;
}

.form-select:focus {
  outline: none;
  border-color: #fc466b;
  box-shadow: 0 0 0 3px rgba(252, 70, 107, 0.1);
}

.radio-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.radio-option {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.radio-option input {
  display: none;
}

.radio-custom {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #ccc;
  display: inline-block;
  position: relative;
  transition: all 0.3s ease;
}

.radio-option input:checked + .radio-custom {
  border-color: #fc466b;
  background-color: #fc466b;
}

.radio-option input:checked + .radio-custom::after {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

.radio-option span:last-child {
  font-size: 0.95rem;
  color: #555;
}

.save-settings {
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
}

.primary-btn {
  background: linear-gradient(90deg, #fc466b, #3f5efb);
  color: white;
  border: none;
  padding: 14px 30px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.primary-btn:hover {
  background: linear-gradient(90deg, #e14269, #2d4bd8);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(252, 70, 107, 0.3);
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
  
  .settings-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .page-header h1 {
    font-size: 1.5rem;
  }
  
  .settings-card {
    padding: 20px;
  }
  
  .save-settings {
    justify-content: center;
  }
}
`;

// Inject styles
const styleTag = document.createElement('style');
styleTag.innerHTML = styles;
document.head.appendChild(styleTag);

export default SettingsPage;