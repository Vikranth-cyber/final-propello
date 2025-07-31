import React, { useRef, useState } from "react";
import { FiUpload, FiFileText } from "react-icons/fi";

const Step5Summary = ({ formData, setFormData }) => {
  const fileInputRef = useRef(null);
  const scriptInputRef = useRef(null);
  const [isDateSelected, setIsDateSelected] = useState(false);

  const handleFileChange = (e) => {
    setFormData({ ...formData, phoneNumbersFile: e.target.files[0] });
  };

  const handleScriptChange = (e) => {
    setFormData({ ...formData, scriptText: e.target.value });
  };

  const handleScheduleChange = (e) => {
    const hasDate = e.target.value !== '';
    setFormData({ ...formData, scheduleTime: e.target.value });
    setIsDateSelected(hasDate);
  };

  const handleSubmit = () => {
    alert("Agent scheduled successfully with your config!");
    console.log("Final Submission Data:", formData);
  };

  return (
    <div className="step-container">
      <div className="step-header">
        <h2 className="step-title">
          Summary & Start Agent
        </h2>
        <p className="step-subtitle">Review your configuration and launch your AI agent</p>
      </div>

      <div className="summary-content">
        <div className="summary-section">
          <h3 className="section-title">Configuration Summary</h3>
          <div className="summary-details">
            <div className="detail-item">
              <span className="detail-label">Industry:</span>
              <span className="detail-value">{formData.industry}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Team:</span>
              <span className="detail-value">{formData.team}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Channels:</span>
              <span className="detail-value">{formData.channels.join(", ")}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Use Case:</span>
              <span className="detail-value">{formData.useCase}</span>
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="form-group">
            <label className="form-label">
              <FiUpload className="label-icon" /> Upload Phone Numbers File
            </label>
            <div 
              className="file-upload" 
              onClick={() => fileInputRef.current.click()}
            >
              <input
                ref={fileInputRef}
                type="file"
                onChange={handleFileChange}
                className="file-input"
              />
              {formData.phoneNumbersFile ? (
                <span className="file-name">{formData.phoneNumbersFile.name}</span>
              ) : (
                <span className="file-placeholder">Click to upload CSV or Excel file</span>
              )}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              <FiFileText className="label-icon" /> Paste Script
            </label>
            <textarea
              ref={scriptInputRef}
              rows={6}
              value={formData.scriptText}
              onChange={handleScriptChange}
              placeholder="Enter your call script here..."
              className="form-textarea"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Schedule Start Time</label>
            <input
              type="datetime-local"
              value={formData.scheduleTime}
              onChange={handleScheduleChange}
              className="form-input"
            />
          </div>
        </div>
      </div>

      <div className="submit-section">
        <button 
          onClick={handleSubmit} 
          className="primary-btn submit-btn" 
          disabled={!isDateSelected}
        >
          {isDateSelected ? 'Schedule now' : 'Select date to enable'}
        </button>
      </div>
    </div>
  );
};

export default Step5Summary;

const styles = `
.step-container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  min-height: calc(100vh - 180px);
  position: relative;
}

.step-header {
  text-align: center;
  margin-bottom: 30px;
  padding: 0 20px;
}

.step-title {
  font-size: 1.8rem;
  margin-bottom: 10px;
  font-weight: 700;
  color: #2a2a2a;
  background: linear-gradient(90deg, #ff6600, #ff8c00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.step-subtitle {
  font-size: 1rem;
  color: #6b7280;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.5;
}

.summary-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 30px;
}

.summary-section {
  background: #fff8f0;
  border-radius: 16px;
  padding: 25px;
  border: 1px solid rgba(255, 102, 0, 0.1);
}

.section-title {
  font-size: 1.3rem;
  color: #2a2a2a;
  margin-bottom: 20px;
  font-weight: 600;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 102, 0, 0.2);
}

.summary-details {
  display: grid;
  gap: 15px;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 102, 0, 0.05);
}

.detail-label {
  font-weight: 600;
  color: #666;
}

.detail-value {
  color: #2a2a2a;
  font-weight: 500;
}

.form-section {
  background: #fff8f0;
  border-radius: 16px;
  padding: 25px;
  border: 1px solid rgba(255, 102, 0, 0.1);
}

.form-group {
  margin-bottom: 25px;
}

.form-label {
  font-weight: 600;
  color: #2a2a2a;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.label-icon {
  font-size: 1.2rem;
  color: #ff6600;
}

.file-upload {
  background: white;
  border: 1px dashed #ccc;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px dashed rgba(255, 102, 0, 0.3);
}

.file-upload:hover {
  border-color: #ff6600;
  background: rgba(255, 102, 0, 0.05);
}

.file-input {
  display: none;
}

.file-name {
  color: #ff6600;
  font-weight: 500;
}

.file-placeholder {
  color: #999;
}

.form-textarea {
  width: 100%;
  padding: 15px;
  border-radius: 12px;
  border: 1px solid rgba(255, 102, 0, 0.2);
  resize: none;
  min-height: 150px;
  transition: all 0.3s ease;
  font-family: inherit;
  background: white;
}

.form-textarea:focus {
  border-color: #ff6600;
  box-shadow: 0 0 0 3px rgba(255, 102, 0, 0.1);
  outline: none;
}

.form-input {
  width: 100%;
  padding: 15px;
  border-radius: 12px;
  border: 1px solid rgba(255, 102, 0, 0.2);
  transition: all 0.3s ease;
  background: white;
}

.form-input:focus {
  border-color: #ff6600;
  box-shadow: 0 0 0 3px rgba(255, 102, 0, 0.1);
  outline: none;
}

.submit-section {
  position: sticky;
  bottom: 20px;
  padding: 20px 0;
  background: linear-gradient(to top, rgba(255,255,255,1) 60%, rgba(255,255,255,0));
  margin-top: 20px;
  z-index: 100;
  display: flex;
  justify-content: center;
}

.primary-btn {
  background: #ff6600;
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 18px 36px;
  font-size: 1.1rem;
  width: 100%;
  max-width: 300px;
  box-shadow: 0 8px 15px rgba(255, 102, 0, 0.3);
}

.primary-btn:hover:not(:disabled) {
  background: #e65c00;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(255, 102, 0, 0.4);
}

.primary-btn:disabled {
  background: #cccccc;
  cursor: not-allowed;
  opacity: 0.7;
}

@media (max-width: 1024px) {
  .summary-content {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .step-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 768px) {
  .step-container {
    padding: 30px 15px;
  }
  
  .step-title {
    font-size: 1.5rem;
  }
  
  .section-title {
    font-size: 1.1rem;
  }
  
  .form-label {
    font-size: 0.95rem;
  }
  
  .form-textarea {
    min-height: 120px;
  }
}

@media (max-width: 480px) {
  .step-title {
    font-size: 1.3rem;
  }
  
  .detail-item {
    flex-direction: column;
    gap: 5px;
  }
  
  .primary-btn {
    padding: 16px 24px;
    font-size: 1rem;
  }
}
`;

document.head.insertAdjacentHTML('beforeend', `<style>${styles}</style>`);