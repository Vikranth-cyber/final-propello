import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
  RiDashboardLine,
  RiSettingsLine,
  RiUserLine,
  RiLockLine,
  RiWalletLine,
  RiMenu3Line,
  RiCloseLine
} from 'react-icons/ri';
import {
  MdOutlineAnalytics,
  MdOutlineSchedule,
  MdOutlineHelp,
  MdOutlineLibraryBooks,
  MdOutlineContactSupport
} from 'react-icons/md';
import { BsMic, BsFileText } from 'react-icons/bs';

const Sidebar = () => {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile); // open by default on desktop

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1024;
      setIsMobile(mobile);
      setSidebarOpen(!mobile);
    };

    handleResize(); // run initially
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderButton = (name, icon, path) => {
    const isActive = location.pathname === `/dashboard${path}`;
    const isHovered = hoveredItem === name;

    return (
      <Link
        to={`/dashboard${path}`}
        key={name}
        onMouseEnter={() => setHoveredItem(name)}
        onMouseLeave={() => setHoveredItem(null)}
        style={{
          textDecoration: 'none',
          margin: '8px 0',
          padding: '14px 20px',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          fontSize: '15px',
          fontWeight: '500',
          background: isActive ? 'rgba(0, 180, 255, 0.1)' : 'transparent',
          color: isActive ? '#007acc' : '#444',
          borderLeft: isActive ? '4px solid #007acc' : 'none',
          width: '100%',
          transition: 'all 0.3s',
          transform: isHovered ? 'translateX(4px)' : 'none'
        }}
      >
        <span style={{ fontSize: '20px' }}>{icon}</span>
        <span>{name}</span>
      </Link>
    );
  };

  return (
    <>
      {isMobile && (
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={{
            position: 'fixed',
            top: '24px',
            right: '24px',
            zIndex: 1000,
            background: '#007acc',
            border: 'none',
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            padding: '12px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0, 122, 204, 0.3)',
            transition: 'all 0.3s ease'
          }}
          aria-label="Toggle menu"
        >
          {sidebarOpen ? (
            <RiCloseLine style={{ color: 'white', fontSize: '24px' }} />
          ) : (
            <RiMenu3Line style={{ color: 'white', fontSize: '24px' }} />
          )}
        </button>
      )}

      <div
        style={{
          position: isMobile ? 'fixed' : 'relative',
          zIndex: 900,
          transform: isMobile
            ? sidebarOpen
              ? 'translateX(0)'
              : 'translateX(-100%)'
            : 'none',
          transition: 'transform 0.4s ease',
          height: '100%',
          width: isMobile ? '280px' : '300px',
          backgroundColor: '#fff',
          boxShadow: isMobile
            ? '4px 0 30px rgba(0, 0, 0, 0.1)'
            : '2px 0 20px rgba(0, 0, 0, 0.05)',
          borderRight: isMobile ? 'none' : '1px solid rgba(0, 0, 0, 0.05)'
        }}
      >
        <aside
          style={{
            width: '100%',
            height: '100%',
            padding: '28px 20px',
            color: '#333',
            overflowY: 'auto'
          }}
        >
          <h1
            style={{
              color: '#007acc',
              fontSize: '24px',
              fontWeight: '700',
              marginBottom: '36px',
              paddingLeft: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#007acc" />
              <path d="M2 17L12 22L22 17" fill="#007acc" />
              <path d="M2 12L12 17L22 12" fill="#007acc" />
            </svg>
            PROPELLO AI
          </h1>

          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '28px' }}>
            {renderButton('Dashboard', <RiDashboardLine />, '')}
          </ul>

          <div style={{ margin: '16px 0', fontSize: '12px', fontWeight: '600', color: '#007acc' }}>Call Center</div>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '28px' }}>
            {renderButton('Recordings', <BsMic />, '/recordings')}
            {renderButton('Scripts', <BsFileText />, '/scripts')}
            {renderButton('Analytics', <MdOutlineAnalytics />, '/analytics')}
            {renderButton('Scheduling', <MdOutlineSchedule />, '/scheduling')}
          </ul>

          <div style={{ margin: '16px 0', fontSize: '12px', fontWeight: '600', color: '#007acc' }}>Account</div>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '28px' }}>
            {renderButton('Profile', <RiUserLine />, '/profile')}
            {renderButton('Security', <RiLockLine />, '/security')}
            {renderButton('Settings', <RiSettingsLine />, '/settings')}
            {renderButton('Billing', <RiWalletLine />, '/billing')}
          </ul>

          <div style={{ margin: '16px 0', fontSize: '12px', fontWeight: '600', color: '#007acc' }}>Support</div>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {renderButton('Help Center', <MdOutlineHelp />, '/help-center')}
            {renderButton('Docs', <MdOutlineLibraryBooks />, '/docs')}
            {renderButton('Contact', <MdOutlineContactSupport />, '/contact')}
          </ul>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
