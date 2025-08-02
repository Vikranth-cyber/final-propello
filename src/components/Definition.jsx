import {
  MdRecordVoiceOver,
  MdPsychologyAlt,
  MdAnalytics,
  MdConnectWithoutContact,
  MdRocketLaunch,
  MdSecurity,
} from "react-icons/md";
import { motion } from "framer-motion";

const Definition = () => {
  const features = [
    {
      icon: <MdRecordVoiceOver size={40} />,
      title: "Humanlike Conversations",
      description:
        "Realistic AI that speaks naturally, understands context, and adapts tone.",
    },
    {
      icon: <MdPsychologyAlt size={40} />,
      title: "Sales Psychology Engine",
      description:
        "Built-in NEPQ-style logic to guide buyers with persuasive dialogues.",
    },
    {
      icon: <MdAnalytics size={40} />,
      title: "Smart Call Analytics",
      description:
        "Get real-time data on sentiment, intent, and conversion performance.",
    },
    {
      icon: <MdConnectWithoutContact size={40} />,
      title: "Omnichannel Presence",
      description:
        "Connect via Voice, WhatsApp, SMS, and Email — all in one platform.",
    },
    {
      icon: <MdRocketLaunch size={40} />,
      title: "Instant Deployment",
      description:
        "Go live in 48 hours. No technical setup or coding skills required.",
    },
    {
      icon: <MdSecurity size={40} />,
      title: "Enterprise-Grade Security",
      description:
        "Your data is protected with end-to-end encryption and role-based access.",
    },
    // Optional: Add 3 more for full 3x3
  ];

  return (
    <section className="definition-section" id="definition">
      <div className="definition-container">
        <motion.div
          className="main-content"
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="gradient-text title-heading">What is Propello AI?</h2>
          <div className="definition-grid">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="feature-card"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="feature-icon">{f.icon}</div>
                <h3 className="feature-title gradient-text">{f.title}</h3>
                <p className="feature-desc">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .definition-section {
          padding: 3rem 1rem;
          background: #ffffff;
          color: #333333;
          font-family: 'Segoe UI', sans-serif;
          text-align: center;
        }

        .definition-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .gradient-text {
          background: linear-gradient(90deg, #FC466B, #3F5EFB);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .title-heading {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 2.8rem;
        }

        .definition-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .feature-card {
          background: #f9f9ff;
          border-radius: 16px;
          padding: 2rem 1.6rem;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
          border: 1px solid #e3e7fd;
          min-height: 260px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .feature-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 28px rgba(63, 94, 251, 0.15);
        }

        .feature-icon {
          font-size: 2.5rem;
          font-weight: bold;
          color: #FC466B;
          margin-bottom: 1rem;
        }

        .feature-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .feature-desc {
          font-size: 0.95rem;
          color: #555555;
          line-height: 1.5;
        }

        @media (max-width: 1000px) {
          .definition-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .title-heading {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 600px) {
          .definition-grid {
            grid-template-columns: 1fr;
            gap: 1.2rem;
          }

          .title-heading {
            font-size: 2rem;
          }

          .feature-card {
            padding: 1.4rem 1rem;
          }

          .feature-title {
            font-size: 1.1rem;
          }

          .feature-desc {
            font-size: 0.88rem;
          }

          .feature-icon {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Definition;
