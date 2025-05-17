import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Definition from './components/Definition';
import Services from './components/Services';
import Working from './components/Working';
import Demo from './components/Demo';
import Benefits from './components/Benefits';
import Registered from './components/Registered';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';
import './styles/animations.css';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        'home', 'definition', 'services', 'working',
        'demo', 'benefits', 'registered', 'contact'
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

  // Parallax scroll for stars
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

  const handleLogin = (credentials) => {
    setUser({ name: credentials.username });
    setShowAuthModal(false);
  };

  const handleRegister = (credentials) => {
    setUser({ name: credentials.username });
    setShowAuthModal(false);
  };

  const handleGuest = () => {
    setUser({ name: 'Guest' });
    setShowAuthModal(false);
  };

  return (
    <div className="container">
      <div className="app">
        {/* Animated Stars */}
        <div className="stars-container">
          {Array.from({ length: 600 }).map((_, i) => {
            const size = Math.random() > 0.85 ? 4 : 3;
            return (
              <div
                key={i}
                className="stars"
                style={{
                  top: `${Math.random() * 100}vh`,
                  left: `${Math.random() * 100}vw`,
                  animationDelay: `${Math.random() * 90}s, ${Math.random() * 3}s`,
                  animationDuration: `${60 + Math.random() * 30}s, 3s`,
                  opacity: 0.6 + Math.random() * 0.4,
                  width: `${size}px`,
                  height: `${size}px`,
                }}
              />
            );
          })}
        </div>

        {/* Navbar */}
        <Navbar
          user={user}
          scrolled={scrolled}
          activeSection={activeSection}
          onAuthClick={() => setShowAuthModal(true)}
          onLogout={() => setUser(null)}
        />

        {/* Sections (each handles its own ID + padding) */}
        <main>
          <Hero user={user} />
          <Definition />
          <Services />
          <Working />
          <Demo />
          <Benefits />
          <Registered />
          <Contact />
        </main>

        <Footer />

        {/* Auth Modal */}
        {showAuthModal && (
          <div className="auth-modal">
            <div className="modal-content">
              <button className="close-btn" onClick={() => setShowAuthModal(false)}>&times;</button>
              {authMode === 'login' ? (
                <div className="auth-form">
                  <h3>Sign In</h3>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin({
                      username: e.target.username.value,
                      password: e.target.password.value,
                    });
                  }}>
                    <input type="text" name="username" placeholder="Username" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <button type="submit" className="btn-primary">Sign In</button>
                  </form>
                  <p>
                    Don't have an account?{' '}
                    <button className="text-btn" onClick={() => setAuthMode('register')}>Create one</button>
                  </p>
                  <button className="btn-outline" onClick={handleGuest}>Continue as Guest</button>
                </div>
              ) : (
                <div className="auth-form">
                  <h3>Create Account</h3>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    handleRegister({
                      username: e.target.username.value,
                      email: e.target.email.value,
                      password: e.target.password.value,
                    });
                  }}>
                    <input type="text" name="username" placeholder="Username" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <button type="submit" className="btn-primary">Register</button>
                  </form>
                  <p>
                    Already have an account?{' '}
                    <button className="text-btn" onClick={() => setAuthMode('login')}>Sign In</button>
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
