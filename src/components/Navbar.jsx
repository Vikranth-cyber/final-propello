import { useState, useEffect } from 'react';
import { FaRobot, FaTimes, FaBars, FaGoogle } from 'react-icons/fa';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const Navbar = ({ activeSection }) => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('signin');
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [error, setError] = useState(null);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'definition', label: 'Features' },
    { id: 'services', label: 'Our Services' },
    { id: 'working', label: 'How It Works' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'contact', label: 'Contact Us' },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const escHandler = (e) => {
      if (e.key === 'Escape') {
        setShowModal(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', escHandler);
    return () => window.removeEventListener('keydown', escHandler);
  }, []);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  const openModal = () => {
    setActiveTab('signin');
    setShowModal(true);
    setMenuOpen(false);
    setError(null);
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');

    try {
      const response = awaitfetch('/api/...'
, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Sign in failed');
      }

      const data = await response.json();
      setUser({ name: data.user.username, email: data.user.email });
      localStorage.setItem('token', data.token);
      setShowModal(false);
    } catch (err) {
      console.error('Sign in error:', err);
      setError(err.message || 'Failed to connect to server');
    }
  };

  const handleSignup = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const username = formData.get('username');
  const email = formData.get('email');
  const password = formData.get('password');

  try {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Sign up failed');
    }

    setShowModal(false);
    setActiveTab('signin');
    setError('Account created successfully! Please sign in.');
  } catch (err) {
    console.error('Sign up error:', err);
    setError(err.message || 'Failed to connect to server');
  }
};

const handleGoogleSignIn = async (credentialResponse) => {
  try {
    if (!credentialResponse.credential) {
      throw new Error('Google credential missing');
    }

    const response = await fetch('/api/auth/google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ credential: credentialResponse.credential }),
    });

    const rawText = await response.text(); // Get raw response for debugging

    if (!response.ok) {
      console.error('Google sign-in error response:', rawText);
      throw new Error('Google sign-in failed');
    }

    try {
      const data = JSON.parse(rawText); // Ensure valid JSON before parsing
      if (data.user && data.token) {
        setUser({
          name: data.user.name || data.user.username,
          email: data.user.email
        });
        localStorage.setItem('token', data.token);
        setShowModal(false);
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (jsonError) {
      console.error('JSON parsing error:', rawText);
      throw new Error('Server returned an invalid JSON response');
    }
  } catch (err) {
    console.error('Google sign-in error:', err);
    setError(err.message || 'Failed to sign in with Google');
  }
};

const handleLogout = () => {
  setUser(null);
  localStorage.removeItem('token');
  setShowModal(false);
};

useEffect(() => {
  const token = localStorage.getItem('token');
  if (token) {
    fetch('/api/verify', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error('Token verification failed');
        return res.json();
      })
      .then((data) => {
        if (data.user) {
          setUser({ name: data.user.username, email: data.user.email });
        }
      })
      .catch((err) => {
        console.error('Token verification error:', err);
        localStorage.removeItem('token');
      });
  }
}, []);


  return (
    <GoogleOAuthProvider clientId="355871214182-btv1jgg73muhg8inefr8e7lv6755p5dq.apps.googleusercontent.com">
      <nav style={{ ...styles.navbar, ...(isMobile ? styles.mobileNavbar : {}) }}>
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          style={styles.brand}
        >
          <FaRobot />
          PROPELLO AI
        </a>

        {!isMobile && (
          <div style={styles.centerNav}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                style={{
                  ...styles.navLink,
                  color: activeSection === item.id ? '#E5E9F0' : '#9BAACB',
                  textShadow: activeSection === item.id
                    ? '0 0 8px rgba(93, 158, 255, 0.6)'
                    : 'none',
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}

        {!isMobile && (
          <div style={styles.rightArea}>
            {!user ? (
              <button onClick={openModal} style={styles.signInBtn}>
                Sign In
              </button>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: '#E5E9F0' }}>{user.name}</span>
                <button onClick={handleLogout} style={styles.signInBtn}>
                  Logout
                </button>
              </div>
            )}
          </div>
        )}

        {isMobile && (
          <button onClick={() => setMenuOpen(!menuOpen)} style={styles.menuButton}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        )}

        {isMobile && menuOpen && (
          <div style={styles.navItemsOpen}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                style={{
                  ...styles.navLink,
                  color: activeSection === item.id ? '#E5E9F0' : '#9BAACB',
                  textShadow: activeSection === item.id
                    ? '0 0 8px rgba(93, 158, 255, 0.6)'
                    : 'none',
                }}
              >
                {item.label}
              </a>
            ))}
            {!user ? (
              <button onClick={openModal} style={styles.signInBtn}>
                Sign In
              </button>
            ) : (
              <button onClick={handleLogout} style={styles.signInBtn}>
                Logout
              </button>
            )}
          </div>
        )}
      </nav>

      {showModal && (
        <div style={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div
            style={{
              ...styles.modalContent,
              ...(isMobile ? styles.mobileModalContent : {}),
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              style={styles.modalCloseBtn}
              aria-label="Close"
            >
              <FaTimes />
            </button>

            <div style={styles.tabButtonsContainer}>
              <button
                onClick={() => setActiveTab('signin')}
                style={{
                  ...styles.tabButton,
                  background: activeTab === 'signin' ? '#5D9EFF' : 'transparent',
                  color: activeTab === 'signin' ? '#0B0C2A' : '#9BAACB',
                }}
              >
                Sign In
              </button>
              <button
                onClick={() => setActiveTab('signup')}
                style={{
                  ...styles.tabButton,
                  background: activeTab === 'signup' ? '#A3E4D7' : 'transparent',
                  color: activeTab === 'signup' ? '#0B0C2A' : '#9BAACB',
                }}
              >
                Sign Up
              </button>
            </div>

            {error && (
              <div style={{ color: '#ff6b6b', marginBottom: '1rem', textAlign: 'center' }}>
                {error}
              </div>
            )}

            {activeTab === 'signin' ? (
              <form onSubmit={handleSignin} style={styles.form}>
                <input name="username" type="text" placeholder="Username" required style={styles.input} />
                <input name="password" type="password" placeholder="Password" required style={styles.input} />
                <button type="submit" style={styles.submitBtn}>Sign In</button>
              </form>
            ) : (
              <form onSubmit={handleSignup} style={styles.form}>
                <input name="username" type="text" placeholder="Username" required style={styles.input} />
                <input name="email" type="email" placeholder="Email" required style={styles.input} />
                <input name="password" type="password" placeholder="Password" required style={styles.input} />
                <button type="submit" style={styles.submitBtn}>Sign Up</button>
              </form>
            )}

            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <GoogleLogin
                onSuccess={handleGoogleSignIn}
                onError={() => {
                  console.log('Google Sign-In failed');
                  setError('Google Sign-In failed. Please try again.');
                }}
                useOneTap
                text="signin_with"
                shape="pill"
                size="large"
                width="300"
                theme="filled_blue"
              />
            </div>
          </div>
        </div>
      )}
    </GoogleOAuthProvider>
  );
};

const styles = {
  navbar: {
    position: 'fixed',
    top: '1rem',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '90%',
    maxWidth: '1200px',
    background: 'rgba(27, 31, 59, 0.85)',
    backdropFilter: 'blur(12px)',
    borderRadius: '30px',
    padding: '0.75rem 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 4px 30px rgba(93, 158, 255, 0.15)',
    zIndex: 1100,
    userSelect: 'none',
    border: '1px solid rgba(93, 158, 255, 0.2)',
  },
  mobileNavbar: {
    padding: '0.75rem 1.5rem',
    flexWrap: 'wrap',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    color: '#5D9EFF',
    fontWeight: '600',
    fontSize: '1.4rem',
    gap: '0.5rem',
    cursor: 'pointer',
    textDecoration: 'none',
    userSelect: 'none',
  },
  centerNav: {
    display: 'flex',
    gap: '1.6rem',
    fontSize: '1rem',
    fontWeight: '500',
  },
  navLink: {
    color: '#9BAACB',
    textDecoration: 'none',
    cursor: 'pointer',
    userSelect: 'none',
    transition: 'color 0.3s ease, text-shadow 0.3s ease',
  },
  rightArea: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  signInBtn: {
    background: 'transparent',
    border: '1px solid #5D9EFF',
    color: '#5D9EFF',
    fontWeight: '600',
    fontSize: '1rem',
    padding: '0.4rem 1.1rem',
    borderRadius: '20px',
    cursor: 'pointer',
    userSelect: 'none',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  },
  userBtn: {
    background: '#5D9EFF',
    borderRadius: '50%',
    border: 'none',
    width: '35px',
    height: '35px',
    fontWeight: '700',
    fontSize: '1.2rem',
    color: '#0B0C2A',
    cursor: 'pointer',
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuButton: {
    background: 'transparent',
    border: 'none',
    color: '#5D9EFF',
    cursor: 'pointer',
    userSelect: 'none',
  },
  navItemsOpen: {
    width: '100%',
    marginTop: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  modalOverlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: 1200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none',
  },
  modalContent: {
    position: 'relative',
    backgroundColor: '#0B0C2A',
    padding: '2rem 2.5rem',
    borderRadius: '24px',
    width: '400px',
    maxWidth: '95%',
    boxShadow: '0 0 15px 5px rgba(93, 158, 255, 0.3)',
    userSelect: 'text',
  },
  mobileModalContent: {
    width: '90%',
    padding: '1.5rem 1.8rem',
  },
  modalCloseBtn: {
    position: 'absolute',
    top: '0.6rem',
    right: '0.6rem',
    background: 'transparent',
    border: 'none',
    color: '#9BAACB',
    fontSize: '1.2rem',
    cursor: 'pointer',
    userSelect: 'none',
  },
  tabButtonsContainer: {
    display: 'flex',
    marginBottom: '1.6rem',
  },
  tabButton: {
    flex: 1,
    padding: '0.5rem 0',
    border: 'none',
    fontWeight: '700',
    fontSize: '1.1rem',
    cursor: 'pointer',
    userSelect: 'none',
    borderRadius: '20px 20px 0 0',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.6rem 1rem',
    fontSize: '1rem',
    borderRadius: '12px',
    border: '1px solid #5D9EFF',
    backgroundColor: '#12152A',
    color: '#E5E9F0',
    outline: 'none',
    userSelect: 'text',
  },
  submitBtn: {
    backgroundColor: '#5D9EFF',
    color: '#0B0C2A',
    fontWeight: '700',
    fontSize: '1.1rem',
    padding: '0.7rem 0',
    borderRadius: '20px',
    border: 'none',
    cursor: 'pointer',
    userSelect: 'none',
    transition: 'background-color 0.3s ease',
  },
  googleSignInBtn: {
    backgroundColor: '#4285F4',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    padding: '0.5rem 1rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    userSelect: 'none',
  },
};

export default Navbar;
