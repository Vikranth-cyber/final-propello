import React, { useState } from 'react';
import { MdOutlineContactSupport } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: ''
  });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your query has been submitted. Our support team will reach out shortly!');
    setFormData({ name: '', email: '', query: '' });
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
        <MdOutlineContactSupport size={28} color="#007acc" />
        <h1 style={{
          color: '#007acc',
          fontSize: isMobile ? '22px' : '28px',
          fontWeight: '700',
          margin: 0,
          letterSpacing: '0.5px'
        }}>
          Contact Support
        </h1>
      </div>

      <div style={{
        backgroundColor: '#fff',
        padding: isMobile ? '20px' : '30px',
        borderRadius: '12px',
        border: '1px solid rgba(0, 180, 255, 0.2)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        marginBottom: '30px'
      }}>
        <p style={{ 
          color: '#007acc',
          fontSize: '16px',
          marginBottom: '20px',
          lineHeight: '1.6'
        }}>
          Need help? Fill out the form below and our team will assist you shortly.
        </p>
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              display: 'block',
              color: '#007acc',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '8px'
            }}>
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
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
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
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
              Your Message
            </label>
            <textarea
              name="query"
              value={formData.query}
              onChange={handleChange}
              required
              rows="5"
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
            Submit Request
          </button>
        </form>
      </div>

      <div style={{
        backgroundColor: '#fff',
        padding: isMobile ? '20px' : '30px',
        borderRadius: '12px',
        border: '1px solid rgba(0, 180, 255, 0.2)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
      }}>
        <h3 style={{ 
          color: '#007acc',
          marginBottom: '16px',
          fontSize: '18px'
        }}>
          Other Ways to Reach Us
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '20px'
        }}>
          <div>
            <p style={{ 
              color: '#666',
              fontSize: '14px',
              marginBottom: '4px'
            }}>
              Email
            </p>
            <p style={{ 
              color: '#333',
              fontSize: '16px',
              fontWeight: '600',
              margin: 0
            }}>
              support@propelloai.com
            </p>
          </div>
          
          <div>
            <p style={{ 
              color: '#666',
              fontSize: '14px',
              marginBottom: '4px'
            }}>
              Phone
            </p>
            <p style={{ 
              color: '#333',
              fontSize: '16px',
              fontWeight: '600',
              margin: 0
            }}>
              +91-98765-43210
            </p>
          </div>
          
          <div>
            <p style={{ 
              color: '#666',
              fontSize: '14px',
              marginBottom: '4px'
            }}>
              Support Hours
            </p>
            <p style={{ 
              color: '#333',
              fontSize: '16px',
              fontWeight: '600',
              margin: 0
            }}>
              Mon–Fri, 9AM–6PM IST
            </p>
          </div>
          
          <div>
            <p style={{ 
              color: '#666',
              fontSize: '14px',
              marginBottom: '4px'
            }}>
              Office Address
            </p>
            <p style={{ 
              color: '#333',
              fontSize: '16px',
              fontWeight: '600',
              margin: 0
            }}>
              Hyderabad, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;