import React from 'react';
import { MdOutlineLibraryBooks, MdDownload } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';

const Docs = () => {
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
    <div className="premium-container">
      <div className="step-content">
        <div className="page-header">
          <MdOutlineLibraryBooks size={isMobile ? 28 : 32} color="#fc466b" />
          <h1>Documentation</h1>
          <p>Comprehensive guides and resources for all platform features</p>
        </div>

        <div className="docs-card">
          <h3>User Guides & Documentation</h3>
          
          <div className="docs-grid">
            {docs.map((doc, index) => (
              <a 
                key={index} 
                href={doc.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="doc-item"
              >
                <h4>{doc.title}</h4>
                <p>{doc.description}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="docs-card">
          <h3>Quick Start Guide</h3>
          
          <p className="quickstart-desc">
            Download our comprehensive quick start guide to get up and running with our platform in minutes.
          </p>
          
          <a
            href="/docs/quickstart.pdf"
            download
            className="download-btn"
          >
            <MdDownload size={20} />
            Download Guide
          </a>
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
  background: linear-gradient(90deg, #fc466b, #3f5efb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.page-header p {
  color: #666;
  font-size: 1rem;
  margin: 0;
}

.docs-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(252, 70, 107, 0.1);
  margin-bottom: 30px;
}

.docs-card h3 {
  color: #fc466b;
  margin-bottom: 25px;
  font-size: 1.3rem;
  font-weight: 600;
}

.docs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
}

.doc-item {
  padding: 20px;
  background: rgba(252, 70, 107, 0.03);
  border-radius: 8px;
  border: 1px solid rgba(252, 70, 107, 0.1);
  text-decoration: none;
  transition: all 0.2s ease;
}

.doc-item:hover {
  background: rgba(252, 70, 107, 0.08);
  transform: translateY(-2px);
}

.doc-item h4 {
  color: #fc466b;
  margin: 0 0 8px 0;
  font-size: 1rem;
  font-weight: 600;
}

.doc-item p {
  color: #666;
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
}

.quickstart-desc {
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 20px;
  line-height: 1.6;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 10px;
  background: linear-gradient(90deg, #fc466b, #3f5efb);
  color: white;
  font-weight: 600;
  text-decoration: none;
  font-size: 1rem;
  box-shadow: 0 4px 15px rgba(252, 70, 107, 0.3);
  transition: all 0.3s ease;
}

.download-btn:hover {
  background: linear-gradient(90deg, #e6425f, #3854e6);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(252, 70, 107, 0.4);
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
  
  .docs-grid {
    grid-template-columns: 1fr;
  }
  
  .docs-card {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .page-header h1 {
    font-size: 1.5rem;
  }
  
  .download-btn {
    width: 100%;
    justify-content: center;
  }
}
`;

// Inject styles
const styleTag = document.createElement('style');
styleTag.innerHTML = styles;
document.head.appendChild(styleTag);

export default Docs;