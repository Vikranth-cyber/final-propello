import {
  FaMicrochip,
  FaBolt,
  FaUserLock,
  FaSlidersH,
  FaSyncAlt,
  FaShieldAlt,
} from "react-icons/fa";

const Definition = () => {
  const features = [
    { icon: <FaMicrochip />, title: "Neural Architecture" },
    { icon: <FaBolt />, title: "Real-Time Processing" },
    { icon: <FaUserLock />, title: "Privacy Focused" },
    { icon: <FaSlidersH />, title: "Customizable" },
    { icon: <FaSyncAlt />, title: "Continuous Learning" },
    { icon: <FaShieldAlt />, title: "Enterprise Security" },
  ];

  return (
    <section id="definition" className="definition-container">
      <h2 className="definition-title">What is Propello AI?</h2>

      <div className="definition-bar"></div>

      <p className="definition-description">
        Propello AI delivers human-like conversational experiences through cutting-edge neural networks and emotional intelligence algorithms.
      </p>

      <div className="definition-grid">
        {features.map((f, i) => (
          <div key={i} className="feature-card">
            <div className="feature-icon">{f.icon}</div>
            <div className="feature-title">{f.title}</div>
          </div>
        ))}
      </div>

      <style>{`
        .definition-container {
          padding: 4rem 1rem;
          text-align: center;
          background: transparent;
          color: #E5E9F0;
        }

        .definition-title {
          font-size: 2.8rem;
          background: linear-gradient(90deg, #5D9EFF, #A3E4D7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: var(--font-heading);
          margin-bottom: 1.2rem;
          line-height: 1.3;
        }

        .definition-bar {
          width: 220px;
          height: 4px;
          background: linear-gradient(90deg, #5D9EFF, #A3E4D7);
          margin: 1rem auto 2.5rem;
          border-radius: 2px;
        }

        .definition-description {
          font-size: 1.2rem;
          color: #9BAACB;
          max-width: 800px;
          margin: 0 auto 3rem;
        }

        .definition-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2rem;
          max-width: 960px;
          margin: 0 auto;
        }

        .feature-card {
          background: rgba(27, 31, 59, 0.8);
          padding: 2rem;
          border-radius: 12px;
          border: 2px solid #5D9EFF;
          box-shadow:
            0 0 8px #5D9EFF,
            0 0 16px #5D9EFF,
            0 0 24px #5D9EFF,
            0 0 40px #5D9EFF;
          backdrop-filter: blur(8px);
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .feature-card:hover {
          transform: scale(1.05);
          box-shadow:
            0 0 12px #5D9EFF,
            0 0 24px #5D9EFF,
            0 0 36px #5D9EFF,
            0 0 60px #5D9EFF;
        }

        .feature-icon {
          font-size: 2rem;
          color: #5D9EFF;
          margin-bottom: 0.8rem;
          filter: drop-shadow(0 0 5px #5D9EFF);
          transition: filter 0.3s ease;
        }

        .feature-card:hover .feature-icon {
          filter: drop-shadow(0 0 8px #5D9EFF);
        }

        .feature-title {
          font-size: 1.1rem;
          font-weight: 500;
          background: linear-gradient(90deg, #5D9EFF, #A3E4D7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @media (max-width: 768px) {
          .definition-title {
            font-size: 2.1rem;
          }

          .definition-description {
            display: none;
          }

          .definition-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .definition-container {
            padding: 2.5rem 1rem;
          }

          .definition-title {
            font-size: 1.8rem;
          }

          .feature-card {
            padding: 1.5rem;
          }

          .feature-icon {
            font-size: 1.6rem;
          }

          .feature-title {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Definition;
