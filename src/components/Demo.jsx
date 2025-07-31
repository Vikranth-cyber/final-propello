import { FaPlay, FaCode, FaDesktop } from 'react-icons/fa';

const Demo = () => {
  return (
    <>
      <style>{`
        /* Responsive container */
        #demo .container {
          background: white;
          padding: 4rem 2rem;
          border-radius: 48px;
          max-width: 1200px;
          width: 100%;
          position: relative;
          border: 2px solid #FFA726;
          box-shadow:
            0 0 15px #FFB74D66,
            inset 0 0 30px #FFB74D33;
          font-family: 'Poppins', sans-serif;
          transition: width 0.3s ease;
        }

        #demo .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          align-items: center;
          flex-wrap: wrap;
        }

        #demo .video-box {
          position: relative;
          padding-top: 56.25%;
          background: #f5f5f5;
          border-radius: 32px;
          border: 1px solid #FFB74D;
          box-shadow: inset 0 0 20px #FFB74D33;
        }

        #demo .play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle at center, #FFE0B2 10%, #FFA726 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          color: #333;
          cursor: pointer;
          transition: transform 0.3s ease;
          box-shadow:
            0 0 10px #FFA726AA,
            0 0 25px #FFE0B2CC;
        }

        #demo .play-btn:hover,
        #demo .play-btn:active {
          transform: translate(-50%, -50%) scale(1.1);
        }

        #demo .features {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        #demo .feature-item {
          display: flex;
          gap: 1rem;
          align-items: center;
          background: white;
          padding: 1rem;
          border-radius: 20px;
          border: 1px solid #FFB74D;
          box-shadow: inset 0 0 15px #FFB74D33;
        }

        #demo .feature-icon {
          font-size: 2rem;
          color: #FF9800;
        }

        #demo .feature-text h3 {
          font-size: 1.3rem;
          color: #E65100;
          margin: 0;
        }

        #demo .feature-text p {
          color: #333;
          margin: 0;
        }

        #demo .demo-btn {
          margin-top: 1rem;
          align-self: start;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(to right, #FF9800, #FFB74D);
          padding: 1rem 2.2rem;
          font-weight: 600;
          color: white;
          font-size: 1rem;
          border-radius: 999px;
          border: none;
          box-shadow:
            0 0 15px #FF980088,
            0 0 25px #FFB74DBB;
          transition: transform 0.3s ease;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
        }

        #demo .demo-btn:hover,
        #demo .demo-btn:active {
          transform: scale(1.05);
        }

        #demo h2 {
          text-align: center;
          font-size: 2.8rem;
          background: linear-gradient(90deg, #FF9800, #FFB74D);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: 'Poppins', sans-serif;
          margin-bottom: 3rem;
          font-weight: 700;
          text-shadow:
            0 0 5px #FF980088,
            0 0 10px #FFB74DBB;
        }

        @media (max-width: 900px) {
          #demo .container {
            max-width: 90%;
            padding: 3rem 1.5rem;
            border-radius: 36px;
          }

          #demo .grid {
            grid-template-columns: 1fr;
          }

          #demo .play-btn {
            width: 80px;
            height: 80px;
            font-size: 2rem;
          }

          #demo h2 {
            font-size: 2.4rem;
            margin-bottom: 2rem;
          }

          #demo .feature-text h3 {
            font-size: 1.1rem;
          }

          #demo .feature-text p {
            font-size: 0.9rem;
          }

          #demo .demo-btn {
            padding: 0.8rem 1.8rem;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          #demo .container {
            max-width: 95%;
            padding: 2rem 1rem;
            border-radius: 24px;
          }

          #demo h2 {
            font-size: 2rem;
          }

          #demo .play-btn {
            width: 70px;
            height: 70px;
            font-size: 1.8rem;
          }

          #demo .feature-text h3 {
            font-size: 1rem;
          }

          #demo .feature-text p {
            font-size: 0.8rem;
          }

          #demo .demo-btn {
            padding: 0.7rem 1.5rem;
            font-size: 0.85rem;
          }
        }
      `}</style>

      <section
        id="demo"
        style={{
          padding: '6rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'white',
        }}
      >
        <div className="container">
          <h2>Experience Propello AI in Action</h2>

          <div className="grid">
            {/* Video Box */}
            <div className="video-box">
              <div className="play-btn">
                <FaPlay />
              </div>
            </div>

            {/* Features + Button */}
            <div className="features">
              <div className="feature-item">
                <FaCode className="feature-icon" />
                <div className="feature-text">
                  <h3>Propello AI makes every call count</h3>
                  <p>Watch how our AI agent processes real calls with clarity, empathy and precision.</p>
                </div>
              </div>
              <button className="demo-btn">
                <FaDesktop />
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Demo;