import React from 'react';
import { MdOutlineLibraryBooks, MdDownload } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';

const DocsPage = () => {
  const docs = [
    { title: "Getting Started", description: "Set up your account and first campaign", link: "#" },
    { title: "Scheduling Calls", description: "Upload CSV and manage call timings", link: "#" },
    { title: "Understanding Analytics", description: "Interpret dashboard metrics", link: "#" },
    { title: "Bot Script Writing", description: "Create effective call scripts", link: "#" },
    { title: "Managing Recordings", description: "Playback, download and analyze call audio", link: "#" },
    { title: "Billing & Subscription", description: "Know your plan, payment methods and invoices", link: "#" },
  ];
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

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
        <MdOutlineLibraryBooks size={28} color="#007acc" />
        <h1 style={{
          color: '#007acc',
          fontSize: isMobile ? '22px' : '28px',
          fontWeight: '700',
          margin: 0,
          letterSpacing: '0.5px'
        }}>
          Documentation
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
        <h3 style={{ 
          color: '#007acc',
          marginBottom: '20px',
          fontSize: '18px'
        }}>
          User Guides & Documentation
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '16px'
        }}>
          {docs.map((doc, index) => (
            <a 
              key={index} 
              href={doc.link} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                padding: '16px',
                backgroundColor: 'rgba(0, 180, 255, 0.03)',
                borderRadius: '8px',
                border: '1px solid rgba(0, 180, 255, 0.1)',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                ':hover': {
                  backgroundColor: 'rgba(0, 180, 255, 0.08)',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              <h4 style={{ 
                color: '#007acc',
                margin: '0 0 8px 0',
                fontSize: '16px'
              }}>
                {doc.title}
              </h4>
              <p style={{ 
                color: '#666',
                margin: 0,
                fontSize: '14px'
              }}>
                {doc.description}
              </p>
            </a>
          ))}
        </div>
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
          Quick Start Guide
        </h3>
        
        <p style={{ 
          color: '#666',
          fontSize: '14px',
          marginBottom: '20px',
          lineHeight: '1.6'
        }}>
          Download our comprehensive quick start guide to get up and running with PROPELLO AI in minutes.
        </p>
        
        <a
          href="/docs/propello-quickstart.pdf"
          download
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            borderRadius: '8px',
            background: 'linear-gradient(90deg, #007acc 0%, #00b4ff 100%)',
            color: '#fff',
            fontWeight: '600',
            textDecoration: 'none',
            fontSize: '16px',
            boxShadow: '0 4px 15px rgba(0, 180, 255, 0.3)',
            transition: 'all 0.2s ease',
            ':hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 20px rgba(0, 180, 255, 0.4)'
            }
          }}
        >
          <MdDownload size={20} />
          Download Guide
        </a>
      </div>
    </div>
  );
};

export default DocsPage;