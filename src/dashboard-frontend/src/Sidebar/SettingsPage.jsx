import React, { useState } from 'react';
import { RiSettingsLine } from 'react-icons/ri';
import { useMediaQuery } from 'react-responsive';

const SettingsPage = () => {
  const [notifications, setNotifications] = useState(true);
  const [voiceSettings, setVoiceSettings] = useState({
    speed: 1.0,
    pitch: 1.0,
    volume: 80,
    voice: 'en-US-Wavenet-A'
  });
  const [recordingSettings, setRecordingSettings] = useState({
    autoSave: true,
    quality: 'high',
    maxDuration: 300
  });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const voiceOptions = [
    { id: 'en-US-Wavenet-A', name: 'US English Male' },
    { id: 'en-US-Wavenet-B', name: 'US English Female' },
    { id: 'en-IN-Wavenet-A', name: 'Indian English Male' },
    { id: 'en-IN-Wavenet-B', name: 'Indian English Female' },
    { id: 'hi-IN-Wavenet-A', name: 'Hindi Male' },
    { id: 'hi-IN-Wavenet-B', name: 'Hindi Female' }
  ];

  const handleVoiceSettingChange = (key, value) => {
    setVoiceSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleRecordingSettingChange = (key, value) => {
    setRecordingSettings(prev => ({ ...prev, [key]: value }));
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
        <RiSettingsLine size={28} color="#007acc" />
        <h1 style={{
          color: '#007acc',
          fontSize: isMobile ? '22px' : '28px',
          fontWeight: '700',
          margin: 0,
          letterSpacing: '0.5px'
        }}>
          Voice AI Settings
        </h1>
      </div>

      <div style={{
        backgroundColor: '#fff',
        padding: isMobile ? '20px' : '30px',
        borderRadius: '12px',
        border: '1px solid rgba(0, 180, 255, 0.2)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
      }}>
        {/* Voice Settings Section */}
        <div style={{ 
          marginBottom: '30px',
          paddingBottom: '20px',
          borderBottom: '1px solid rgba(0, 180, 255, 0.1)'
        }}>
          <h3 style={{ 
            color: '#007acc',
            fontSize: '18px',
            fontWeight: '600',
            marginBottom: '20px'
          }}>
            Voice Preferences
          </h3>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              display: 'block',
              color: '#007acc',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '10px'
            }}>
              Voice Style
            </label>
            <select
              value={voiceSettings.voice}
              onChange={(e) => handleVoiceSettingChange('voice', e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #007acc',
                backgroundColor: 'rgba(0, 180, 255, 0.03)',
                color: '#333',
                fontSize: '14px',
                appearance: 'none',
                backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007acc%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
                backgroundSize: '12px auto',
                ':focus': {
                  outline: 'none',
                  borderColor: '#00b4ff',
                  boxShadow: '0 0 0 2px rgba(0, 180, 255, 0.2)'
                }
              }}
            >
              {voiceOptions.map(option => (
                <option key={option.id} value={option.id}>{option.name}</option>
              ))}
            </select>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              display: 'block',
              color: '#007acc',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '10px'
            }}>
              Speaking Speed: {voiceSettings.speed.toFixed(1)}x
            </label>
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={voiceSettings.speed}
              onChange={(e) => handleVoiceSettingChange('speed', parseFloat(e.target.value))}
              style={{
                width: '100%',
                height: '8px',
                borderRadius: '4px',
                background: 'linear-gradient(to right, #007acc 0%, #007acc ' + 
                  ((voiceSettings.speed - 0.5) / 1.5 * 100) + '%, #eee ' + 
                  ((voiceSettings.speed - 0.5) / 1.5 * 100) + '%, #eee 100%)',
                outline: 'none',
                appearance: 'none',
                '::-webkit-slider-thumb': {
                  appearance: 'none',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: '#007acc',
                  cursor: 'pointer'
                }
              }}
            />
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              marginTop: '5px'
            }}>
              <span style={{ color: '#666', fontSize: '12px' }}>0.5x</span>
              <span style={{ color: '#666', fontSize: '12px' }}>2.0x</span>
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              display: 'block',
              color: '#007acc',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '10px'
            }}>
              Voice Pitch: {voiceSettings.pitch.toFixed(1)}x
            </label>
            <input
              type="range"
              min="0.5"
              max="1.5"
              step="0.1"
              value={voiceSettings.pitch}
              onChange={(e) => handleVoiceSettingChange('pitch', parseFloat(e.target.value))}
              style={{
                width: '100%',
                height: '8px',
                borderRadius: '4px',
                background: 'linear-gradient(to right, #007acc 0%, #007acc ' + 
                  ((voiceSettings.pitch - 0.5) / 1 * 100) + '%, #eee ' + 
                  ((voiceSettings.pitch - 0.5) / 1 * 100) + '%, #eee 100%)',
                outline: 'none',
                appearance: 'none',
                '::-webkit-slider-thumb': {
                  appearance: 'none',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: '#007acc',
                  cursor: 'pointer'
                }
              }}
            />
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              marginTop: '5px'
            }}>
              <span style={{ color: '#666', fontSize: '12px' }}>0.5x</span>
              <span style={{ color: '#666', fontSize: '12px' }}>1.5x</span>
            </div>
          </div>

          <div>
            <label style={{ 
              display: 'block',
              color: '#007acc',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '10px'
            }}>
              Volume: {voiceSettings.volume}%
            </label>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={voiceSettings.volume}
              onChange={(e) => handleVoiceSettingChange('volume', parseInt(e.target.value))}
              style={{
                width: '100%',
                height: '8px',
                borderRadius: '4px',
                background: 'linear-gradient(to right, #007acc 0%, #007acc ' + 
                  voiceSettings.volume + '%, #eee ' + 
                  voiceSettings.volume + '%, #eee 100%)',
                outline: 'none',
                appearance: 'none',
                '::-webkit-slider-thumb': {
                  appearance: 'none',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: '#007acc',
                  cursor: 'pointer'
                }
              }}
            />
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              marginTop: '5px'
            }}>
              <span style={{ color: '#666', fontSize: '12px' }}>0%</span>
              <span style={{ color: '#666', fontSize: '12px' }}>100%</span>
            </div>
          </div>
        </div>

        {/* Recording Settings Section */}
        <div style={{ 
          marginBottom: '30px',
          paddingBottom: '20px',
          borderBottom: '1px solid rgba(0, 180, 255, 0.1)'
        }}>
          <h3 style={{ 
            color: '#007acc',
            fontSize: '18px',
            fontWeight: '600',
            marginBottom: '20px'
          }}>
            Recording Settings
          </h3>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px'
          }}>
            <div>
              <label style={{ 
                display: 'block',
                color: '#007acc',
                fontSize: '14px',
                fontWeight: '600',
                marginBottom: '4px'
              }}>
                Auto-save Recordings
              </label>
              <p style={{ 
                color: '#666',
                fontSize: '12px',
                margin: 0
              }}>
                Automatically save all call recordings
              </p>
            </div>
            <label style={{
              position: 'relative',
              display: 'inline-block',
              width: '50px',
              height: '26px'
            }}>
              <input
                type="checkbox"
                checked={recordingSettings.autoSave}
                onChange={(e) => handleRecordingSettingChange('autoSave', e.target.checked)}
                style={{ opacity: 0, width: 0, height: 0 }}
              />
              <span style={{
                position: 'absolute',
                cursor: 'pointer',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: recordingSettings.autoSave ? '#007acc' : '#ccc',
                transition: '.4s',
                borderRadius: '34px',
                ':before': {
                  position: 'absolute',
                  content: '""',
                  height: '18px',
                  width: '18px',
                  left: '4px',
                  bottom: '4px',
                  backgroundColor: 'white',
                  transition: '.4s',
                  borderRadius: '50%',
                  transform: recordingSettings.autoSave ? 'translateX(24px)' : 'translateX(0)'
                }
              }} />
            </label>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              display: 'block',
              color: '#007acc',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '10px'
            }}>
              Recording Quality
            </label>
            <div style={{ 
              display: 'flex',
              gap: '10px'
            }}>
              {['low', 'medium', 'high'].map(quality => (
                <button
                  key={quality}
                  onClick={() => handleRecordingSettingChange('quality', quality)}
                  style={{
                    flex: 1,
                    padding: '10px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: recordingSettings.quality === quality ? '#007acc' : '#ddd',
                    backgroundColor: recordingSettings.quality === quality ? 'rgba(0, 180, 255, 0.1)' : '#fff',
                    color: recordingSettings.quality === quality ? '#007acc' : '#666',
                    fontWeight: recordingSettings.quality === quality ? '600' : '500',
                    textTransform: 'capitalize',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {quality}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label style={{ 
              display: 'block',
              color: '#007acc',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '10px'
            }}>
              Maximum Call Duration: {recordingSettings.maxDuration} seconds
            </label>
            <input
              type="range"
              min="60"
              max="600"
              step="30"
              value={recordingSettings.maxDuration}
              onChange={(e) => handleRecordingSettingChange('maxDuration', parseInt(e.target.value))}
              style={{
                width: '100%',
                height: '8px',
                borderRadius: '4px',
                background: 'linear-gradient(to right, #007acc 0%, #007acc ' + 
                  ((recordingSettings.maxDuration - 60) / 540 * 100) + '%, #eee ' + 
                  ((recordingSettings.maxDuration - 60) / 540 * 100) + '%, #eee 100%)',
                outline: 'none',
                appearance: 'none',
                '::-webkit-slider-thumb': {
                  appearance: 'none',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: '#007acc',
                  cursor: 'pointer'
                }
              }}
            />
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              marginTop: '5px'
            }}>
              <span style={{ color: '#666', fontSize: '12px' }}>1 min</span>
              <span style={{ color: '#666', fontSize: '12px' }}>10 min</span>
            </div>
          </div>
        </div>

        {/* Notification Settings Section */}
        <div>
          <h3 style={{ 
            color: '#007acc',
            fontSize: '18px',
            fontWeight: '600',
            marginBottom: '20px'
          }}>
            Notification Preferences
          </h3>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px'
          }}>
            <div>
              <label style={{ 
                display: 'block',
                color: '#007acc',
                fontSize: '14px',
                fontWeight: '600',
                marginBottom: '4px'
              }}>
                Email Notifications
              </label>
              <p style={{ 
                color: '#666',
                fontSize: '12px',
                margin: 0
              }}>
                Receive email alerts for important events
              </p>
            </div>
            <label style={{
              position: 'relative',
              display: 'inline-block',
              width: '50px',
              height: '26px'
            }}>
              <input
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
                style={{ opacity: 0, width: 0, height: 0 }}
              />
              <span style={{
                position: 'absolute',
                cursor: 'pointer',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: notifications ? '#007acc' : '#ccc',
                transition: '.4s',
                borderRadius: '34px',
                ':before': {
                  position: 'absolute',
                  content: '""',
                  height: '18px',
                  width: '18px',
                  left: '4px',
                  bottom: '4px',
                  backgroundColor: 'white',
                  transition: '.4s',
                  borderRadius: '50%',
                  transform: notifications ? 'translateX(24px)' : 'translateX(0)'
                }
              }} />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;