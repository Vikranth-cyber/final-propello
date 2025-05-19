import {
  FaComments,
  FaBrain,
  FaChartLine,
  FaSatelliteDish,
  FaRocket,
  FaLock,
} from "react-icons/fa";

const Definition = () => {
  const features = [
    {
      icon: <FaComments />,
      title: "Natural Voice AI",
      description:
        "Speaks in humanlike tones with emotion-aware responses across multiple languages.",
    },
    {
      icon: <FaBrain />,
      title: "Neuro-Emotional Dialogues",
      description:
        "Uses persuasive questioning techniques to drive high-quality sales conversations.",
    },
    {
      icon: <FaChartLine />,
      title: "Real-Time Insights",
      description:
        "Monitor call outcomes, sentiment, conversion rates & campaign performance live.",
    },
    {
      icon: <FaSatelliteDish />,
      title: "Multi-Channel Reach",
      description: "Voice, SMS, WhatsApp & Email — all automated and integrated.",
    },
    {
      icon: <FaRocket />,
      title: "Fast Deployment",
      description: "Go live in days — no complex setup or code required.",
    },
    {
      icon: <FaLock />,
      title: "Enterprise Security",
      description:
        "End-to-end encryption with strict access controls and secure data storage.",
    },
  ];

  return (
    <section id="definition" className="definition-container">
      <h2 className="definition-title">What is Propello AI?</h2>
      <div className="definition-bar"></div>

      <div className="definition-grid">
        {features.map((f, i) => (
          <div key={i} className="feature-card">
            <div className="feature-icon">{f.icon}</div>
            <div className="feature-title">{f.title}</div>
            <p className="feature-desc">{f.description}</p>
          </div>
        ))}
      </div>

      <style>{`
        .definition-container {
          padding: 3rem 1rem;
          color: #e0e0e0;
          text-align: center;
        }

        .definition-title {
          font-size: 2.5rem;
          background: linear-gradient(90deg, #5D9EFF, #A3E4D7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
        }

        .definition-bar {
          width: 180px;
          height: 4px;
          background: linear-gradient(90deg, #5D9EFF, #A3E4D7);
          margin: 0 auto 2.5rem;
          border-radius: 2px;
        }

        .definition-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .feature-card {
          background: rgba(0, 0, 0, 0.4);
          border-radius: 16px;
          padding: 1.8rem 1.2rem;
          box-shadow: 0 0 12px rgba(93, 158, 255, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .feature-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 0 20px rgba(93, 158, 255, 0.6);
        }

        .feature-icon {
          font-size: 2rem;
          color: #5D9EFF;
          margin-bottom: 1rem;
          filter: drop-shadow(0 0 6px #5D9EFF);
        }

        .feature-title {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 0.6rem;
          background: linear-gradient(90deg, #5D9EFF, #A3E4D7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .feature-desc {
          font-size: 0.95rem;
          color: #cfd8e3;
        }

        @media (max-width: 992px) {
          .definition-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .definition-grid {
            grid-template-columns: 1fr;
          }

          .definition-title {
            font-size: 2rem;
          }

          .feature-icon {
            font-size: 1.7rem;
          }

          .feature-title {
            font-size: 1.1rem;
          }

          .feature-desc {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Definition;
