import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Working = () => {
  const [showLearnMore, setShowLearnMore] = useState(false);

  return (
    <section id="working" className="working-section">
      {showLearnMore ? (
        <div className="learn-more-section">
          <button className="back-btn" onClick={() => setShowLearnMore(false)}>
            <FaArrowLeft /> Back
          </button>
          <h2 className="learn-title">How Propello AI Voice Bot Works</h2>

          <div className="steps-container">
            <p><strong>Plug & Play Setup:</strong> Just connect your number, and our AI bot gets to work—no complex installation needed.</p>
            <p><strong>Real-Time Voice Engagement:</strong> Our bot speaks naturally and understands Indian accents and dialects.</p>
            <p><strong>Instant Response Handling:</strong> From answering FAQs to confirming appointments, everything is instant and automated.</p>
            <p><strong>Seamless CRM Integration:</strong> Connect with your existing tools—Propello AI fits right in.</p>
            <p><strong>Reliable & Consistent:</strong> Our bot works 24/7, never forgets, and delivers consistent customer experience every time.</p>
          </div>
        </div>
      ) : (
        <>
          <h2 className="working-title">How It Works</h2>
          <div className="steps-image-wrapper">
            <img
              src="/website steps.png"
              alt="How it works steps"
              className="steps-image"
            />
          </div>
          <button className="learn-more-btn" onClick={() => setShowLearnMore(true)}>
            Learn More <FaArrowRight />
          </button>
        </>
      )}

      <style>{`
        .working-section {
          padding: 3rem 1rem;
          font-family: var(--font-body);
          background: rgba(0, 0, 0, 0.3);
          color: #E5E9F0;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
        }

        .working-title, .learn-title {
          font-size: 2.2rem;
          margin-bottom: 2rem;
          font-family: var(--font-heading);
          background: linear-gradient(90deg, #5D9EFF, #A3E4D7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .steps-image-wrapper {
          width: 100%;
          max-width: 1200px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .steps-image {
          width: 100%;
          height: auto;
          border-radius: 16px;
          box-shadow: 0 0 15px rgba(93, 158, 255, 0.5);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .steps-image:hover {
          transform: scale(1.02);
          box-shadow: 0 0 20px rgba(93, 158, 255, 0.7);
        }

        .learn-more-btn {
          position: absolute;
          bottom: 20px;
          right: 20px;
          padding: 0.7rem 1.2rem;
          font-size: 0.9rem;
          font-weight: bold;
          background: linear-gradient(90deg, #5D9EFF, #A3E4D7);
          color: black;
          border: none;
          border-radius: 25px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: transform 0.3s ease, opacity 0.5s ease;
        }

        .learn-more-btn:hover {
          transform: scale(1.05);
        }

        .learn-more-section {
          max-width: 800px;
          margin: 0 auto;
          text-align: left;
          padding: 2rem 1rem;
          animation: fadeIn 0.5s ease-in-out;
        }

        .steps-container p {
          font-size: 1.05rem;
          line-height: 1.6;
          color: #e0e0e0;
          margin-bottom: 1rem;
          transition: opacity 0.5s ease-in-out;
        }

        .steps-container p strong {
          color: #5D9EFF;
        }

        .back-btn {
          background: none;
          border: none;
          color: #5D9EFF;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          margin-bottom: 1.5rem;
        }

        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .working-title, .learn-title {
            font-size: 1.8rem;
          }

          .steps-container p {
            font-size: 0.95rem;
          }

          .learn-more-btn {
            bottom: 15px;
            right: 15px;
            padding: 0.65rem 1rem;
            font-size: 0.85rem;
          }
        }

        @media (max-width: 600px) {
          .working-title, .learn-title {
            font-size: 1.6rem;
          }

          .steps-container p {
            font-size: 0.9rem;
          }

          .learn-more-btn {
            bottom: 10px;
            right: 10px;
            padding: 0.6rem 1rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Working;
