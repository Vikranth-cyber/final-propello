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
  const [isHD, setIsHD] = useState(window.innerWidth <= 1366);
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1024;
      const hd = window.innerWidth <= 1366;
      setIsMobile(mobile);
      setIsHD(hd);
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
            background: "linear-gradient(135deg, #fc466b, #3f5efb)",
            border: "none",
            borderRadius: "50%",
            width: "48px",
            height: "48px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(252, 70, 107, 0.3)",
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
          width: isHD ? "220px" : "250px",
          height: "100vh",
          backgroundColor: "#ffffff",
          borderRight: "2px solid #fc466b",
          boxShadow: isMobile ? "4px 0 20px rgba(0,0,0,0.1)" : "none",
          zIndex: 999,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            overflowY: "auto",
            padding: isHD ? "20px 16px" : "28px 20px",
          }}
        >
          {/* Logo - Reduced height */}
          <div style={{ 
            marginBottom: isHD ? "24px" : "32px",
            display: "flex",
            justifyContent: "center"
          }}>
            <img 
              src="/FullLogo_whitebackground.png" 
              alt="Propello AI" 
              style={{ 
                height: isHD ? "35px" : "40px",
                width: "auto",
                maxWidth: "120px",
                objectFit: "contain"
              }} 
            />
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
                      margin: isHD ? "16px 0 6px" : "20px 0 8px",
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#fc466b",
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
                    gap: "12px",
                    padding: isHD ? "10px 14px" : "12px 18px",
                    marginBottom: "6px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontSize: isHD ? "14px" : "15px",
                    fontWeight: "500",
                    color: isActive ? "#ffffff" : "#333333",
                    backgroundColor: isActive ? "linear-gradient(135deg, #fc466b, #3f5efb)" : "transparent",
                    background: isActive ? "linear-gradient(135deg, #fc466b, #3f5efb)" : "transparent",
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