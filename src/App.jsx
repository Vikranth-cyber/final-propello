import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Definition from './components/Definition';
import Services from './components/Services';
import Working from './components/Working';
import Demo from './components/Demo';
import Benefits from './components/Benefits';
import StatsSection from './components/StatsSection';
import Registered from './components/Registered';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';
import smoothscroll from 'smoothscroll-polyfill';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        'home', 'definition', 'services', 'working',
        'demo', 'benefits', 'stats', 'registered', 'contact'
      ];
      let current = 'home';

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    smoothscroll.polyfill(); 
  }, []);

  useEffect(() => {
    const handleParallaxScroll = () => {
      document.querySelectorAll('.parallax-layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        layer.style.transform = `translateY(${window.scrollY * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleParallaxScroll);
    return () => window.removeEventListener('scroll', handleParallaxScroll);
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const LandingPage = () => (
    <main>
      <Hero user={user} />
      <Definition />
      <Services />
      <Working />
      <Demo />
      <Benefits />
      <StatsSection />
      <Registered />
      <Contact />
    </main>
  );

  return (
    <div className="app">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="loading-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0, 0, 0, 0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              backdropFilter: 'blur(5px)',
            }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 0.8 }}
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                border: '5px solid rgba(138, 109, 255, 0.3)',
                borderTopColor: '#8a6dff',
                animation: 'spin 1s linear infinite',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="stars-container">
        {Array.from({ length: 200 }).map((_, i) => {
          const size = Math.random() > 0.9 ? 4 : Math.random() > 0.7 ? 3 : 2;
          return (
            <div
              key={i}
              className="stars"
              style={{
                top: `${Math.random() * 100}vh`,
                left: `${Math.random() * 100}vw`,
                animationDelay: `${Math.random() * 90}s, ${Math.random() * 2.5}s`,
                animationDuration: `${60 + Math.random() * 30}s, ${1 + Math.random() * 2}s`,
                opacity: 0.7 + Math.random() * 0.3,
                width: `${size}px`,
                height: `${size}px`,
                filter: 'drop-shadow(0 0 4px white)',
              }}
            />
          );
        })}
      </div>

      <Navbar
        user={user}
        setUser={setUser}
        scrolled={scrolled}
        activeSection={activeSection}
        onLogout={handleLogout}
      />

      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>

      <Footer />

      <AnimatePresence>
        {showAuthModal && (
          <motion.div
            className="auth-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0, 0, 0, 0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              backdropFilter: 'blur(10px)',
            }}
          >
            <motion.div
              className="modal-content"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              style={{
                width: '400px',
                maxWidth: '90%',
                background: 'rgba(20, 20, 20, 0.95)',
                borderRadius: '24px',
                padding: '2rem',
                color: 'white',
                boxShadow: '0 0 40px rgba(138, 109, 255, 0.4)',
                border: '1px solid rgba(138, 109, 255, 0.3)',
                position: 'relative',
              }}
            >
              <h2 style={{ textAlign: 'center' }}>
                {authMode === 'login' ? 'Login' : 'Register'}
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <button
                  onClick={() => {
                    const userData = { name: 'user', email: 'user@example.com' };
                    setUser(userData);
                    localStorage.setItem('user', JSON.stringify(userData));
                    setShowAuthModal(false);
                  }}
                  style={{
                    padding: '12px',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #8a6dff 0%, #6a5acd 100%)',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: '500',
                  }}
                >
                  Login as User
                </button>

                <button
                  onClick={() => {
                    const userData = { name: 'newuser', email: 'newuser@example.com' };
                    setUser(userData);
                    localStorage.setItem('user', JSON.stringify(userData));
                    setShowAuthModal(false);
                  }}
                  style={{
                    padding: '12px',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #6a5acd 0%, #483d8b 100%)',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: '500',
                  }}
                >
                  Register New User
                </button>

                <button
                  onClick={() => {
                    const guestData = { name: 'Guest', isGuest: true };
                    setUser(guestData);
                    localStorage.setItem('user', JSON.stringify(guestData));
                    setShowAuthModal(false);
                  }}
                  style={{
                    padding: '12px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: '500',
                  }}
                >
                  Continue as Guest
                </button>

                <button
                  onClick={() => setShowAuthModal(false)}
                  style={{
                    padding: '12px',
                    borderRadius: '8px',
                    background: 'transparent',
                    color: 'rgba(255, 255, 255, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    cursor: 'pointer',
                    fontSize: '16px',
                    marginTop: '1rem',
                  }}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;