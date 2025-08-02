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
  const isMobile = useMediaQuery({ maxWidth: 768 });

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
    <div className="premium-container">
      <div className="step-content">
        <div className="page-header">
          <div className="header-content">
            <RiUserLine className="header-icon" size={isMobile ? 28 : 32} style={{
              background: 'linear-gradient(135deg, #fc466b, #3f5efb)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }} />
            <div>
              <h1>User Profile</h1>
              <p>Manage your account information and settings</p>
            </div>
          </div>
        </div>

        <div className="profile-card">
          <div className="profile-form">
            {['name', 'email', 'phone'].map((field, idx) => (
              <div className="form-group" key={idx}>
                <label>
                  {field === 'phone' ? 'Phone Number' : field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  name={field}
                  type={field === 'email' ? 'email' : (field === 'phone' ? 'tel' : 'text')}
                  value={profile[field]}
                  disabled={!isEditing}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>

          <div className="profile-actions">
            <button
              onClick={isEditing ? handleSave : handleEditToggle}
              className="primary-btn"
              style={{
                background: 'linear-gradient(135deg, #fc466b, #3f5efb)',
                ':hover': {
                  background: 'linear-gradient(135deg, #e6425f, #3854e6)'
                }
              }}
            >
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </button>
            
            {isEditing && (
              <button
                onClick={() => setIsEditing(false)}
                className="secondary-btn"
                style={{
                  color: '#3f5efb',
                  borderColor: '#3f5efb',
                  ':hover': {
                    background: 'rgba(63, 94, 251, 0.1)'
                  }
                }}
              >
                Cancel
              </button>
            )}
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
  margin-bottom: 40px;
}

.header-content {
  display: flex;
  align-items: center;
  gap: 15px;
}

.header-icon {
  flex-shrink: 0;
}

.page-header h1 {
  font-size: 2rem;
  margin: 0 0 5px 0;
  font-weight: 700;
  background: linear-gradient(135deg, #fc466b, #3f5efb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.page-header p {
  color: #666;
  font-size: 1rem;
  margin: 0;
}

.profile-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(63, 94, 251, 0.1);
  max-width: 800px;
  margin: 0 auto;
}

.profile-form {
  margin-bottom: 40px;
}

.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  background: linear-gradient(135deg, #fc466b, #3f5efb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 10px;
  text-transform: capitalize;
}

.form-group input {
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  border: 1px solid #3f5efb;
  background: rgba(63, 94, 251, 0.03);
  color: #1f2937;
  font-size: 1rem;
  transition: all 0.2s ease;
}

.form-group input:disabled {
  background: #f9f9f9;
  color: #666;
}

.profile-actions {
  display: flex;
  gap: 15px;
}

.primary-btn {
  flex: 1;
  padding: 16px;
  border-radius: 10px;
  color: white;
  font-weight: 600;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: 0 4px 15px rgba(63, 94, 251, 0.3);
  transition: all 0.3s ease;
}

.primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(63, 94, 251, 0.4);
}

.secondary-btn {
  flex: 1;
  padding: 16px;
  border-radius: 10px;
  background: white;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
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
  
  .profile-card {
    padding: 25px;
  }
  
  .profile-actions {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .page-header h1 {
    font-size: 1.5rem;
  }
  
  .form-group input {
    padding: 12px;
    font-size: 0.95rem;
  }
  
  .header-content {
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
  }
}
`;

// Inject styles
const styleTag = document.createElement('style');
styleTag.innerHTML = styles;
document.head.appendChild(styleTag);

export default ProfilePage;