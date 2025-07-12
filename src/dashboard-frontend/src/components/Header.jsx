import React, { useState, useEffect } from 'react';
import { FiLogOut, FiBell, FiHelpCircle } from 'react-icons/fi';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const navigate = useNavigate();

  const toggleDropdown = (type, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setDropdownPosition({ top: rect.bottom + 8, left: rect.left });
    if (type === 'notifications') {
      setShowHelp(false);
      setShowNotifications(!showNotifications);
    } else {
      setShowNotifications(false);
      setShowHelp(!showHelp);
    }
  };

  useEffect(() => {
    const close = () => {
      setShowNotifications(false);
      setShowHelp(false);
    };
    window.addEventListener('click', close);
    return () => window.removeEventListener('click', close);
  }, []);

  const handleLogout = () => {
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
        left: dropdownPosition.left,
        width: '280px',
        backgroundColor: '#fdfdfd',
        padding: '15px',
        borderRadius: '12px',
        border: '1px solid #8B5CF6',
        color: '#333',
        zIndex: 9999,
        boxShadow: '0 6px 20px rgba(139, 92, 246, 0.2)'
      }}>
        {children}
      </div>,
      document.body
    );

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '20px',
      padding: '20px 30px',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      border: '1px solid #E0E7FF',
      boxShadow: '0 4px 16px rgba(14, 165, 233, 0.1)',
      position: 'relative'
    }}>
      {/* Left Section */}
      <div>
        <h1 style={{ fontSize: '24px', fontWeight: '700', margin: 0, color: '#0EA5E9' }}>
          PROPELLO AI
        </h1>
        <p style={{ color: '#8B5CF6', fontSize: '13px', margin: '4px 0 0', fontWeight: '500' }}>
          AI-powered analytics dashboard
        </p>
      </div>

      {/* Right Section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div onClick={(e) => {
          e.stopPropagation();
          toggleDropdown('help', e);
        }} style={{ cursor: 'pointer' }}>
          <FiHelpCircle size={20} color="#D946EF" />
        </div>

        <div onClick={(e) => {
          e.stopPropagation();
          toggleDropdown('notifications', e);
        }} style={{ position: 'relative', cursor: 'pointer' }}>
          <FiBell size={20} color="#06B6D4" />
          <div style={{
            position: 'absolute',
            top: '-5px',
            right: '-5px',
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

        <div style={{ height: '40px', width: '1px', backgroundColor: '#E5E7EB' }}></div>

        {/* Log Out Button */}
        <button
          onClick={handleLogout}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            background: '#ef4444', // red
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            fontWeight: '600',
            fontSize: '14px',
            cursor: 'pointer',
            transition: 'background 0.3s ease'
          }}
          onMouseOver={e => e.currentTarget.style.background = '#dc2626'}
          onMouseOut={e => e.currentTarget.style.background = '#ef4444'}
        >
          <FiLogOut size={18} />
          Log Out
        </button>
      </div>

      {/* Dropdowns */}
      {showHelp && (
        <DropdownCard>
          <strong style={{ color: '#8B5CF6' }}>What is Propello AI?</strong>
          <p style={{ fontSize: '13px', marginTop: '10px' }}>
            Propello AI is a smart voice caller bot platform designed to automate and analyze your call campaigns across industries.
          </p>
        </DropdownCard>
      )}

      {showNotifications && (
        <DropdownCard>
          <strong style={{ color: '#06B6D4' }}>Notifications</strong>
          <ul style={{ fontSize: '13px', marginTop: '10px', paddingLeft: '16px' }}>
            <li>New lead from Real Estate</li>
            <li>Bot call scheduled for 2PM</li>
            <li>Subscription renewal tomorrow</li>
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
            width: '300px',
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
