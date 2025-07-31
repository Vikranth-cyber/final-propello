import React from "react";

const styles = {
  container: {
    backgroundColor: "white",
    color: "#333",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem 1rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  content: {
    maxWidth: "900px",
    width: "100%",
    textAlign: "center",
  },
  sectionTitle: {
    color: "#ff6d00", // Orange color
    fontSize: "1.8rem",
    marginBottom: "1.5rem",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    fontWeight: "700",
  },
  logoGrid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "3rem",
    marginBottom: "2rem",
  },
  logoItem: {
    width: "170px",
    height: "170px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    userSelect: "none",
    position: "relative",
  },
  logoImage: {
    maxWidth: "140px",
    maxHeight: "120px",
    objectFit: "contain",
    transition: "transform 0.3s ease",
    borderRadius: "12px",
  },
  largeLogoImage: {
    maxWidth: "180px",
    maxHeight: "150px",
  },
  logoText: {
    position: "absolute",
    bottom: "-3rem",
    width: "100%",
    color: "#ff6d00", // Changed to orange
    fontSize: "1.1rem",
    fontWeight: "700",
    letterSpacing: "0.3px",
    opacity: 0,
    transition: "opacity 0.3s ease, transform 0.3s ease",
    transform: "translateY(10px)",
    pointerEvents: "none",
  },
  logoTextVisible: {
    opacity: 1,
    transform: "translateY(0)",
    pointerEvents: "auto",
  },

  // New styles for user guide icon & popup with orange theme
  guideIcon: {
    position: "fixed",
    bottom: "20px",
    left: "20px",
    width: "45px",
    height: "45px",
    backgroundColor: "#ff6d00", // orange
    color: "white",
    borderRadius: "50%",
    fontSize: "28px",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 0 12px rgba(255,109,0,0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    userSelect: "none",
    transition: "background-color 0.3s ease",
    '&:hover': {
      backgroundColor: "#ff9100",
    }
  },

  guidePopup: {
    position: "fixed",
    bottom: "75px",
    left: "20px",
    width: "320px",
    maxWidth: "90vw",
    maxHeight: "60vh",
    backgroundColor: "white",
    color: "#333",
    padding: "1rem 1.5rem",
    borderRadius: "10px",
    boxShadow: "0 0 15px rgba(255,109,0,0.5)",
    border: "2px solid #ff6d00",
    overflowY: "auto",
    fontSize: "0.9rem",
    fontWeight: "600",
    lineHeight: "1.4",
    zIndex: 1001,
  },

  guideTitle: {
    fontWeight: "800",
    fontSize: "1.1rem",
    marginBottom: "0.8rem",
    borderBottom: "2px solid #ff6d00",
    paddingBottom: "4px",
    color: "#ff6d00", // orange
  },

  guideList: {
    paddingLeft: "1.2rem",
    marginBottom: "0.8rem",
    color: "#333",
  },

  // Responsive adjustments
  "@media(max-width: 400px)": {
    guidePopup: {
      width: "90vw",
      bottom: "70px",
      left: "5vw",
    },
  },
};

const Registered = () => {
  const registeredWith = [
    { name: "DPIIT", logo: "/DPIIT-logo-trans.png" },
    { name: "MSME", logo: "/MSME_logo.jpg" },
    { name: "MCA", logo: "/MCALogo.png" },
  ];

  const backedBy = [
    { name: "Google", logo: "/GoogleCloudForStartups.png" },
    { name: "Microsoft", logo: "/MicrosoftForStartups.png" },
    { name: "Nvidia", logo: "/NvidiaForStartups.jpg" },
    { name: "AWS", logo: "/Awsforstartups.png" },
  ];

  const [hoverIndex, setHoverIndex] = React.useState(null);
  const [showGuide, setShowGuide] = React.useState(false);

  return (
    <>
      <div style={styles.container}>
        <div style={styles.content}>
          <h2 style={styles.sectionTitle}>Registered With</h2>
          <div style={styles.logoGrid}>
            {registeredWith.map((item, i) => (
              <div
                key={item.name}
                style={styles.logoItem}
                onMouseEnter={() => setHoverIndex(`reg-${i}`)}
                onMouseLeave={() => setHoverIndex(null)}
                onTouchStart={() => setHoverIndex(`reg-${i}`)}
                onTouchEnd={() => setHoverIndex(null)}
              >
                <img src={item.logo} alt={item.name} style={styles.logoImage} />
                <p
                  style={{
                    ...styles.logoText,
                    ...(hoverIndex === `reg-${i}` ? styles.logoTextVisible : {}),
                  }}
                >
                  {item.name}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              width: "90%",
              height: "2px",
              background:
                "linear-gradient(90deg, transparent, #ff6d00, #7b1fa2, #ff6d00, transparent)",
              margin: "1.5rem auto 2rem",
              borderRadius: "3px",
            }}
          ></div>

          <h2 style={styles.sectionTitle}>Backed By</h2>
          <div style={styles.logoGrid}>
            {backedBy.map((item, i) => (
              <div
                key={item.name}
                style={styles.logoItem}
                onMouseEnter={() => setHoverIndex(`backed-${i}`)}
                onMouseLeave={() => setHoverIndex(null)}
                onTouchStart={() => setHoverIndex(`backed-${i}`)}
                onTouchEnd={() => setHoverIndex(null)}
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  style={{
                    ...styles.logoImage,
                    ...(item.name === "AWS" ? styles.largeLogoImage : {}),
                  }}
                />
                <p
                  style={{
                    ...styles.logoText,
                    ...(hoverIndex === `backed-${i}` ? styles.logoTextVisible : {}),
                  }}
                >
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scrollbar styling for WebKit browsers */}
      <style>{`
        /* WebKit scrollbar for guidePopup */
        div[role="dialog"]::-webkit-scrollbar {
          width: 6px;
          background: transparent;
        }
        div[role="dialog"]::-webkit-scrollbar-thumb {
          background-color: rgba(255, 109, 0, 0.3);
          border-radius: 10px;
        }
        div[role="dialog"]::-webkit-scrollbar-thumb:hover {
          background-color: rgba(255, 109, 0, 0.5);
        }
        /* Firefox scrollbar */
        div[role="dialog"] {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 109, 0, 0.3) transparent;
        }
        /* Responsive popup */
        @media (max-width: 400px) {
          div[role="dialog"] {
            width: 90vw !important;
            left: 5vw !important;
            bottom: 70px !important;
          }
        }
      `}</style>

      {/* Question mark icon */}
      <div
        style={styles.guideIcon}
        onClick={() => setShowGuide(!showGuide)}
        title="User Guides"
        aria-label="Toggle User Guides"
      >
        ?
      </div>

      {/* Popup with user guide content */}
      {showGuide && (
        <div style={styles.guidePopup} role="dialog" aria-modal="true" aria-labelledby="guideTitle">
          <h3 id="guideTitle" style={styles.guideTitle}>USER GUIDE - HOW TO USE THE BOT</h3>
          <p style={{color: "#ff6d00"}}><strong>GETTING STARTED WITH PROPELLO AI</strong></p>
          <ul style={styles.guideList}>
            <li><strong>SIGN UP:</strong> Create your account in minutes.</li>
            <li><strong>CONNECT YOUR NUMBER:</strong> Link your business number to our system.</li>
            <li><strong>TRAIN YOUR BOT:</strong> Use our easy interface to feed FAQs and workflows.</li>
            <li><strong>GO LIVE:</strong> Your voice assistant starts answering calls immediately.</li>
            <li><strong>TRACK PERFORMANCE:</strong> Use the dashboard to monitor calls and responses.</li>
          </ul>
          <p style={{color: "#ff6d00"}}>NEED HELP? OUR ONBOARDING TEAM IS ALWAYS AVAILABLE.</p>
        </div>
      )}
    </>
  );
};

export default Registered;