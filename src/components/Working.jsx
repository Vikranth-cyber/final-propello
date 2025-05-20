import React from "react";

const Working = () => {
  return (
    <section id="working" className="working-section">
      <h2 className="working-title">How It Works</h2>

      <div className="steps-image-wrapper">
        <img
          src="/website steps.png"
          alt="How it works steps"
          className="steps-image"
        />
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
          text-align: center;
        }

        .working-title {
          font-size: 2.8rem;
          margin-bottom: 3rem;
          font-family: var(--font-heading);
          background: linear-gradient(90deg, #5D9EFF, #A3E4D7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .steps-image-wrapper {
          width: 100%;
          max-width: 1200px;
          padding: 0 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .steps-image {
          width: 100%;
          max-width: 100%;
          height: auto;
          border-radius: 16px;
          box-shadow: 0 0 20px #5D9EFF, inset 0 0 10px #A3E4D7;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .steps-image:hover {
          transform: scale(1.02);
          box-shadow: 0 0 30px #5D9EFF, inset 0 0 15px #A3E4D7;
        }

        /* Responsive Typography */
        @media (max-width: 1024px) {
          .working-title {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .working-title {
            font-size: 2.2rem;
          }

          .steps-image-wrapper {
            padding: 0 0.5rem;
          }
        }

        @media (max-width: 480px) {
          .working-title {
            font-size: 1.8rem;
          }

          .steps-image {
            border-radius: 12px;
          }
        }

        @media (max-width: 360px) {
          .working-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Working;
