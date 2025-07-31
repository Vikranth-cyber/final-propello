import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import {
  RiDashboardLine,
  RiSettingsLine,
  RiUserLine,
  RiLockLine,
  RiWalletLine,
  RiMenu3Line,
  RiCloseLine,
} from "react-icons/ri";
import {
  MdOutlineAnalytics,
  MdOutlineHelp,
  MdOutlineLibraryBooks,
  MdOutlineContactSupport,
} from "react-icons/md";
import { BsMic, BsFileText } from "react-icons/bs";

export default function Sidebar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1024;
      setIsMobile(mobile);
      setSidebarOpen(!mobile);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { to: "/dashboard", label: "Start Agent", icon: <RiDashboardLine /> },
    { to: "/dashboard/recordings", label: "Recordings", icon: <BsMic /> },
    { to: "/dashboard/scripts", label: "Scripts", icon: <BsFileText /> },
    { to: "/dashboard/analytics", label: "Analytics", icon: <MdOutlineAnalytics /> },
    { to: "/dashboard/profile", label: "Profile", icon: <RiUserLine /> },
    { to: "/dashboard/security", label: "Security", icon: <RiLockLine /> },
    { to: "/dashboard/settings", label: "Settings", icon: <RiSettingsLine /> },
    { to: "/dashboard/billing", label: "Billing", icon: <RiWalletLine /> },
    { to: "/dashboard/faqs", label: "Help Center", icon: <MdOutlineHelp /> },
    { to: "/dashboard/docs", label: "Docs", icon: <MdOutlineLibraryBooks /> },
    { to: "/dashboard/contact", label: "Contact", icon: <MdOutlineContactSupport /> },
  ];

  const sectionTitles = {
    "Start Agent": "Main",
    Recordings: "Call Center",
    Scripts: "Call Center",
    Analytics: "Call Center",
    Profile: "Account",
    Security: "Account",
    Settings: "Account",
    Billing: "Account",
    "Help Center": "Support",
    Docs: "Support",
    Contact: "Support",
  };

  let lastSection = "";

  return (
    <>
      {isMobile && (
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={{
            position: "fixed",
            top: "24px",
            right: "24px",
            zIndex: 1000,
            background: "#ff6600",
            border: "none",
            borderRadius: "50%",
            width: "48px",
            height: "48px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {sidebarOpen ? (
            <RiCloseLine style={{ color: "white", fontSize: "24px" }} />
          ) : (
            <RiMenu3Line style={{ color: "white", fontSize: "24px" }} />
          )}
        </button>
      )}

      <div
        style={{
          position: isMobile ? "fixed" : "fixed",
          top: 0,
          left: 0,
          transform: isMobile && !sidebarOpen ? "translateX(-100%)" : "translateX(0)",
          transition: "transform 0.3s ease",
          width: "250px",
          height: "100vh",
          backgroundColor: "#ffffff",
          borderRight: "2px solid #ff6600",
          boxShadow: isMobile ? "4px 0 20px rgba(0,0,0,0.1)" : "none",
          zIndex: 999,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            overflowY: "auto",
            padding: "28px 20px",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#ff6600",
              marginBottom: "32px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#ff6600" />
              <path d="M2 17L12 22L22 17" fill="#ff6600" />
              <path d="M2 12L12 17L22 12" fill="#ff6600" />
            </svg>
            Propello AI
          </div>

          {links.map(({ to, label, icon }) => {
            const currentSection = sectionTitles[label];
            const renderSectionTitle = currentSection !== lastSection;
            lastSection = currentSection;

            return (
              <div key={to}>
                {renderSectionTitle && (
                  <div
                    style={{
                      margin: "20px 0 8px",
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#ff6600",
                    }}
                  >
                    {currentSection}
                  </div>
                )}
                <NavLink
                  to={to}
                  style={({ isActive }) => ({
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "12px 18px",
                    marginBottom: "6px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontSize: "15px",
                    fontWeight: "500",
                    color: isActive ? "#ffffff" : "#333333",
                    backgroundColor: isActive ? "#ff6600" : "transparent",
                    transition: "all 0.3s ease",
                  })}
                >
                  <span style={{ fontSize: "18px" }}>{icon}</span>
                  <span>{label}</span>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}