import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCards from './components/StatCards';
import CallsStats from './components/CallsStats';
import CallGraphs from './components/CallGraphs';
import SummaryTable from './components/SummaryTable';
import BotPerformance from './components/BotPerformance';
import Transactions from './components/Transactions';
import AuthModal from './components/AuthModal';
import './global.css';

function App() {
  const [showAuth, setShowAuth] = useState(false);
  const [currentPage, setCurrentPage] = useState('Dashboard');

  const appStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '100vw',
    height: '100vh',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    color: '#1F2937', // Gray-800 text
    fontFamily: "'Inter', sans-serif",
    boxSizing: 'border-box'
  };

  const contentStyle = {
    flex: 1,
    padding: '24px',
    overflowY: 'auto',
    backgroundColor: '#F9FAFB' // light gray card contrast
  };

  const gridLayout = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    marginBottom: '30px'
  };

  const handlePageSelect = (page) => setCurrentPage(page);

  return (
    <div style={appStyle}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Sidebar onSelectPage={handlePageSelect} />

      <div style={contentStyle}>
        {currentPage === 'Dashboard' ? (
          <>
            <Header onLoginClick={() => setShowAuth(true)} />
            <StatCards />
            <CallsStats />
            <div style={gridLayout}>
              <CallGraphs />
              <Transactions />
            </div>
            <SummaryTable />
            <BotPerformance />
          </>
        ) : (
          currentPage
        )}
      </div>

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </div>
  );
}

export default App;
