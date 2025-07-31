import {
  FaComments,
  FaQuestionCircle,
  FaChartPie,
  FaGlobe,
  FaBolt,
  FaShieldAlt,
} from "react-icons/fa";

import { motion } from "framer-motion";

const Definition = () => {
 const features = [
  {
    icon: <FaComments />,
    title: "Humanlike Conversations",
    description: "Realistic AI that speaks naturally, understands context, and adapts tone.",
  },
  {
    icon: <FaQuestionCircle />,
    title: "Sales Psychology Engine",
    description: "Built-in NEPQ-style logic to guide buyers with persuasive dialogues.",
  },
  {
    icon: <FaChartPie />,
    title: "Smart Call Analytics",
    description: "Get real-time data on sentiment, intent, and conversion performance.",
  },
  {
    icon: <FaGlobe />,
    title: "Omnichannel Presence",
    description: "Connect via Voice, WhatsApp, SMS, and Email — all in one platform.",
  },
  {
    icon: <FaBolt />,
    title: "Instant Deployment",
    description: "Go live in 48 hours. No technical setup or coding skills required.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Enterprise-Grade Security",
    description: "Your data is protected with end-to-end encryption and role-based access.",
  },
];

  return (
    <section className="slide-wrapper" id="definition">
      <div className="slide-container">
        <motion.div
          className="main-content"
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="definition-content">
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
          </div>
        </motion.div>
      </div>

     <style>{`
  .slide-wrapper {
    width: 100%;
    background-color: #ffffff;
    color: #333333;
    font-family: var(--font-body);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
  }

   .slide-container {
    width: 100%;
    max-width: 1200px;
    position: relative;
    padding: 0 1rem;
  }

 .main-content {
    width: 100%;
    min-height: auto;
    position: relative;
  }

 .definition-content {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 2rem; 
}

  .definition-title {
    font-size: 2.2rem;
    background: linear-gradient(90deg, #FF7B25, #FFA836);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 0;
  }

  .definition-bar {
    width: 120px;
    height: 3px;
    background: linear-gradient(90deg, #FF7B25, #FFA836);
    margin: 1rem auto 1.2rem;
    border-radius: 2px;
  }

 .definition-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 0 0.5rem;
  margin-bottom: 1rem; 
}

  .feature-card {
    background: #FFF5EE;
    border-radius: 10px;
    padding: 1.5rem 1rem;
    text-align: center;
    min-height: 180px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: 0.3s ease;
    overflow: hidden;
    border: 1px solid #FFE4D1;
  }

  .feature-card:hover {
    transform: scale(1.03);
    box-shadow: 0 0 15px rgba(255, 123, 37, 0.3);
  }

  .feature-icon {
    font-size: 1.6rem;
    color: #FF7B25;
  }

  .feature-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0.5rem 0;
    color: #FF7B25;
  }

  .feature-desc {
    font-size: 0.9rem;
    color: #555555;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 768px) {
    .definition-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .slide-container {
      padding: 0 1rem;
    }
  }

  @media (max-width: 480px) {
    .definition-grid {
      grid-template-columns: 1fr;
    }
    .main-content {
      padding: 0.5rem;
    }
    .definition-content {
      padding-bottom: 1.5rem; 
    }
  }

  @media (max-width: 480px) {
    .feature-icon {
      font-size: 1.3rem;
    }

    .feature-title {
      font-size: 0.9rem;
    }

    .feature-desc {
      font-size: 0.75rem;
    }

    .definition-title {
      font-size: 1.5rem;
    }
  }
`}</style>

    </section>
  );
};

export default Definition;