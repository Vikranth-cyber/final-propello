import React from "react";
import { FaUserTie, FaRocket, FaChartLine } from "react-icons/fa";

const Working = () => {
  return (
    <section id="working" className="working-section">
      <h2 className="working-title">How It Works</h2>
      <div className="steps-container">
        <div className="step">
          <div className="step-icon">
            <FaUserTie />
          </div>
          <h3 className="step-title">STEP 1</h3>
          <p className="step-subtitle">Select Your Agent & Script</p>
          <p className="step-description">
            Pick your industry-ready AI agent and share your scripts. We convert them into dynamic conversations using NEPQ and business context.
          </p>
        </div>

        <div className="connector-line"></div>

        <div className="step">
          <div className="step-icon">
            <FaRocket />
          </div>
          <h3 className="step-title">STEP 2</h3>
          <p className="step-subtitle">Go Live Instantly</p>
          <p className="step-description">
            Our voice agents are trained and deployed within days.
          </p>
        </div>

        <div className="connector-line"></div>

        <div className="step">
          <div className="step-icon">
            <FaChartLine />
          </div>
          <h3 className="step-title">STEP 3</h3>
          <p className="step-subtitle">Track, Improve, and Scale</p>
          <p className="step-description">
            Get access to live dashboards for analytics, sentiment analysis, and CRM-integrated actions to drive performance improvement.
          </p>
        </div>
      </div>

      <style>{`
        .working-section {
          padding: 4rem 1rem;
          font-family: var(--font-body);
          background: white;
          color: #333;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
        }

        .working-title {
          font-size: 2.2rem;
          margin-bottom: 3rem;
          font-family: var(--font-heading);
          color: #FF6D00;
        }

        .steps-container {
          display: flex;
          justify-content: center;
          align-items: stretch;
          max-width: 1200px;
          width: 100%;
          position: relative;
        }

        .step {
          flex: 1;
          min-width: 250px;
          max-width: 300px;
          padding: 2rem 1.5rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 5px 15px rgba(255, 109, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .step:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(255, 109, 0, 0.15);
        }

        .step-icon {
          font-size: 2.5rem;
          color: #FF6D00;
          margin-bottom: 1rem;
        }

        .step-title {
          font-size: 1.2rem;
          color: #FF6D00;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }

        .step-subtitle {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #333;
        }

        .step-description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #666;
        }

        .connector-line {
          position: relative;
          width: 80px;
          display: flex;
          align-items: center;
        }

        .connector-line::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 2px;
          background: #FF6D00;
          opacity: 0.3;
          transform: translateY(-50%);
        }

        .connector-line::after {
          content: '›';
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          color: #FF6D00;
          font-size: 1.5rem;
        }

        @media (max-width: 992px) {
          .steps-container {
            flex-wrap: wrap;
            justify-content: space-around;
          }
          
          .connector-line {
            width: 100%;
            height: 60px;
            display: none;
          }
          
          .step {
            margin-bottom: 2rem;
          }
        }

        @media (max-width: 768px) {
          .working-title {
            font-size: 1.8rem;
          }
          
          .steps-container {
            flex-direction: column;
            align-items: center;
          }
          
          .step {
            max-width: 100%;
            margin-bottom: 2rem;
          }
          
          .connector-line {
            width: 2px;
            height: 40px;
            display: block;
          }
          
          .connector-line::before {
            top: 0;
            left: 50%;
            right: auto;
            width: 2px;
            height: 100%;
            transform: translateX(-50%);
          }
          
          .connector-line::after {
            display: none;
          }
        }

        @media (max-width: 600px) {
          .working-title {
            font-size: 1.6rem;
          }
          
          .step {
            padding: 1.5rem 1rem;
          }
          
          .step-icon {
            font-size: 2rem;
          }
        }

        @media (max-width: 400px) {
          .step-title {
            font-size: 1.1rem;
          }
          
          .step-subtitle {
            font-size: 1rem;
          }
          
          .step-description {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Working;