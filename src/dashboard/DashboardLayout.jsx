import React from "react";
import Sidebar from "./layout/Sidebar";
import Header from "./layout/Header";
import { Outlet } from "react-router-dom";

const layoutStyle = {
  display: "flex",
  width: "100vw",
  minHeight: "100vh", // Changed from height to minHeight
  overflow: "hidden",
};

const contentWrapper = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh", // Changed from height to minHeight
  overflow: "hidden",
};

const contentArea = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start", // Changed from center to flex-start for better scrolling
  backgroundColor: "#f9f9f9",
  padding: "20px",
  overflowY: "auto", // Changed to allow vertical scrolling
  overflowX: "hidden",
  width: "100%",
};

export default function DashboardLayout() {
  return (
    <div style={layoutStyle}>
      <Sidebar />
      <div style={contentWrapper}>
        <Header />
        <main style={contentArea}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}