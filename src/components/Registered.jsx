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

  return (
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
  );
};

export default Registered;
