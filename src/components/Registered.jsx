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
    background: "linear-gradient(90deg, #FC466B, #3F5EFB)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "2rem",
    marginBottom: "2.5rem",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    fontWeight: "900", // Bold
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  logoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
    gap: "3rem",
    marginBottom: "2rem",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 1rem",
  },
  logoItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    userSelect: "none",
    position: "relative",
    transition: "all 0.3s ease",
    padding: "1.5rem",
    borderRadius: "12px",
  },
  logoImage: {
    maxWidth: "160px",
    maxHeight: "140px",
    objectFit: "contain",
    transition: "all 0.3s ease",
    borderRadius: "12px",
    filter: "grayscale(20%)",
  },
  largeLogoImage: {
    maxWidth: "200px",
    maxHeight: "160px",
  },
  divider: {
    width: "90%",
    height: "2px",
    background: "linear-gradient(90deg, transparent, #fc466b, #3f5efb, transparent)",
    margin: "3rem auto",
    borderRadius: "3px",
  },
  guideIcon: {
    position: "fixed",
    bottom: "20px",
    left: "20px",
    width: "50px",
    height: "50px",
    background: "linear-gradient(135deg, #fc466b, #3f5efb)",
    color: "white",
    borderRadius: "50%",
    fontSize: "28px",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 0 15px rgba(252, 70, 107, 0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    userSelect: "none",
  },
  guidePopup: {
    position: "fixed",
    bottom: "80px",
    left: "20px",
    width: "320px",
    maxWidth: "90vw",
    maxHeight: "60vh",
    backgroundColor: "white",
    color: "#333",
    padding: "1.5rem",
    borderRadius: "12px",
    boxShadow: "0 0 20px rgba(252, 70, 107, 0.5)",
    border: "2px solid #fc466b",
    overflowY: "auto",
    fontSize: "0.9rem",
    fontWeight: "600",
    lineHeight: "1.5",
    zIndex: 1001,
  },
  guideTitle: {
    fontWeight: "800",
    fontSize: "1.2rem",
    marginBottom: "1rem",
    borderBottom: "2px solid #fc466b",
    paddingBottom: "6px",
    color: "#fc466b",
  },
  guideList: {
    paddingLeft: "1.2rem",
    marginBottom: "1rem",
    color: "#333",
    li: {
      marginBottom: "0.5rem"
    }
  },
  "@media(maxWidth: 768px)": {
    logoGrid: {
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: "2rem",
    },
    logoImage: {
      maxWidth: "140px",
      maxHeight: "120px",
    },
    largeLogoImage: {
      maxWidth: "160px",
      maxHeight: "140px",
    },
    sectionTitle: {
      fontSize: "1.6rem",
      marginBottom: "2rem",
    },
  },
  "@media(maxWidth: 480px)": {
    logoGrid: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "1.5rem",
    },
    logoImage: {
      maxWidth: "120px",
      maxHeight: "100px",
    },
    largeLogoImage: {
      maxWidth: "140px",
      maxHeight: "120px",
    },
    sectionTitle: {
      fontSize: "1.4rem",
      marginBottom: "1.5rem",
    },
    divider: {
      margin: "2rem auto",
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

  const [showGuide, setShowGuide] = React.useState(false);

  return (
    <>
      <div style={styles.container}>
        <div style={styles.content}>
          <h2 style={styles.sectionTitle}>Registered With</h2>
          <div style={styles.logoGrid}>
            {registeredWith.map((item) => (
              <div key={item.name} style={styles.logoItem}>
                <img src={item.logo} alt={item.name} style={styles.logoImage} />
              </div>
            ))}
          </div>

          <div style={styles.divider}></div>

          <h2 style={styles.sectionTitle}>Backed By</h2>
          <div style={styles.logoGrid}>
            {backedBy.map((item) => {
              let customStyle = { ...styles.logoImage };
              if (item.name === "AWS") {
                customStyle = { ...customStyle, ...styles.largeLogoImage, marginTop: "15px" };
              } else if (item.name === "Google" || item.name === "Nvidia") {
                customStyle = { ...customStyle, marginBottom: "15px" };
              }
              return (
                <div key={item.name} style={styles.logoItem}>
                  <img src={item.logo} alt={item.name} style={customStyle} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div
        style={styles.guideIcon}
        onClick={() => setShowGuide(!showGuide)}
        title="User Guides"
        aria-label="Toggle User Guides"
      >
        ?
      </div>

      {showGuide && (
        <div
          style={styles.guidePopup}
          role="dialog"
          aria-modal="true"
          aria-labelledby="guideTitle"
        >
          <h3 id="guideTitle" style={styles.guideTitle}>
            USER GUIDE - HOW TO USE THE BOT
          </h3>
          <p style={{ color: "#fc466b", fontWeight: "700", marginBottom: "1rem" }}>
            GETTING STARTED WITH PROPELLO AI
          </p>
          <ul style={styles.guideList}>
            <li><strong>SIGN UP:</strong> Create your account in minutes.</li>
            <li><strong>CONNECT YOUR NUMBER:</strong> Link your business number to our system.</li>
            <li><strong>TRAIN YOUR BOT:</strong> Use our easy interface to feed FAQs and workflows.</li>
            <li><strong>GO LIVE:</strong> Your voice assistant starts answering calls immediately.</li>
            <li><strong>TRACK PERFORMANCE:</strong> Use the dashboard to monitor calls and responses.</li>
          </ul>
          <p style={{ color: "#fc466b", fontWeight: "700", marginTop: "1rem" }}>
            NEED HELP? OUR ONBOARDING TEAM IS ALWAYS AVAILABLE.
          </p>
        </div>
      )}
    </>
  );
};

export default Registered;
