import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiChevronRight, FiUpload, FiCalendar, FiPlay } from 'react-icons/fi';

const OnboardingFlow = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    industry: '',
    team: '',
    channel: '',
    script: null,
    schedule: ''
  });
  const navigate = useNavigate();

  const industries = [
    'Healthcare', 'Real Estate', 'Retail', 
    'Software', 'Education', 'Others'
  ];

  const teams = [
    'Sales', 'HR', 'Admin', 
    'Customer Support', 'Others'
  ];

  const channels = [
    'Voice Call', 'WhatsApp', 
    'SMS', 'Email'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      script: e.target.files[0]
    }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    navigate('/dashboard'); // Redirect to dashboard after submission
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="step-container">
            <h2>Start Your AI Bot</h2>
            <p className="subtitle">24/7 automated calls for bookings, leads, sales, and answering questions</p>
            <div className="features-grid">
              <div className="feature-card">
                <div className="icon-circle">
                  <FiPlay />
                </div>
                <h3>24/7 Availability</h3>
                <p>Never miss a lead with round-the-clock calling</p>
              </div>
              <div className="feature-card">
                <div className="icon-circle">
                  <FiPlay />
                </div>
                <h3>Bookings</h3>
                <p>Automatically schedule appointments</p>
              </div>
              <div className="feature-card">
                <div className="icon-circle">
                  <FiPlay />
                </div>
                <h3>Leads Generation</h3>
                <p>Qualify and capture leads automatically</p>
              </div>
              <div className="feature-card">
                <div className="icon-circle">
                  <FiPlay />
                </div>
                <h3>Sales</h3>
                <p>Close deals with smart conversations</p>
              </div>
            </div>
            <button 
              onClick={nextStep}
              className="primary-button"
            >
              Get Started <FiChevronRight />
            </button>
          </div>
        );
      case 2:
        return (
          <div className="step-container">
            <h2>Select Your Industry</h2>
            <p className="subtitle">Choose the industry that best fits your business</p>
            <div className="options-grid">
              {industries.map(industry => (
                <button
                  key={industry}
                  className={`option-card ${formData.industry === industry ? 'selected' : ''}`}
                  onClick={() => handleChange({ target: { name: 'industry', value: industry } })}
                >
                  {industry}
                </button>
              ))}
            </div>
            <div className="button-group">
              <button onClick={prevStep} className="secondary-button">
                Back
              </button>
              <button 
                onClick={nextStep}
                disabled={!formData.industry}
                className="primary-button"
              >
                Next <FiChevronRight />
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="step-container">
            <h2>Select Your Team</h2>
            <p className="subtitle">Which team in your organization will manage these calls?</p>
            <div className="options-grid">
              {teams.map(team => (
                <button
                  key={team}
                  className={`option-card ${formData.team === team ? 'selected' : ''}`}
                  onClick={() => handleChange({ target: { name: 'team', value: team } })}
                >
                  {team}
                </button>
              ))}
            </div>
            <div className="button-group">
              <button onClick={prevStep} className="secondary-button">
                Back
              </button>
              <button 
                onClick={nextStep}
                disabled={!formData.team}
                className="primary-button"
              >
                Next <FiChevronRight />
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="step-container">
            <h2>Select Communication Channel</h2>
            <p className="subtitle">How would you like to communicate with your customers?</p>
            <div className="options-grid">
              {channels.map(channel => (
                <button
                  key={channel}
                  className={`option-card ${formData.channel === channel ? 'selected' : ''}`}
                  onClick={() => handleChange({ target: { name: 'channel', value: channel } })}
                >
                  {channel}
                </button>
              ))}
            </div>
            <div className="button-group">
              <button onClick={prevStep} className="secondary-button">
                Back
              </button>
              <button 
                onClick={nextStep}
                disabled={!formData.channel}
                className="primary-button"
              >
                Next <FiChevronRight />
              </button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="step-container">
            <h2>Upload Your Script</h2>
            <p className="subtitle">Upload a text file with your call script or key talking points</p>
            <div className="upload-area">
              <label htmlFor="script-upload" className="upload-box">
                <FiUpload size={24} />
                <p>Click to upload or drag and drop</p>
                <p className="small-text">TXT, DOC, PDF (Max 5MB)</p>
                {formData.script && (
                  <p className="file-name">{formData.script.name}</p>
                )}
              </label>
              <input
                id="script-upload"
                type="file"
                accept=".txt,.doc,.docx,.pdf"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
            </div>
            <div className="button-group">
              <button onClick={prevStep} className="secondary-button">
                Back
              </button>
              <button 
                onClick={nextStep}
                disabled={!formData.script}
                className="primary-button"
              >
                Next <FiChevronRight />
              </button>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="step-container">
            <h2>Schedule Your Calls</h2>
            <p className="subtitle">When would you like your bot to start making calls?</p>
            <div className="form-group">
              <label>Start Date & Time</label>
              <div className="input-with-icon">
                <FiCalendar />
                <input
                  type="datetime-local"
                  name="schedule"
                  value={formData.schedule}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>
            <div className="button-group">
              <button onClick={prevStep} className="secondary-button">
                Back
              </button>
              <button 
                onClick={handleSubmit}
                className="primary-button"
              >
                Start Your Bot <FiPlay />
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="onboarding-flow">
      <div className="progress-bar">
        <div 
          className="progress" 
          style={{ width: `${(step / 6) * 100}%` }}
        ></div>
      </div>
      {renderStep()}
    </div>
  );
};

export default OnboardingFlow;