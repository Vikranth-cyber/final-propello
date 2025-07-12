import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "../dashboard-frontend/src/components/Sidebar";
import StatCards from "../dashboard-frontend/src/components/StatCards";
import CallsStats from "../dashboard-frontend/src/components/CallsStats";
import CallGraphs from "../dashboard-frontend/src/components/CallGraphs";
import SummaryTable from "../dashboard-frontend/src/components/SummaryTable";
import BotPerformance from "../dashboard-frontend/src/components/BotPerformance";
import Transactions from "../dashboard-frontend/src/components/Transactions";

// Sub-pages from Sidebar folder
import AnalyticsPage from "../dashboard-frontend/src/Sidebar/AnalyticsPage";
import BillingPage from "../dashboard-frontend/src/Sidebar/BillingPage";
import ProfilePage from "../dashboard-frontend/src/Sidebar/ProfilePage";
import ContactPage from "../dashboard-frontend/src/Sidebar/ContactPage";
import DocsPage from "../dashboard-frontend/src/Sidebar/DocsPage";
import HelpCenterPage from "../dashboard-frontend/src/Sidebar/HelpCenterPage";
import RecordingsPage from "../dashboard-frontend/src/Sidebar/RecordingsPage";
import SchedulingPage from "../dashboard-frontend/src/Sidebar/SchedulingPage";
import ScriptsPage from "../dashboard-frontend/src/Sidebar/ScriptsPage";
import SecurityPage from "../dashboard-frontend/src/Sidebar/SecurityPage";
import SettingsPage from "../dashboard-frontend/src/Sidebar/SettingsPage";
import Header from "../dashboard-frontend/src/components/Header";

const DashboardHome = () => (
  <>
    <Header />
    <StatCards />
    <CallsStats />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        marginBottom: '30px'
      }}
    >
      <CallGraphs />
      <Transactions />
    </div>
    <SummaryTable />
    <BotPerformance />
  </>
);

const DashboardPage = () => {
  return (
    <div
      style={{
        all: "initial",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        height: "100vh",
        overflow: "hidden"
      }}
    >
      <Sidebar onSelectPage={() => {}} />
      <div
        style={{
          flex: 1,
          padding: '24px',
          overflowY: 'auto',
          backgroundColor: '#F9FAFB',
          color: '#1F2937'
        }}
      >
        <Routes>
          <Route index element={<DashboardHome />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="billing" element={<BillingPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="docs" element={<DocsPage />} />
          <Route path="help-center" element={<HelpCenterPage />} />
          <Route path="recordings" element={<RecordingsPage />} />
          <Route path="scheduling" element={<SchedulingPage />} />
          <Route path="scripts" element={<ScriptsPage />} />
          <Route path="security" element={<SecurityPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </div>
  );
};

export default DashboardPage;
