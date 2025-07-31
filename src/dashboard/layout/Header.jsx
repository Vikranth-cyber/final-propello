import React, { useState, useEffect, useRef } from "react";
import { FiLogOut, FiBell, FiHelpCircle, FiMenu } from "react-icons/fi";
import { createPortal } from "react-dom";

const Header = ({ toggleSidebar }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const iconRef = useRef(null);

  const updateDropdownPosition = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const dropdownWidth = 280;
    const left = Math.min(rect.left, window.innerWidth - dropdownWidth - 16);
    setDropdownPosition({ top: rect.bottom + 8, left });
  };

  const toggleDropdown = (type, e) => {
    e.stopPropagation();
    updateDropdownPosition(e);
    if (type === "notifications") {
      setShowHelp(false);
      setShowNotifications(!showNotifications);
    } else {
      setShowNotifications(false);
      setShowHelp(!showHelp);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleClickOutside = () => {
      setShowNotifications(false);
      setShowHelp(false);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  const DropdownCard = ({ children }) =>
    createPortal(
      <div
        style={{
          position: "fixed",
          top: dropdownPosition.top,
          left: dropdownPosition.left,
          width: "280px",
          backgroundColor: "#ffffff",
          padding: "16px",
          borderRadius: "12px",
          border: "1px solid #ff6600",
          color: "#333",
          zIndex: 9999,
          boxShadow: "0 6px 24px rgba(255, 102, 0, 0.1)",
        }}
      >
        {children}
      </div>,
      document.body
    );

  const isMobile = windowWidth <= 768;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: isMobile ? "flex-start" : "center",
        padding: "20px",
        backgroundColor: "#ffffff",
        borderBottom: "2px solid #ff6600",
        position: "fixed",
        top: 0,
        left: windowWidth > 1024 ? "250px" : 0,
        width: windowWidth > 1024 ? "calc(100% - 250px)" : "100%",
        zIndex: 100,
      }}
    >
      {/* Top Row (Title + Menu Button on mobile) */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          marginBottom: isMobile ? "15px" : 0,
        }}
      >
        {/* Title */}
        <div>
          <h1 style={{ fontSize: "22px", fontWeight: "700", color: "#ff6600", margin: 0 }}>
            PROPELLO AI
          </h1>
          <p style={{ fontSize: "13px", color: "#ff6600", margin: "4px 0 0", fontWeight: "500" }}>
            Smart Voice Bot Platform
          </p>
        </div>

        {/* Menu Button (Mobile only) */}
        {isMobile && (
          <button
            onClick={toggleSidebar}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "5px",
            }}
          >
            <FiMenu size={24} color="#ff6600" />
          </button>
        )}
      </div>

      {/* Buttons Row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          width: isMobile ? "100%" : "auto",
          justifyContent: isMobile ? "space-between" : "flex-end",
        }}
      >
        {/* Help */}
        <div
          ref={iconRef}
          onClick={(e) => toggleDropdown("help", e)}
          style={{ cursor: "pointer" }}
        >
          <FiHelpCircle size={20} color="#ff6600" />
        </div>

        {/* Notifications */}
        <div
          onClick={(e) => toggleDropdown("notifications", e)}
          style={{ position: "relative", cursor: "pointer" }}
        >
          <FiBell size={20} color="#ff6600" />
          <div
            style={{
              position: "absolute",
              top: "-5px",
              right: "-5px",
              backgroundColor: "#ff3300",
              borderRadius: "50%",
              width: "16px",
              height: "16px",
              fontSize: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
            }}
          >
            3
          </div>
        </div>

        {/* Divider */}
        {!isMobile && (
          <div
            style={{
              height: "40px",
              width: "1px",
              backgroundColor: "#eee",
            }}
          ></div>
        )}

        {/* Logout */}
        <button
          onClick={handleLogout}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 20px",
            background: "#ff3333",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontWeight: "600",
            fontSize: "14px",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = "#e60000")}
          onMouseOut={(e) => (e.currentTarget.style.background = "#ff3333")}
        >
          <FiLogOut size={18} />
          Logout
        </button>
      </div>

      {/* Dropdowns */}
      {showHelp && (
        <DropdownCard>
          <strong style={{ color: "#ff6600" }}>What is Propello AI?</strong>
          <p style={{ fontSize: "13px", marginTop: "10px" }}>
            Propello AI is a voice bot platform to automate and manage calls across your industry campaigns.
          </p>
        </DropdownCard>
      )}

      {showNotifications && (
        <DropdownCard>
          <strong style={{ color: "#ff6600" }}>Notifications</strong>
          <ul style={{ fontSize: "13px", marginTop: "10px", paddingLeft: "16px" }}>
            <li>New lead from Real Estate</li>
            <li>Bot call scheduled for 2PM</li>
            <li>Subscription renewal tomorrow</li>
          </ul>
        </DropdownCard>
      )}
    </div>
  );
};

export default Header;