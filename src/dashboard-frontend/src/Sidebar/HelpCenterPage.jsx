import React, { useState } from 'react';
import { MdOutlineHelp } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';

const HelpCenterPage = () => {
  const [expanded, setExpanded] = useState(null);
  const [message, setMessage] = useState('');
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const faqs = [
    {
      question: 'How do I schedule a call using the bot?',
      answer: 'Go to the "Call Scheduling" page and upload your CSV with numbers. Set a time and campaign details.'
    },
    {
      question: 'Can I listen to previous bot calls?',
      answer: 'Yes, visit the "Recordings" page to playback, download, or share audio files of bot calls.'
    },
    {
      question: 'How do I update my profile or password?',
      answer: 'Visit the "Profile" or "Security" page to manage and update personal and login details.'
    },
    {
      question: 'How do I cancel or change my subscription?',
      answer: 'Visit the "Billing & Payments" page. You can view, change, or cancel your plan under subscription settings.'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Your support request has been submitted. We will contact you shortly.');
    setTimeout(() => setMessage(''), 5000);
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
        <MdOutlineHelp size={28} color="#007acc" />
        <h1 style={{
          color: '#007acc',
          fontSize: isMobile ? '22px' : '28px',
          fontWeight: '700',
          margin: 0,
          letterSpacing: '0.5px'
        }}>
          Help Center
        </h1>
      </div>

      {/* FAQ Section */}
      <div style={{
        backgroundColor: '#fff',
        padding: isMobile ? '20px' : '30px',
        borderRadius: '12px',
        border: '1px solid rgba(0, 180, 255, 0.2)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        marginBottom: '30px'
      }}>
        <h3 style={{ 
          color: '#007acc',
          marginBottom: '20px',
          fontSize: '18px'
        }}>
          Frequently Asked Questions
        </h3>
        
        <div style={{
          display: 'grid',
          gap: '12px'
        }}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              style={{
                border: '1px solid rgba(0, 180, 255, 0.1)',
                borderRadius: '8px',
                overflow: 'hidden',
                transition: 'all 0.2s ease'
              }}
            >
              <div
                onClick={() => setExpanded(expanded === index ? null : index)}
                style={{
                  padding: '16px',
                  backgroundColor: 'rgba(0, 180, 255, 0.03)',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  ':hover': {
                    backgroundColor: 'rgba(0, 180, 255, 0.08)'
                  }
                }}
              >
                <h4 style={{ 
                  color: '#007acc',
                  margin: 0,
                  fontSize: '16px',
                  fontWeight: '600'
                }}>
                  {faq.question}
                </h4>
                <span style={{ 
                  color: '#007acc',
                  fontSize: '20px',
                  transform: expanded === index ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease'
                }}>
                  ▼
                </span>
              </div>
              
              {expanded === index && (
                <div style={{ 
                  padding: '16px',
                  backgroundColor: '#fff',
                  borderTop: '1px solid rgba(0, 180, 255, 0.1)',
                  color: '#666',
                  fontSize: '14px',
                  lineHeight: '1.6'
                }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Support */}
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
          Contact Support
        </h3>
        
        <p style={{ 
          color: '#666',
          fontSize: '14px',
          marginBottom: '20px',
          lineHeight: '1.6'
        }}>
          Can't find what you're looking for? Send us a message and our support team will get back to you within 24 hours.
        </p>
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <textarea
              placeholder="Describe your issue in detail..."
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #007acc',
                backgroundColor: 'rgba(0, 180, 255, 0.03)',
                color: '#333',
                fontSize: '14px',
                minHeight: '120px',
                transition: 'all 0.2s ease',
                ':focus': {
                  outline: 'none',
                  borderColor: '#00b4ff',
                  boxShadow: '0 0 0 2px rgba(0, 180, 255, 0.2)'
                }
              }}
              required
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
        
        {message && (
          <p style={{ 
            marginTop: '20px', 
            padding: '12px',
            borderRadius: '8px',
            backgroundColor: 'rgba(0, 180, 255, 0.1)',
            color: '#007acc',
            textAlign: 'center',
            fontSize: '14px'
          }}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default HelpCenterPage;