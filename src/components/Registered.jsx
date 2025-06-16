import React from "react";

const styles = {
  container: {
    backgroundColor: "transparent",
    color: "#e0f7ff",
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
    color: "#00e5ff",
    fontSize: "1.8rem",
    marginBottom: "1.5rem",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    textShadow: "0 0 8px rgba(0, 229, 255, 0.6)",
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
    filter: "drop-shadow(0 0 10px rgba(0,255,255,0.7))",
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
    color: "#b2f5ff",
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

  // New styles for user guide icon & popup
  breezyBlue: "#4fc3f7",
  breezyBlueTransparent: "rgba(79, 195, 247, 0.15)",

  guideIcon: {
    position: "fixed",
    bottom: "20px",
    left: "20px",
    width: "45px",
    height: "45px",
    backgroundColor: "#4fc3f7", // breezy blue
    color: "white",
    borderRadius: "50%",
    fontSize: "28px",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 0 12px rgba(79,195,247,0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    userSelect: "none",
    transition: "background-color 0.3s ease",
  },

  guidePopup: {
    position: "fixed",
    bottom: "75px",
    left: "20px",
    width: "320px",
    maxWidth: "90vw",
    maxHeight: "60vh",
    backgroundColor: "#4fc3f6", // transparent breezy blue
    color: "white",
    padding: "1rem 1.5rem",
    borderRadius: "10px",
    boxShadow: "0 0 15px rgba(79,195,247,0.5)",
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
    borderBottom: "2px solid rgba(255,255,255,0.4)",
    paddingBottom: "4px",
  },

  guideList: {
    paddingLeft: "1.2rem",
    marginBottom: "0.8rem",
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
    { name: "DPIIT", logo: "/DPIIT.png" },
    { name: "MSME", logo: "/msme.png" },
    { name: "MCA", logo: "/mca.png" },
  ];

  const backedBy = [
    { name: "Google", logo: "/cloud.png" },
    { name: "Microsoft", logo: "/microsoft.png" },
    { name: "Nvidia", logo: "/inception.png" },
    { name: "AWS", logo: "/aws.png" },
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
                "linear-gradient(90deg, transparent, #00e5ff, #00bcd4, #00e5ff, transparent)",
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
          background-color: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }
        div[role="dialog"]::-webkit-scrollbar-thumb:hover {
          background-color: rgba(255, 255, 255, 0.5);
        }
        /* Firefox scrollbar */
        div[role="dialog"] {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
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
          <h3 id="guideTitle" style={styles.guideTitle}>User Guides - How to Use the Bot</h3>
          <p><strong>Getting Started with Propello AI</strong></p>
          <ul style={styles.guideList}>
            <li><strong>Sign Up:</strong> Create your account in minutes.</li>
            <li><strong>Connect Your Number:</strong> Link your business number to our system.</li>
            <li><strong>Train Your Bot:</strong> Use our easy interface to feed FAQs and workflows.</li>
            <li><strong>Go Live:</strong> Your voice assistant starts answering calls immediately.</li>
            <li><strong>Track Performance:</strong> Use the dashboard to monitor calls and responses.</li>
          </ul>
          <p>Need help? Our onboarding team is always available.</p>
        </div>
      )}
    </>
  );
};

export default Registered;
