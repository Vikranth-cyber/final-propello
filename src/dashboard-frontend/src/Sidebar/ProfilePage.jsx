import React, { useState } from 'react';
import { RiUserLine } from 'react-icons/ri';
import { useMediaQuery } from 'react-responsive';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: 'Vikranth D',
    email: 'vikranth@example.com',
    phone: '9876543210'
  });
  const [isEditing, setIsEditing] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    alert('Profile updated successfully!');
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
        <RiUserLine size={28} color="#007acc" />
        <h1 style={{
          color: '#007acc',
          fontSize: isMobile ? '22px' : '28px',
          fontWeight: '700',
          margin: 0,
          letterSpacing: '0.5px'
        }}>
          User Profile
        </h1>
      </div>

      <div style={{
        backgroundColor: '#fff',
        padding: isMobile ? '20px' : '30px',
        borderRadius: '12px',
        border: '1px solid rgba(0, 180, 255, 0.2)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ 
            display: 'block',
            color: '#007acc',
            fontSize: '14px',
            fontWeight: '600',
            marginBottom: '8px'
          }}>
            Full Name
          </label>
          <input
            name="name"
            type="text"
            value={profile.name}
            disabled={!isEditing}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #007acc',
              backgroundColor: isEditing ? 'rgba(0, 180, 255, 0.03)' : 'rgba(0, 180, 255, 0.01)',
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
            Email
          </label>
          <input
            name="email"
            type="email"
            value={profile.email}
            disabled={!isEditing}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #007acc',
              backgroundColor: isEditing ? 'rgba(0, 180, 255, 0.03)' : 'rgba(0, 180, 255, 0.01)',
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
            Phone Number
          </label>
          <input
            name="phone"
            type="tel"
            value={profile.phone}
            disabled={!isEditing}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #007acc',
              backgroundColor: isEditing ? 'rgba(0, 180, 255, 0.03)' : 'rgba(0, 180, 255, 0.01)',
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

        <div style={{ 
          display: 'flex', 
          gap: '10px',
          flexDirection: isMobile ? 'column' : 'row'
        }}>
          <button
            onClick={isEditing ? handleSave : handleEditToggle}
            style={{
              flex: 1,
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
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </button>
          
          {isEditing && (
            <button
              onClick={() => setIsEditing(false)}
              style={{
                flex: 1,
                padding: '14px',
                borderRadius: '8px',
                background: '#fff',
                color: '#007acc',
                fontWeight: '600',
                border: '1px solid #007acc',
                cursor: 'pointer',
                fontSize: '16px',
                transition: 'all 0.2s ease',
                ':hover': {
                  backgroundColor: 'rgba(0, 180, 255, 0.1)'
                }
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;