import React from "react";

const services = [
  {
    title: "AI Sales Outreach",
    description: "Automate sales calls with our AI for personalized, scalable outreach.",
    icon: "https://cdn-icons-png.flaticon.com/512/5951/5951923.png",
  },
  {
    title: "Property Promotions",
    description: "Promote listings automatically to thousands of buyers with voice AI.",
    icon: "https://cdn-icons-png.flaticon.com/512/3079/3079057.png",
  },
  {
    title: "24/7 Reach",
    description: "Call leads anytime, expand reach, and save manual effort.",
    icon: "https://cdn-icons-png.flaticon.com/512/189/189664.png",
  },
  {
    title: "Live Insights",
    description: "Track conversations and optimize performance with real-time data.",
    icon: "https://cdn-icons-png.flaticon.com/512/2907/2907977.png",
  },
];

const Services = () => {
  return (
    <>
      <style>{`
        #services {
          padding: 4rem 1rem;
          background: transparent;
          color: #E5E9F0;
          font-family: var(--font-body);
          position: relative;
          z-index: 1;
        }

        #services h2 {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 2.5rem;
          user-select: none;
          background: linear-gradient(90deg, #5D9EFF, #A3E4D7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .services-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
        }

        .service-card {
          background: rgba(255,255,255,0.05);
          border: 2px solid #5D9EFF;
          border-radius: 16px;
          padding: 1.5rem;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          backdrop-filter: blur(10px);
          cursor: pointer;
          user-select: none;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          aspect-ratio: 1 / 1;
          width: 100%;
          box-sizing: border-box;

          box-shadow: 0 0 10px #5D9EFF, inset 0 0 5px #5D9EFF;
        }

        .service-card:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px #A3E4D7, inset 0 0 10px #A3E4D7;
        }

        .service-icon {
          width: 48px;
          height: 48px;
          margin-bottom: 1rem;
          filter: drop-shadow(0 0 6px #5D9EFF);
        }

        .service-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #A3E4D7;
          margin-bottom: 0.6rem;
        }

        .service-desc {
          font-size: 0.95rem;
          color: #9BAACB;
        }

        @media (max-width: 768px) {
          .services-container {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            max-width: 340px;
            margin: 0 auto;
          }

          .service-card {
            aspect-ratio: 1 / 1;
            padding: 1.2rem;
          }

          .service-desc {
            display: none;
          }
        }
      `}</style>

      <section id="services">
        <h2>Our Services</h2>
        <div className="services-container">
          {services.map((s, idx) => (
            <div key={idx} className="service-card">
              <img src={s.icon} alt={s.title} className="service-icon" />
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
