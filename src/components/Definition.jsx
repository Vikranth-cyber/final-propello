import {
  FaComments,
  FaQuestionCircle,
  FaChartPie,
  FaGlobe,
  FaBolt,
  FaShieldAlt,
} from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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


  const [showAbout, setShowAbout] = useState(false);

  return (
    <section className="slide-wrapper" id="definition">
      <div className="slide-container">
        <AnimatePresence mode="wait">
          {!showAbout ? (
            <motion.div
              key="main"
              className="main-content"
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
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

              <div className="about-btn-container">
                <button onClick={() => setShowAbout(true)} className="about-btn">
                  About Us <FaComments />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="about"
              className="about-panel"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="about-slide-content">
                <button onClick={() => setShowAbout(false)} className="back-btn">
                  &larr; Back
                </button>
                <h2>Empowering Businesses with Smart Voice Automation</h2>
                <div className="about-slide-text">
                  <p>
                    At Propello AI, we're redefining how businesses connect with customers through powerful, 
                    AI-driven voice automation. Our intelligent voice bots handle customer queries, 
                    appointment bookings, and order tracking — seamlessly and naturally.
                  </p>
                  <p>
                    Whether you're a real estate builder, bank or a local clinic, Propello AI gives you 
                    an always-on voice assistant that speaks your customer's language — literally. 
                    With robust integration capabilities and fast onboarding, we make intelligent automation 
                    accessible to every business.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

     <style>{`
  .slide-wrapper {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    color: #e0e0e0;
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

 .main-content,
  .about-panel {
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
    background: linear-gradient(90deg, #5D9EFF, #A3E4D7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 0;
  }

  .definition-bar {
    width: 120px;
    height: 3px;
    background: linear-gradient(90deg, #5D9EFF, #A3E4D7);
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
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 1.5rem 1rem;
    text-align: center;
    min-height: 180px;
    box-shadow: 0 0 6px rgba(255,255,255,0.1);
    transition: 0.3s ease;
    overflow: hidden;
  }

  .feature-card:hover {
    transform: scale(1.03);
    box-shadow: 0 0 10px #5D9EFF;
  }

  .feature-icon {
    font-size: 1.6rem;
    color: #A3E4D7;
  }

  .feature-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0.5rem 0;
    background: linear-gradient(90deg, #5D9EFF, #A3E4D7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .feature-desc {
    font-size: 0.9rem;
    color: #cfd8e3;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .about-btn-container {
  position: absolute;
  bottom: 20px;  
  right: 20px; 
  z-index: 9;
  margin-top: 0;  
}

  .about-btn {
    padding: 0.7rem 1.4rem;
    font-size: 1rem;
    font-weight: bold;
    background: linear-gradient(90deg, #5D9EFF, #A3E4D7);
    color: black;
    border-radius: 25px;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    box-shadow: 0 0 6px #5D9EFF;
    border: none;
    cursor: pointer;
  }

  .about-panel {
    background-color: rgba(0, 0, 0, 0.4);
  }

  .about-slide-content {
    max-width: 900px;
    margin: auto;
    padding: 2rem 1rem;
  }

  .about-slide-content h2 {
    font-size: 2.4rem;
    margin-bottom: 2rem;
    background: linear-gradient(90deg, #5D9EFF, #A3E4D7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .about-slide-text {
    font-size: 1.3rem;
    line-height: 2;
  }

  .about-slide-text p {
    margin-bottom: 1.5rem;
  }

  .back-btn {
    background: none;
    border: none;
    color: #A3E4D7;
    font-size: 1.2rem;
    cursor: pointer;
    margin-bottom: 2rem;
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
    
  .about-btn-container {
    bottom: 15px;  
    right: 15px;   
  }
  }

  @media (max-width: 480px) {
    .about-btn {
      font-size: 0.85rem;
      padding: 0.5rem 1rem;
    }

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

    .about-slide-content h2 {
      font-size: 1.6rem;
    }

    .about-slide-text {
      font-size: 1rem;
    }
  }
`}</style>

    </section>
  );
};

export default Definition;