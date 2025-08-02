import { Routes, Route } from "react-router-dom";
import App from "./App";
import DashboardLayout from "./dashboard/DashboardLayout";

import StartAgent from "./dashboard/pages/StartAgent/StartAgent";
import Analytics from "./dashboard/pages/Analytics";
import RecordingsPage from "./dashboard/pages/Recordings";
import ScriptsPage from "./dashboard/pages/Scripts";
import ProfilePage from "./dashboard/pages/Profile";
import SecurityPage from "./dashboard/pages/Security";
import SettingsPage from "./dashboard/pages/Settings";
import BillingPage from "./dashboard/pages/Billing";
import HelpCenter from "./dashboard/pages/FAQs";
import DocsPage from "./dashboard/pages/Docs";
import ContactPage from "./dashboard/pages/Contact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<App />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<StartAgent />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="recordings" element={<RecordingsPage />} />
        <Route path="scripts" element={<ScriptsPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="security" element={<SecurityPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="billing" element={<BillingPage />} />
        <Route path="faqs" element={<HelpCenter />} />
        <Route path="docs" element={<DocsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
