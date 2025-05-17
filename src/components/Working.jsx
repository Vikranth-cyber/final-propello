import React from "react";
import { FaUserTie, FaRocket, FaChartLine } from "react-icons/fa";

const steps = [
  {
    icon: <FaUserTie size={36} />,
    title: "Select Your Agent & Script",
    desc: "Pick your industry-ready AI agent and share your scripts. We convert them into dynamic conversations using NEPQ.",
  },
  {
    icon: <FaRocket size={36} />,
    title: "Go Live Instantly",
    desc: "Our voice agents are trained and deployed within days – no coding required.",
  },
  {
    icon: <FaChartLine size={36} />,
    title: "Track, Improve, and Scale",
    desc: "Access dashboards for analytics, sentiment analysis & CRM-integrated actions to improve performance.",
  },
];

const Working = () => {
  return (
    <section className="working-section">
      <h2 className="working-title">How It Works</h2>

      <div className="steps-container">
        {steps.map((step, idx) => (
          <div className="step-wrapper" key={idx}>
            <div className="step-box">
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
            {idx !== steps.length - 1 && (
              <div className="arrow">{/* Arrow element */}</div>
            )}
          </div>
        ))}
      </div>

      <style>{`
        .working-section {
          padding: 4rem 1rem;
          font-family: var(--font-body);
          background: transparent;
          color: #E5E9F0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .working-title {
          font-size: 2.8rem;
          margin-bottom: 3rem;
          font-family: var(--font-heading);
          background: linear-gradient(90deg, #5D9EFF, #A3E4D7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-align: center;
        }

        .steps-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .step-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .step-box {
          width: 300px;
          height: 320px;
          background: rgba(255, 255, 255, 0.04);
          border: 2px solid #5D9EFF;
          border-radius: 16px;
          padding: 1.5rem;
          text-align: center;
          box-shadow: 0 0 15px #5D9EFF, inset 0 0 8px #5D9EFF;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .step-box:hover {
          transform: scale(1.05);
          box-shadow: 0 0 25px #5D9EFF, inset 0 0 12px #A3E4D7;
        }

        .step-icon {
          margin-bottom: 1rem;
          color: #A3E4D7;
        }

        .step-title {
          color: #A3E4D7;
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }

        .step-desc {
          color: #C7D3E0;
          font-size: 0.95rem;
        }

        .arrow {
          width: 2px;
          height: 40px;
          background: linear-gradient(#5D9EFF, #A3E4D7);
          margin: 20px 0;
        }

        @media (min-width: 768px) {
          .steps-container {
            flex-direction: row;
            justify-content: center;
            gap: 3rem;
          }

          .step-wrapper {
            flex-direction: row;
            align-items: center;
          }

          .arrow {
            width: 40px;
            height: 2px;
            margin: 0 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Working;
