import React, { useState, useEffect, useRef } from 'react';
import { FiLogOut, FiBell, FiHelpCircle } from 'react-icons/fi';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, right: 0 });
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const headerRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDropdown = (type, e) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const headerRect = headerRef.current?.getBoundingClientRect();
    
    if (isMobile) {
      setDropdownPosition({
        top: headerRect ? headerRect.bottom + 10 : rect.bottom + 10,
        right: 20 // Consistent right margin
      });
    } else {
      setDropdownPosition({
        top: rect.bottom + 8,
        left: rect.left
      });
    }

    if (type === 'notifications') {
      setShowHelp(false);
      setShowNotifications(!showNotifications);
    } else {
      setShowNotifications(false);
      setShowHelp(!showHelp);
    }
  };

  useEffect(() => {
    const closeDropdowns = (e) => {
      if (!e.target.closest('.dropdown-trigger')) {
        setShowNotifications(false);
        setShowHelp(false);
      }
    };
    window.addEventListener('click', closeDropdowns);
    return () => window.removeEventListener('click', closeDropdowns);
  }, []);

  const handleLogout = (e) => {
    e.stopPropagation();
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    setShowLogoutModal(false);
    navigate('/');
  };

  const DropdownCard = ({ children }) =>
    createPortal(
      <div style={{
        position: 'fixed',
        top: dropdownPosition.top,
        ...(isMobile ? { 
          right: dropdownPosition.right,
          left: dropdownPosition.right,
          width: 'calc(100% - 40px)'
        } : { 
          left: dropdownPosition.left,
          width: '280px'
        }),
        backgroundColor: '#ffffff',
        padding: '15px',
        borderRadius: '12px',
        border: '1px solid #8B5CF6',
        color: '#333',
        zIndex: 9999,
        boxShadow: '0 6px 20px rgba(139, 92, 246, 0.2)',
        maxHeight: isMobile ? '60vh' : 'none',
        overflowY: 'auto'
      }}>
        {children}
      </div>,
      document.body
    );

  return (
    <div 
      ref={headerRef}
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: isMobile ? 'stretch' : 'center',
        gap: isMobile ? '12px' : '20px',
        padding: isMobile ? '15px 20px' : '20px 30px',
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        border: '1px solid #E0E7FF',
        boxShadow: '0 4px 16px rgba(14, 165, 233, 0.1)',
        position: 'relative',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      {/* Left Section */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: isMobile ? 'center' : 'flex-start'
      }}>
        <h1 style={{ 
          fontSize: isMobile ? '20px' : '24px', 
          fontWeight: '700', 
          margin: 0, 
          color: '#0EA5E9',
          textAlign: isMobile ? 'center' : 'left'
        }}>
          PROPELLO AI
        </h1>
        <p style={{ 
          color: '#8B5CF6', 
          fontSize: isMobile ? '11px' : '13px', 
          margin: '4px 0 0', 
          fontWeight: '500',
          textAlign: isMobile ? 'center' : 'left'
        }}>
          AI-powered analytics dashboard
        </p>
      </div>

      {/* Right Section */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: isMobile ? 'space-around' : 'flex-end',
        gap: isMobile ? '15px' : '20px',
        padding: isMobile ? '5px 0' : '0'
      }}>
        <div 
          className="dropdown-trigger"
          onClick={(e) => toggleDropdown('help', e)} 
          style={{ 
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: isMobile ? '8px' : '0'
          }}
        >
          <FiHelpCircle size={isMobile ? 22 : 20} color="#D946EF" />
        </div>

        <div 
          className="dropdown-trigger"
          onClick={(e) => toggleDropdown('notifications', e)} 
          style={{ 
            position: 'relative', 
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: isMobile ? '8px' : '0'
          }}
        >
          <FiBell size={isMobile ? 22 : 20} color="#06B6D4" />
          <div style={{
            position: 'absolute',
            top: '-3px',
            right: '-3px',
            backgroundColor: '#F43F5E',
            borderRadius: '50%',
            width: '16px',
            height: '16px',
            fontSize: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff'
          }}>3</div>
        </div>

        {!isMobile && (
          <div style={{ height: '40px', width: '1px', backgroundColor: '#E5E7EB' }}></div>
        )}

        {/* Log Out Button */}
        <button
          className="dropdown-trigger"
          onClick={handleLogout}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            padding: isMobile ? '10px 12px' : '12px 24px',
            background: '#ef4444',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            fontWeight: '600',
            fontSize: isMobile ? '13px' : '14px',
            cursor: 'pointer',
            transition: 'background 0.3s ease',
            minWidth: isMobile ? 'auto' : '100px'
          }}
          onMouseOver={e => e.currentTarget.style.background = '#dc2626'}
          onMouseOut={e => e.currentTarget.style.background = '#ef4444'}
        >
          <FiLogOut size={isMobile ? 18 : 18} />
          {!isMobile && 'Log Out'}
        </button>
      </div>

      {/* Dropdowns */}
      {showHelp && (
        <DropdownCard>
          <strong style={{ color: '#8B5CF6', fontSize: '15px' }}>What is Propello AI?</strong>
          <p style={{ fontSize: '14px', marginTop: '10px', lineHeight: '1.5' }}>
            Propello AI is a smart voice caller bot platform designed to automate and analyze your call campaigns across industries.
          </p>
        </DropdownCard>
      )}

      {showNotifications && (
        <DropdownCard>
          <strong style={{ color: '#06B6D4', fontSize: '15px' }}>Notifications</strong>
          <ul style={{ 
            fontSize: '14px', 
            marginTop: '10px', 
            paddingLeft: '16px',
            listStyleType: 'disc'
          }}>
            <li style={{ marginBottom: '8px', lineHeight: '1.4' }}>New lead from Real Estate</li>
            <li style={{ marginBottom: '8px', lineHeight: '1.4' }}>Bot call scheduled for 2PM</li>
            <li style={{ marginBottom: '8px', lineHeight: '1.4' }}>Subscription renewal tomorrow</li>
            <li style={{ marginBottom: '8px', lineHeight: '1.4' }}>New feature update available</li>
            <li style={{ lineHeight: '1.4' }}>Performance report generated</li>
          </ul>
        </DropdownCard>
      )}

      {/* Logout Modal */}
      {showLogoutModal && createPortal(
        <div style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000
        }}>
          <div style={{
            background: '#fff',
            padding: '24px',
            borderRadius: '12px',
            width: isMobile ? '90%' : '300px',
            maxWidth: '400px',
            textAlign: 'center',
            boxShadow: '0 6px 20px rgba(0,0,0,0.2)'
          }}>
            <h3 style={{ color: '#ef4444', marginBottom: '12px' }}>Are you sure?</h3>
            <p style={{ marginBottom: '20px', fontSize: '14px' }}>
              Do you really want to log out?
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
              <button
                onClick={confirmLogout}
                style={{
                  flex: 1,
                  backgroundColor: '#ef4444',
                  color: '#fff',
                  padding: '10px',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                Yes
              </button>
              <button
                onClick={() => setShowLogoutModal(false)}
                style={{
                  flex: 1,
                  backgroundColor: '#e5e7eb',
                  color: '#333',
                  padding: '10px',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default Header;