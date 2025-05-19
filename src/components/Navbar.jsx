import React, { useState, useEffect } from "react";

export default function Navbar({ activeSection }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredSignIn, setHoveredSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const styles = {
    logoBar: {
      position: "fixed",
      top: 0,
      left: "20px",
      backgroundColor: "#000",
      height: "100px",
      width: "220px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 2000,
      pointerEvents: "auto",
      boxShadow: "2px 0 8px rgba(0,0,0,0.7)",
    },
    logoImg: {
      height: "80px",
      maxWidth: "200px",
      objectFit: "contain",
    },
    navbarContainer: {
      position: "fixed",
      top: 0,
      left: "240px",
      height: "100px",
      width: "calc(100% - 240px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      paddingRight: "40px",
      pointerEvents: "none",
      fontFamily: "Baskerville, serif",
      zIndex: 1500,
      background:
        "linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 100%)",
    },
    navButtons: {
      pointerEvents: "auto",
      display: "flex",
      alignItems: "center",
      gap: "20px",
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      borderRadius: "50px",
      padding: "10px 25px",
      boxShadow: "0 8px 24px rgba(0, 183, 255, 0.25)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      color: "white",
      userSelect: "none",
      fontWeight: "500",
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
      outline: "none",
      userSelect: "none",
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
      outline: "none",
      userSelect: "none",
    },
    signInBtnHover: {
      backgroundColor: "#00b7ff",
      color: "#000",
    },
    hamburger: {
      display: isMobile ? "flex" : "none",
      flexDirection: "column",
      cursor: "pointer",
      marginLeft: "20px",
      zIndex: 9999,
    },
    bar: {
      height: "3px",
      width: "25px",
      backgroundColor: "#00b7ff",
      margin: "4px 0",
      borderRadius: "4px",
    },
    mobileMenu: {
      position: "absolute",
      top: "100px",
      right: "40px",
      background: "rgba(0, 0, 0, 0.95)",
      borderRadius: "20px",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      zIndex: 9998,
      boxShadow: "0 8px 24px rgba(0, 183, 255, 0.25)",
    },
  };

  // Decreased width here to 320px from 380px
  const AuthForm = () => (
    <div
      style={{
        width: "400px",
        maxWidth: "400px",
        minWidth: "400px",
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "20px",
        padding: "20px 20px",
        color: "white",
        boxShadow: "0 0 40px rgba(0, 183, 255, 0.4)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        fontFamily: "Baskerville, serif",
        position: "relative",
      }}
    >
      <button
        onClick={() => setIsModalOpen(false)}
        style={{
          position: "absolute",
          top: "16px",
          right: "20px",
          background: "transparent",
          border: "none",
          fontSize: "28px",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        &times;
      </button>
      <h2 style={{ textAlign: "center", color: "#00b7ff" }}>
        {showSignUp ? "Sign Up" : "Sign In"}
      </h2>

      {/* Email query input only for Sign Up */}
      {showSignUp && (
        <input
          type="text"
          placeholder="Username"
          style={{
            width: "100%",
            padding: "12px",
            margin: "10px 0",
            borderRadius: "12px",
            background: "#111",
            color: "#fff",
          }}
        />
      )}

      <input
        type="text"
        placeholder="Email"
        style={{
          width: "100%",
          padding: "12px",
          margin: "10px 0",
          borderRadius: "12px",
          background: "#111",
          color: "#fff",
        }}
      />
      <input
        type="password"
        placeholder="Password"
        style={{
          width: "100%",
          padding: "12px",
          margin: "10px 0",
          borderRadius: "12px",
          background: "#111",
          color: "#fff",
        }}
      />
      <button
        style={{
          backgroundColor: "#00b7ff",
          color: "#000",
          padding: "12px",
          width: "100%",
          borderRadius: "30px",
          marginTop: "10px",
          fontWeight: "bold",
          border: "none",
          cursor: "pointer",
        }}
      >
        {showSignUp ? "Register" : "Login"}
      </button>
      <p
        style={{
          marginTop: "15px",
          textAlign: "center",
          fontSize: "14px",
          cursor: "pointer",
          color: "#aaa",
        }}
        onClick={() => setShowSignUp(!showSignUp)}
      >
        {showSignUp
          ? "Already have an account? Sign In"
          : "Don't have an account? Sign Up"}
      </p>
    </div>
  );

  return (
    <>
      {/* Logo */}
      <div style={styles.logoBar}>
        <img src="/logo.png" alt="Logo" style={styles.logoImg} />
      </div>

      {/* Navbar */}
      <div style={styles.navbarContainer}>
        {/* Hamburger icon */}
        <div style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
        </div>

        {/* Desktop Nav */}
        {!isMobile && (
          <div style={styles.navButtons}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  ...styles.navBtn,
                  ...(activeSection === item.id ? styles.activeBtn : {}),
                }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => setIsModalOpen(true)}
              onMouseEnter={() => setHoveredSignIn(true)}
              onMouseLeave={() => setHoveredSignIn(false)}
              style={{
                ...styles.signInBtn,
                ...(hoveredSignIn ? styles.signInBtnHover : {}),
              }}
            >
              Sign In
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div style={styles.mobileMenu}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={styles.navBtn}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              setIsModalOpen(true);
              setMenuOpen(false);
            }}
            style={styles.signInBtn}
          >
            Sign In
          </button>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 3000,
            padding: "20px",
            overflowY: "auto",
          }}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            style={{
              display: "flex",
              gap: "40px",
              maxWidth: "720px",
              width: "100%",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <AuthForm />
          </div>
        </div>
      )}
    </>
  );
}
