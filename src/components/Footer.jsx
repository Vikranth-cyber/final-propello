import { FaTwitter, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

const Footer = () => {
  const links = [
    {
      title: "Product",
      items: ["Features", "Pricing", "Integrations", "Roadmap"],
    },
    {
      title: "Resources",
      items: ["Documentation", "API Reference", "Tutorials", "Blog"],
    },
    {
      title: "Company",
      items: ["About", "Careers", "Contact", "Press"],
    },
    {
      title: "Legal",
      items: ["Privacy", "Terms", "Security", "Compliance"],
    },
  ];

  const socialIcons = [
    { icon: <FaTwitter />, url: "#" },
    { icon: <FaLinkedin />, url: "#" },
    { icon: <FaGithub />, url: "#" },
    { icon: <FaDiscord />, url: "#" },
  ];

  return (
    <>
      <style>{`
        @media (max-width: 600px) {
          .footer-links {
            flex-wrap: wrap !important;
            flex-direction: row !important;
            gap: 2rem;
          }
          .footer-links > div:not(:first-child) {
            width: 48%;
          }
        }
      `}</style>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "3rem 1rem",
          background: "transparent",
        }}
      >
        <footer
          style={{
            width: "100%",
            maxWidth: "1400px",
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "32px",
            padding: "3rem 3.5rem",
            boxShadow: "0 20px 50px rgba(93, 158, 255, 0.35)", // breezy blue shadow
            color: "#9BAACB",
            userSelect: "none",
          }}
        >
          <div
            className="footer-links"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "3rem",
              flexWrap: "wrap",
            }}
          >
            <div style={{ maxWidth: "300px", flex: "1" }}>
              <h3
                style={{
                  fontSize: "2rem",
                  marginBottom: "1rem",
                  color: "#E5E9F0",
                  fontWeight: "700",
                  fontFamily: "var(--font-heading)",
                  userSelect: "none",
                }}
              >
                <span
                  style={{
                    background: "linear-gradient(90deg, #5D9EFF, #A3E4D7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Propello
                </span>{" "}
                AI
              </h3>
              <p style={{ opacity: 0.8, marginBottom: "2rem", lineHeight: 1.6 }}>
                Next-generation conversational AI for modern businesses
              </p>
              <div style={{ display: "flex", gap: "1.2rem" }}>
                {socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    style={{
                      fontSize: "1.5rem",
                      color: "#9BAACB",
                      opacity: 0.85,
                      transition: "color 0.3s ease, transform 0.3s ease",
                      userSelect: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#E5E9F0";
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.opacity = "1";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#9BAACB";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.opacity = "0.85";
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {links.map((link, index) => (
              <div key={index} style={{ flex: "1", minWidth: "140px" }}>
                <h4
                  style={{
                    fontSize: "1.2rem",
                    marginBottom: "1.5rem",
                    color: "#E5E9F0",
                    fontWeight: "600",
                    userSelect: "none",
                  }}
                >
                  {link.title}
                </h4>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.8rem",
                  }}
                >
                  {link.items.map((item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        style={{
                          color: "#9BAACB",
                          opacity: 0.85,
                          textDecoration: "none",
                          transition: "color 0.3s ease, padding-left 0.3s ease",
                          userSelect: "none",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#E5E9F0";
                          e.currentTarget.style.opacity = "1";
                          e.currentTarget.style.paddingLeft = "6px";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#9BAACB";
                          e.currentTarget.style.opacity = "0.85";
                          e.currentTarget.style.paddingLeft = "0";
                        }}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
