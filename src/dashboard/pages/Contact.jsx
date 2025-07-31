import React, { useState } from 'react';
import { MdOutlineContactSupport, MdEmail, MdPhone, MdSchedule, MdLocationOn } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: ''
  });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your query has been submitted. Our support team will reach out shortly!');
    setFormData({ name: '', email: '', query: '' });
  };

  return (
    <div className="premium-container">
      <div className="step-content">
        <div className="page-header">
          <MdOutlineContactSupport size={isMobile ? 28 : 32} color="#FF6600" />
          <h1>Contact Support</h1>
          <p>Need help? Our team is ready to assist you</p>
        </div>

        <div className="contact-card">
          <p className="contact-intro">
            Fill out the form below and our team will assist you shortly.
          </p>

          <form onSubmit={handleSubmit}>
            {['name', 'email'].map((field, idx) => (
              <div className="form-group" key={idx}>
                <label>
                  {field === 'name' ? 'Name' : 'Email'}
                </label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}

            <div className="form-group">
              <label>Your Message</label>
              <textarea
                name="query"
                value={formData.query}
                onChange={handleChange}
                required
                rows="5"
              />
            </div>

            <button type="submit" className="primary-btn">
              Submit Request
            </button>
          </form>
        </div>

        <div className="contact-card">
          <h3>Other Ways to Reach Us</h3>

          <div className="contact-methods">
            {[
              { icon: <MdEmail size={20} />, label: 'Email', value: 'support@example.com' },
              { icon: <MdPhone size={20} />, label: 'Phone', value: '+91-98765-43210' },
              { icon: <MdSchedule size={20} />, label: 'Support Hours', value: 'Mon–Fri, 9AM–6PM IST' },
              { icon: <MdLocationOn size={20} />, label: 'Office Address', value: 'Hyderabad, India' }
            ].map((item, idx) => (
              <div className="contact-method" key={idx}>
                <div className="contact-icon">{item.icon}</div>
                <div>
                  <p className="contact-label">{item.label}</p>
                  <p className="contact-value">{item.value}</p>
                </div>
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
  color: #1a1a1a;
  margin: 15px 0 10px;
  font-weight: 700;
  background: linear-gradient(90deg, #FF6600, #FF8C00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.page-header p {
  color: #666;
  font-size: 1rem;
  margin: 0;
}

.contact-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 102, 0, 0.1);
  margin-bottom: 30px;
}

.contact-card h3 {
  color: #FF6600;
  margin-bottom: 25px;
  font-size: 1.3rem;
  font-weight: 600;
}

.contact-intro {
  color: #FF6600;
  font-size: 1rem;
  margin-bottom: 20px;
  line-height: 1.6;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  color: #FF6600;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #FF6600;
  background: rgba(255, 102, 0, 0.03);
  color: #333;
  font-size: 0.95rem;
}

.form-group textarea {
  min-height: 120px;
  resize: vertical;
}

.primary-btn {
  width: 100%;
  padding: 14px;
  border-radius: 8px;
  background: linear-gradient(90deg, #FF6600, #FF8C00);
  color: white;
  font-weight: 600;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: 0 4px 15px rgba(255, 102, 0, 0.3);
  transition: all 0.3s ease;
}

.primary-btn:hover {
  background: linear-gradient(90deg, #E65C00, #E67300);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 102, 0, 0.4);
}

.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.contact-method {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.contact-icon {
  color: #FF6600;
  margin-top: 2px;
}

.contact-label {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 4px;
}

.contact-value {
  color: #333;
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
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
  
  .contact-card {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .page-header h1 {
    font-size: 1.5rem;
  }
  
  .contact-methods {
    grid-template-columns: 1fr;
  }
}
`;

// Inject styles
const styleTag = document.createElement('style');
styleTag.innerHTML = styles;
document.head.appendChild(styleTag);

export default Contact;