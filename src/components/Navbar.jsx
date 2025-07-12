import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signOut,
} from "firebase/auth";
import React, { useState, useEffect, useRef } from "react";
import { signInWithGoogle, auth } from "../firebaseAuth";
import ForgotPassword from "./ForgotPassword";
import { useNavigate } from 'react-router-dom';

export default function Navbar({ activeSection }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const [loginWithPhone, setLoginWithPhone] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const confirmationResultRef = useRef(null);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (loginWithPhone && isModalOpen && !otpSent) {
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          "recaptcha-container",
          { size: "invisible" },
          auth
        );
        window.recaptchaVerifier.render();
      }
    }
  }, [loginWithPhone, isModalOpen, otpSent]);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "definition", label: "Features" },
    { id: "services", label: "Our Services" },
    { id: "working", label: "How it Works" },
    { id: "benefits", label: "Key Benefits" },
    { id: "contact", label: "Contact Us" },
  ];

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      if (showSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Sign up successful!");
        navigate("/dashboard");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
        navigate("/dashboard");
      }
      resetModal();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      const appVerifier = window.recaptchaVerifier;
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        appVerifier
      );
      confirmationResultRef.current = confirmationResult;
      setOtpSent(true);
      alert(`OTP sent to ${phoneNumber}`);
    } catch (error) {
      alert("Failed to send OTP: " + error.message);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      alert("Enter a 6-digit OTP");
      return;
    }
    try {
      await confirmationResultRef.current.confirm(otp);
      alert("Phone verified and signed in!");
      navigate("/dashboard");
      resetModal();
    } catch (error) {
      alert("Invalid OTP: " + error.message);
    }
  };

  const resetModal = () => {
    setIsModalOpen(false);
    setShowSignUp(false);
    setLoginWithPhone(false);
    setOtpSent(false);
    setUsername("");
    setEmail("");
    setPassword("");
    setPhoneNumber("");
    setOtp("");
    confirmationResultRef.current = null;
    if (window.recaptchaVerifier) {
      window.recaptchaVerifier.clear();
      window.recaptchaVerifier = null;
    }
  };

  const logoUrl = "/logo.png";

  // Styles
  const styles = {
    logoBar: {
      position: "fixed",
      top: 0,
      left: isMobile ? "10px" : "20px",
      backgroundColor: "#000",
      height: "100px",
      width: isMobile ? "180px" : "220px",
      display: "flex",
      alignItems: "center",
      justifyContent: isMobile ? "flex-start" : "center",
      zIndex: 2000,
      paddingLeft: isMobile ? "10px" : "0",
      boxShadow: "2px 0 8px rgba(0,0,0,0.7)",
    },
    logoImg: {
      height: "70px",
      maxWidth: "200px",
      objectFit: "contain",
    },
    navbarContainer: {
      position: "fixed",
      top: 0,
      left: isMobile ? "0px" : "240px",
      height: "100px",
      width: isMobile ? "100%" : "calc(100% - 240px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      paddingRight: "40px",
      background: "linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 100%)",
      fontFamily: "Inter, sans-serif",
      fontWeight: 600,
      zIndex: 1500
    },
    navBtn: {
      background: "transparent",
      border: "none",
      color: "white",
      cursor: "pointer",
      fontSize: "16px",
      padding: "8px 14px",
      borderRadius: "20px",
      transition: "background-color 0.25s ease, color 0.25s ease",
      userSelect: "none",
      outline: "none",
    },
    activeBtn: {
      fontWeight: "bold",
      borderBottom: "2px solid #00b7ff",
    },
    signInBtn: {
      backgroundColor: "transparent",
      color: "#00b7ff",
      border: "2px solid #00b7ff",
      padding: "8px 20px",
      borderRadius: "30px",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "16px",
      transition: "all 0.3s ease",
      userSelect: "none",
      outline: "none",
    },
    hamburger: {
      display: isMobile ? "flex" : "none",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      fontSize: "28px",
      color: "#00b7ff",
      marginLeft: "20px",
      zIndex: 9999,
    },
    mobileMenu: {
      position: "absolute",
      top: "100px",
      right: "20px",
      background: "rgba(0, 0, 0, 0.95)",
      borderRadius: "20px",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      userSelect: "none",
      zIndex: 9999,
    },
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.7)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 3000,
    },
    modalContent: {
      backgroundColor: "black",
      padding: "20px 40px",
      borderRadius: "15px",
      width: isMobile ? "90%" : "380px",
      boxShadow: "0 0 15px 2px #00b7ff",
      color: "white",
      fontFamily: "Inter, sans-serif",
      fontWeight: 500,
    },
    formGroup: {
      marginBottom: "15px",
    },
    label: {
      display: "block",
      marginBottom: "6px",
      fontWeight: "bold",
    },
    input: {
      width: "100%",
      padding: "10px",
      borderRadius: "12px",
      border: "1.5px solid #555",
      backgroundColor: "#111",
      color: "white",
      fontSize: "16px",
      outline: "none",
    },
    modalBtn: {
      backgroundColor: "#00b7ff",
      border: "none",
      padding: "12px 20px",
      borderRadius: "30px",
      color: "black",
      fontWeight: "bold",
      cursor: "pointer",
      fontSize: "16px",
      width: "100%",
      marginTop: "10px",
      userSelect: "none",
      outline: "none",
    },
    switchText: {
      color: "#00b7ff",
      cursor: "pointer",
      marginTop: "12px",
      textAlign: "center",
      userSelect: "none",
    },
    recaptchaContainer: {
      marginTop: "10px",
      textAlign: "center",
      fontSize: "12px",
      color: "gray",
    },
  };

  return (
    <>
      {/* Logo bar */}
      <div style={styles.logoBar}>
        <img src={logoUrl} alt="Logo" style={styles.logoImg} />
      </div>

      {/* Navbar container */}
      <nav style={styles.navbarContainer} aria-label="Primary navigation">
        {/* Nav items (desktop or mobile) */}
        {isMobile ? (
          <>
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              style={styles.hamburger}
              aria-label="Toggle menu"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") setMenuOpen(!menuOpen);
              }}
            >
              ☰
            </div>
            {menuOpen && (
              <div style={styles.mobileMenu}>
                {navItems.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => handleNavClick(id)}
                    style={{
                      ...styles.navBtn,
                      ...(activeSection === id ? styles.activeBtn : {}),
                      fontSize: "18px",
                    }}
                    aria-current={activeSection === id ? "page" : undefined}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </>
        ) : (
          navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              style={{
                ...styles.navBtn,
                ...(activeSection === id ? styles.activeBtn : {}),
              }}
              aria-current={activeSection === id ? "page" : undefined}
            >
              {label}
            </button>
          ))
        )}

        {/* Spacer */}
        <div style={{ width: "20px" }} />

        {/* Sign In button - always shown */}
        <button
          style={styles.signInBtn}
          onClick={() => setIsModalOpen(true)}
          aria-label="Sign in"
        >
          Sign In
        </button>

        {/* Modal for login/signup */}
        {isModalOpen && (
          <div
            style={styles.modalOverlay}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modalTitle"
            onClick={resetModal}
            tabIndex={-1}
          >
            <div
              style={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
              tabIndex={0}
            >
              {showForgotPassword ? (
                <ForgotPassword onBack={() => setShowForgotPassword(false)} />
              ) : (
                <>
                  <h2
                    id="modalTitle"
                    style={{ textAlign: "center", marginBottom: "20px" }}
                  >
                    {showSignUp
                      ? "Sign Up"
                      : loginWithPhone
                      ? "Phone Login"
                      : "Sign In"}
                  </h2>

                  {!loginWithPhone ? (
                    <form onSubmit={handleEmailSubmit}>
                      {showSignUp && (
                        <div style={styles.formGroup}>
                          <label htmlFor="username" style={styles.label}>
                            Username
                          </label>
                          <input
                            type="text"
                            id="username"
                            style={styles.input}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            autoFocus={showSignUp}
                          />
                        </div>
                      )}
                      <div style={styles.formGroup}>
                        <label htmlFor="email" style={styles.label}>
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          style={styles.input}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          autoFocus={!showSignUp}
                        />
                      </div>
                      <div style={styles.formGroup}>
                        <label htmlFor="password" style={styles.label}>
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          style={styles.input}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <button type="submit" style={styles.modalBtn}>
                        {showSignUp ? "Sign Up" : "Sign In"}
                      </button>
                      <div style={{ textAlign: "center", margin: "16px 0" }}>
                        <button
                          type="button"
                          onClick={async () => {
                            try {
                              const user = await signInWithGoogle();
                              alert(`Welcome ${user.displayName || user.email}`);
                              navigate("/dashboard");
                              resetModal();
                            } catch (error) {
                              alert("Google Sign-In failed: " + error.message);
                            }
                          }}
                          style={{
                            ...styles.modalBtn,
                            backgroundColor: "white",
                            color: "black",
                            border: "1px solid #00b7ff",
                          }}
                        >
                          Continue with Google
                        </button>
                      </div>

                      {/* Forgot Password Link */}
                      {!showSignUp && (
                        <p
                          style={{
                            ...styles.switchText,
                            marginTop: "8px",
                            color: "#00b7ff",
                          }}
                          onClick={() => {
                            setShowForgotPassword(true);
                            setShowSignUp(false);
                            setLoginWithPhone(false);
                          }}
                        >
                          Forgot Password?
                        </p>
                      )}
                    </form>
                  ) : !otpSent ? (
                    <form onSubmit={handleSendOtp}>
                      <div style={styles.formGroup}>
                        <label htmlFor="phone" style={styles.label}>
                          Phone Number (+CountryCode)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          style={styles.input}
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder="+1234567890"
                          required
                          autoFocus
                        />
                      </div>
                      <div id="recaptcha-container" style={styles.recaptchaContainer} />
                      <button type="submit" style={styles.modalBtn}>
                        Send OTP
                      </button>
                    </form>
                  ) : (
                    <form onSubmit={handleVerifyOtp}>
                      <div style={styles.formGroup}>
                        <label htmlFor="otp" style={styles.label}>
                          Enter OTP
                        </label>
                        <input
                          type="text"
                          id="otp"
                          style={styles.input}
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          maxLength={6}
                          required
                          autoFocus
                        />
                      </div>
                      <button type="submit" style={styles.modalBtn}>
                        Verify OTP
                      </button>
                    </form>
                  )}

                  {/* Switch and Close links */}
                  <p
                    style={styles.switchText}
                    onClick={() => {
                      setShowSignUp(!showSignUp);
                      setLoginWithPhone(false);
                      setOtpSent(false);
                      setUsername("");
                      setEmail("");
                      setPassword("");
                      setPhoneNumber("");
                      setOtp("");
                    }}
                  >
                    {showSignUp
                      ? "Already have an account? Sign In"
                      : "Don't have an account? Sign Up"}
                  </p>

                  {!loginWithPhone && (
                    <p
                      style={{ ...styles.switchText, marginTop: "8px" }}
                      onClick={() => {
                        setLoginWithPhone(true);
                        setShowSignUp(false);
                        setOtpSent(false);
                        setUsername("");
                        setEmail("");
                        setPassword("");
                        setPhoneNumber("");
                        setOtp("");
                      }}
                    >
                      Login with Phone Number
                    </p>
                  )}

                  <p
                    style={{
                      ...styles.switchText,
                      marginTop: "10px",
                      color: "#888",
                    }}
                    onClick={resetModal}
                  >
                    Close
                  </p>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}