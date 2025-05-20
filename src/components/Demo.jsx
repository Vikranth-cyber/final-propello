import { FaPlay, FaCode, FaDesktop } from 'react-icons/fa';

const Demo = () => {
  return (
    <>
      <style>{`
        /* Responsive container */
        #demo .container {
          background: rgba(0, 0, 0, 0.4); /* transparent black */
          padding: 4rem 2rem;
          border-radius: 48px;
          max-width: 1200px;
          width: 100%;
          position: relative;
          /* Removed border and box-shadow for shadow and border */
          /* Add subtle lighting/glow with text-shadow and inner glow */
          box-shadow:
            0 0 15px #5D9EFF66,
            inset 0 0 30px #5D9EFF33;
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
          background: #1e1e1e;
          border-radius: 32px;
          /* subtle inner glow */
          box-shadow: inset 0 0 20px #5D9EFF33;
        }

        #demo .play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle at center, #A3E4D7 10%, #5D9EFF 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          color: #0B0C2A;
          cursor: pointer;
          transition: transform 0.3s ease;
          /* subtle glow lighting instead of shadow */
          box-shadow:
            0 0 10px #5D9EFFAA,
            0 0 25px #A3E4D7CC;
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
          background: rgba(0, 0, 0, 0.4); /* transparent black */
          padding: 1rem;
          border-radius: 20px;
          /* subtle lighting effect */
          box-shadow: inset 0 0 15px #5D9EFF33;
        }

        #demo .feature-icon {
          font-size: 2rem;
          color: #5D9EFF;
        }

        #demo .feature-text h3 {
          font-size: 1.3rem;
          color: #A3E4D7;
          margin: 0;
        }

        #demo .feature-text p {
          color: #E5E9F0;
          margin: 0;
        }

        #demo .demo-btn {
          margin-top: 1rem;
          align-self: start;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(to right, #5D9EFF, #A3E4D7);
          padding: 1rem 2.2rem;
          font-weight: 600;
          color: #0B0C2A;
          font-size: 1rem;
          border-radius: 999px;
          border: none;
          /* subtle lighting glow instead of shadow */
          box-shadow:
            0 0 15px #5D9EFF88,
            0 0 25px #A3E4D7BB;
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
          background: linear-gradient(90deg, #5D9EFF, #A3E4D7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: 'Poppins', sans-serif;
          margin-bottom: 3rem;
          font-weight: 700;
          /* subtle text glow */
          text-shadow:
            0 0 5px #5D9EFF88,
            0 0 10px #A3E4D7BB;
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
          background: 'transparent',
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
