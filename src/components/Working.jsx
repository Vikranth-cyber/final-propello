import React from "react";
import { FaUserTie, FaRocket, FaChartLine } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";

const Working = () => {
  return (
    <section id="working" className="working-section">
      <div className="working-header">
        <h2 className="working-title gradient-text">How It Works</h2>
        <div className="title-gradient-line"></div>
      </div>

      <div className="steps-container">
        <div className="step">
          <div className="step-icon-container">
            <div className="step-icon-bg">
              <FaUserTie className="step-icon" />
            </div>
            <div className="step-number">01</div>
          </div>
          <h3 className="step-title">Select Your Agent & Script</h3>
          <p className="step-description">
            Pick your industry-ready AI agent and share your scripts. We convert them into dynamic conversations using NEPQ and business context.
          </p>
        </div>

        <div className="connector">
          <BsArrowRightShort className="arrow-icon" />
          <div className="connector-line"></div>
        </div>

        <div className="step">
          <div className="step-icon-container">
            <div className="step-icon-bg">
              <FaRocket className="step-icon" />
            </div>
            <div className="step-number">02</div>
          </div>
          <h3 className="step-title">Go Live Instantly</h3>
          <p className="step-description">
            Our voice agents are trained and deployed within days.
          </p>
        </div>

        <div className="connector">
          <BsArrowRightShort className="arrow-icon" />
          <div className="connector-line"></div>
        </div>

        <div className="step">
          <div className="step-icon-container">
            <div className="step-icon-bg">
              <FaChartLine className="step-icon" />
            </div>
            <div className="step-number">03</div>
          </div>
          <h3 className="step-title">Track, Improve, and Scale</h3>
          <p className="step-description">
            Get access to live dashboards for analytics, sentiment analysis, and CRM-integrated actions to drive performance improvement.
          </p>
        </div>
      </div>

      <style jsx>{`
        .working-section {
          padding: 5rem 1rem;
          font-family: var(--font-body);
          background: white;
          color: #333;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .working-header {
          margin-bottom: 3.5rem;
          position: relative;
          width: 100%;
          max-width: 1200px;
        }

        .working-title {
          font-size: 3rem;
          font-weight: 800;
          font-family: var(--font-heading);
          margin-bottom: 1rem;
        }

        .gradient-text {
          background: linear-gradient(90deg, #FC466B, #3F5EFB);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .title-gradient-line {
          height: 4px;
          width: 120px;
          background: linear-gradient(90deg, #FC466B, #3F5EFB);
          margin: 0 auto;
          border-radius: 2px;
        }

        .steps-container {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          max-width: 1200px;
          width: 100%;
          position: relative;
          gap: 1rem;
        }

        .step {
          flex: 1;
          min-width: 280px;
          max-width: 320px;
          padding: 2.5rem 2rem;
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(252, 70, 107, 0.1);
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .step:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(252, 70, 107, 0.2);
        }

        .step-icon-container {
          position: relative;
          margin-bottom: 1.5rem;
          width: 80px;
          height: 80px;
        }

        .step-icon-bg {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #FC466B, #3F5EFB);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.8rem;
          box-shadow: 0 5px 15px rgba(252, 70, 107, 0.3);
        }

        .step-number {
          position: absolute;
          top: -10px;
          right: -10px;
          background: white;
          color: #3F5EFB;
          border: 2px solid #3F5EFB;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.9rem;
        }

        .step-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #222;
          background: linear-gradient(90deg, #FC466B, #3F5EFB);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: var(--font-heading);
        }

        .step-description {
          font-size: 1rem;
          line-height: 1.7;
          color: #666;
        }

        .connector {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0 1rem;
          position: relative;
          height: 100%;
          margin-top: 80px;
        }

        .arrow-icon {
          font-size: 2.5rem;
          color: #3F5EFB;
          margin-bottom: 0.5rem;
          opacity: 0.7;
        }

        .connector-line {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, #FC466B, #3F5EFB);
          opacity: 0.3;
        }

        @media (max-width: 1200px) {
          .steps-container {
            gap: 0.5rem;
          }

          .step {
            padding: 2rem 1.5rem;
          }
        }

        @media (max-width: 992px) {
          .steps-container {
            flex-wrap: wrap;
            gap: 2rem;
          }

          .step {
            max-width: 45%;
            min-width: 300px;
            margin-bottom: 1rem;
          }

          .connector {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .working-section {
            padding: 4rem 1rem;
          }

          .working-title {
            font-size: 2.5rem;
          }

          .steps-container {
            flex-direction: column;
            align-items: center;
            gap: 2.5rem;
          }

          .step {
            max-width: 100%;
            width: 100%;
            min-width: auto;
          }

          .connector {
            display: flex;
            height: auto;
            margin-top: 0;
            padding: 1rem 0;
            flex-direction: row;
            width: 100px;
          }

          .arrow-icon {
            transform: rotate(90deg);
            margin: 0 0.5rem;
          }

          .connector-line {
            width: 2px;
            height: 30px;
          }
        }

        @media (max-width: 600px) {
          .working-title {
            font-size: 2rem;
          }

          .step {
            padding: 1.8rem 1.5rem;
          }

          .step-icon-container {
            width: 70px;
            height: 70px;
          }

          .step-icon-bg {
            font-size: 1.5rem;
          }

          .step-number {
            width: 30px;
            height: 30px;
            font-size: 0.8rem;
          }

          .step-title {
            font-size: 1.2rem;
          }

          .step-description {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 480px) {
          .working-title {
            font-size: 1.8rem;
          }

          .step {
            padding: 1.5rem 1.2rem;
          }

          .step-title {
            font-size: 1.1rem;
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
