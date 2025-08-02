import { FaPlay, FaCode, FaDesktop } from 'react-icons/fa';

const Demo = () => {
  return (
    <>
      <style>{`
        /* Responsive container */
        #demo .container {
          background: white;
          padding: 5rem 3rem;
          border-radius: 48px;
          max-width: 1300px;
          width: 100%;
          position: relative;
          border: 2px solid rgba(252, 70, 107, 0.2);
          box-shadow:
            0 0 30px rgba(63, 94, 251, 0.1),
            inset 0 0 40px rgba(252, 70, 107, 0.1);
          font-family: 'Poppins', sans-serif;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        #demo .container::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at center, rgba(252, 70, 107, 0.05) 0%, transparent 70%);
          z-index: 0;
        }

        #demo .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        #demo .video-box {
          position: relative;
          padding-top: 56.25%;
          background: linear-gradient(135deg, #f8f9fa, #f1f3f5);
          border-radius: 32px;
          border: 1px solid rgba(252, 70, 107, 0.3);
          box-shadow: 
            inset 0 0 25px rgba(252, 70, 107, 0.1),
            0 10px 30px rgba(63, 94, 251, 0.1);
          overflow: hidden;
          transition: all 0.3s ease;
        }

        #demo .video-box:hover {
          transform: translateY(-5px);
          box-shadow: 
            inset 0 0 25px rgba(252, 70, 107, 0.1),
            0 15px 40px rgba(63, 94, 251, 0.15);
        }

        #demo .play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
          width: 120px;
          height: 120px;
          background: radial-gradient(circle at center, rgba(252, 70, 107, 0.9) 0%, rgba(63, 94, 251, 0.9) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow:
            0 0 20px rgba(252, 70, 107, 0.5),
            0 0 40px rgba(63, 94, 251, 0.5);
          border: 2px solid white;
        }

        #demo .play-btn:hover,
        #demo .play-btn:active {
          transform: translate(-50%, -50%) scale(1.1);
          box-shadow:
            0 0 30px rgba(252, 70, 107, 0.7),
            0 0 50px rgba(63, 94, 251, 0.7);
        }

        #demo .features {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        #demo .feature-item {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
          background: white;
          padding: 1.5rem;
          border-radius: 24px;
          border: 1px solid rgba(252, 70, 107, 0.2);
          box-shadow: 
            0 5px 20px rgba(63, 94, 251, 0.05),
            inset 0 0 20px rgba(252, 70, 107, 0.05);
          transition: all 0.3s ease;
        }

        #demo .feature-item:hover {
          transform: translateY(-5px);
          box-shadow: 
            0 10px 30px rgba(63, 94, 251, 0.1),
            inset 0 0 20px rgba(252, 70, 107, 0.1);
        }

        #demo .feature-icon {
          font-size: 2.5rem;
          background: linear-gradient(135deg, #FC466B, #3F5EFB);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          flex-shrink: 0;
          margin-top: 0.3rem;
        }

        #demo .feature-text h3 {
          font-size: 1.5rem;
          background: linear-gradient(90deg, #FC466B, #3F5EFB);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0 0 0.5rem 0;
          font-weight: 700;
        }

        #demo .feature-text p {
          color: #555;
          margin: 0;
          font-size: 1.05rem;
          line-height: 1.6;
        }

        #demo .demo-btn {
          margin-top: 1rem;
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          background: linear-gradient(to right, #FC466B, #3F5EFB);
          padding: 1.2rem 2.5rem;
          font-weight: 600;
          color: white;
          font-size: 1.1rem;
          border-radius: 999px;
          border: none;
          box-shadow:
            0 0 20px rgba(252, 70, 107, 0.3),
            0 0 40px rgba(63, 94, 251, 0.2);
          transition: all 0.3s ease;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        #demo .demo-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, #3F5EFB, #FC466B);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        #demo .demo-btn:hover,
        #demo .demo-btn:active {
          transform: translateY(-3px);
          box-shadow:
            0 0 30px rgba(252, 70, 107, 0.4),
            0 0 50px rgba(63, 94, 251, 0.3);
        }

        #demo .demo-btn:hover::before {
          opacity: 1;
        }

        #demo h2 {
          text-align: center;
          font-size: 3.2rem;
          background: linear-gradient(90deg, #FC466B, #3F5EFB);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: 'Poppins', sans-serif;
          margin-bottom: 3.5rem;
          font-weight: 800;
          position: relative;
          display: inline-block;
          padding-bottom: 1rem;
        }

        #demo h2::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 4px;
          background: linear-gradient(90deg, #FC466B, #3F5EFB);
          border-radius: 2px;
        }

        @media (max-width: 1200px) {
          #demo .container {
            padding: 4rem 2.5rem;
          }
          
          #demo .grid {
            gap: 2rem;
          }
          
          #demo .play-btn {
            width: 100px;
            height: 100px;
            font-size: 2.5rem;
          }
          
          #demo h2 {
            font-size: 2.8rem;
          }
          
          #demo .feature-item {
            padding: 1.25rem;
          }
          
          #demo .feature-icon {
            font-size: 2rem;
          }
          
          #demo .feature-text h3 {
            font-size: 1.3rem;
          }
          
          #demo .demo-btn {
            padding: 1rem 2rem;
          }
        }

        @media (max-width: 992px) {
          #demo .container {
            max-width: 95%;
            padding: 3.5rem 2rem;
            border-radius: 36px;
          }
          
          #demo .grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          #demo .video-box {
            padding-top: 75%;
          }
          
          #demo .play-btn {
            width: 90px;
            height: 90px;
            font-size: 2.2rem;
          }
          
          #demo h2 {
            font-size: 2.5rem;
            margin-bottom: 2.5rem;
          }
          
          #demo .features {
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          #demo .container {
            padding: 3rem 1.5rem;
          }
          
          #demo h2 {
            font-size: 2.2rem;
            margin-bottom: 2rem;
          }
          
          #demo .feature-item {
            padding: 1.2rem;
            gap: 1.2rem;
          }
          
          #demo .feature-icon {
            font-size: 1.8rem;
          }
          
          #demo .feature-text h3 {
            font-size: 1.2rem;
          }
          
          #demo .feature-text p {
            font-size: 0.95rem;
          }
          
          #demo .demo-btn {
            padding: 0.9rem 1.8rem;
            font-size: 1rem;
          }
        }

        @media (max-width: 576px) {
          #demo .container {
            padding: 2.5rem 1.5rem;
            border-radius: 28px;
          }
          
          #demo h2 {
            font-size: 2rem;
            padding-bottom: 0.8rem;
          }
          
          #demo h2::after {
            width: 80px;
            height: 3px;
          }
          
          #demo .play-btn {
            width: 80px;
            height: 80px;
            font-size: 2rem;
          }
          
          #demo .feature-item {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 1.5rem;
          }
          
          #demo .feature-icon {
            margin-top: 0;
          }
          
          #demo .demo-btn {
            align-self: center;
          }
        }

        @media (max-width: 480px) {
          #demo .container {
            padding: 2rem 1.25rem;
            border-radius: 24px;
          }
          
          #demo h2 {
            font-size: 1.8rem;
          }
          
          #demo .feature-text h3 {
            font-size: 1.1rem;
          }
          
          #demo .feature-text p {
            font-size: 0.9rem;
          }
          
          #demo .demo-btn {
            padding: 0.8rem 1.5rem;
            font-size: 0.95rem;
          }
        }

        @media (max-width: 400px) {
          #demo h2 {
            font-size: 1.6rem;
          }
          
          #demo .play-btn {
            width: 70px;
            height: 70px;
            font-size: 1.8rem;
          }
        }
      `}</style>

      <section
        id="demo"
        style={{
          padding: '7rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'white',
          position: 'relative',
          overflow: 'hidden',
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
              
              <div className="feature-item">
                <FaDesktop className="feature-icon" />
                <div className="feature-text">
                  <h3>Seamless Integration</h3>
                  <p>See how our solution integrates effortlessly with your existing systems and workflows.</p>
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