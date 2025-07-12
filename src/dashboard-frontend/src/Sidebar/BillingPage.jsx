import React from 'react';
import { RiWalletLine } from 'react-icons/ri';
import { useMediaQuery } from 'react-responsive';

const BillingPage = () => {
  const billingHistory = [
    { date: '2025-05-01', amount: '₹999', method: 'UPI', status: 'Paid' },
    { date: '2025-04-01', amount: '₹999', method: 'Credit Card', status: 'Paid' },
    { date: '2025-03-01', amount: '₹999', method: 'Credit Card', status: 'Paid' },
  ];
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div style={{ 
      padding: isMobile ? '20px' : '40px',
      backgroundColor: '#fff',
      minHeight: '100vh'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        marginBottom: '30px'
      }}>
        <RiWalletLine size={28} color="#007acc" />
        <h1 style={{
          color: '#007acc',
          fontSize: isMobile ? '22px' : '28px',
          fontWeight: '700',
          margin: 0,
          letterSpacing: '0.5px'
        }}>
          Billing & Payments
        </h1>
      </div>

      {/* Subscription Info */}
      <div style={{
        backgroundColor: '#fff',
        padding: isMobile ? '20px' : '30px',
        borderRadius: '12px',
        marginBottom: '30px',
        border: '1px solid rgba(0, 180, 255, 0.2)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
      }}>
        <h3 style={{ 
          color: '#007acc',
          marginBottom: '20px',
          fontSize: '18px'
        }}>
          Subscription Details
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '20px',
          marginBottom: '20px'
        }}>
          <div>
            <p style={{ 
              color: '#666',
              fontSize: '14px',
              marginBottom: '4px'
            }}>
              Plan
            </p>
            <p style={{ 
              color: '#333',
              fontSize: '16px',
              fontWeight: '600',
              margin: 0
            }}>
              Pro Monthly
            </p>
          </div>
          
          <div>
            <p style={{ 
              color: '#666',
              fontSize: '14px',
              marginBottom: '4px'
            }}>
              Next Renewal
            </p>
            <p style={{ 
              color: '#333',
              fontSize: '16px',
              fontWeight: '600',
              margin: 0
            }}>
              July 1, 2025
            </p>
          </div>
          
          <div>
            <p style={{ 
              color: '#666',
              fontSize: '14px',
              marginBottom: '4px'
            }}>
              Status
            </p>
            <p style={{ 
              color: '#007acc',
              fontSize: '16px',
              fontWeight: '600',
              margin: 0
            }}>
              Active
            </p>
          </div>
          
          <div>
            <p style={{ 
              color: '#666',
              fontSize: '14px',
              marginBottom: '4px'
            }}>
              Price
            </p>
            <p style={{ 
              color: '#333',
              fontSize: '16px',
              fontWeight: '600',
              margin: 0
            }}>
              ₹999/month
            </p>
          </div>
        </div>
        
        <button style={{
          padding: '12px 24px',
          borderRadius: '8px',
          background: 'linear-gradient(90deg, #007acc 0%, #00b4ff 100%)',
          color: '#fff',
          fontWeight: '600',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px',
          boxShadow: '0 4px 15px rgba(0, 180, 255, 0.3)',
          transition: 'all 0.2s ease',
          ':hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(0, 180, 255, 0.4)'
          }
        }}>
          Change Plan
        </button>
      </div>

      {/* Billing History */}
      <div style={{
        backgroundColor: '#fff',
        padding: isMobile ? '20px' : '30px',
        borderRadius: '12px',
        border: '1px solid rgba(0, 180, 255, 0.2)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        marginBottom: '30px'
      }}>
        <h3 style={{ 
          color: '#007acc',
          marginBottom: '20px',
          fontSize: '18px'
        }}>
          Billing History
        </h3>
        
        <div style={{ overflowX: 'auto' }}>
          <table style={{ 
            width: '100%', 
            borderCollapse: 'collapse',
            minWidth: isMobile ? '100%' : '600px'
          }}>
            <thead>
              <tr style={{ 
                borderBottom: '2px solid rgba(0, 180, 255, 0.2)',
                textAlign: 'left'
              }}>
                <th style={{ 
                  padding: '12px 16px',
                  color: '#007acc',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                  Date
                </th>
                <th style={{ 
                  padding: '12px 16px',
                  color: '#007acc',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                  Amount
                </th>
                <th style={{ 
                  padding: '12px 16px',
                  color: '#007acc',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                  Method
                </th>
                <th style={{ 
                  padding: '12px 16px',
                  color: '#007acc',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {billingHistory.map((entry, idx) => (
                <tr key={idx} style={{ 
                  borderBottom: '1px solid rgba(0, 180, 255, 0.1)',
                  ':hover': {
                    backgroundColor: 'rgba(0, 180, 255, 0.03)'
                  }
                }}>
                  <td style={{ 
                    padding: '12px 16px',
                    color: '#333',
                    fontSize: '14px'
                  }}>
                    {entry.date}
                  </td>
                  <td style={{ 
                    padding: '12px 16px',
                    color: '#333',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}>
                    {entry.amount}
                  </td>
                  <td style={{ 
                    padding: '12px 16px',
                    color: '#666',
                    fontSize: '14px'
                  }}>
                    {entry.method}
                  </td>
                  <td style={{ 
                    padding: '12px 16px',
                    color: entry.status === 'Paid' ? '#007acc' : '#ff4c4c',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}>
                    {entry.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Method */}
      <div style={{
        backgroundColor: '#fff',
        padding: isMobile ? '20px' : '30px',
        borderRadius: '12px',
        border: '1px solid rgba(0, 180, 255, 0.2)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
      }}>
        <h3 style={{ 
          color: '#007acc',
          marginBottom: '20px',
          fontSize: '18px'
        }}>
          Payment Method
        </h3>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px',
          flexDirection: isMobile ? 'column' : 'row',
          gap: '15px'
        }}>
          <div>
            <p style={{ 
              color: '#666',
              fontSize: '14px',
              marginBottom: '4px'
            }}>
              Current Method
            </p>
            <p style={{ 
              color: '#333',
              fontSize: '16px',
              fontWeight: '600',
              margin: 0
            }}>
              UPI - vik***@oksbi
            </p>
          </div>
          
          <button style={{
            padding: '12px 24px',
            borderRadius: '8px',
            background: '#fff',
            color: '#007acc',
            fontWeight: '600',
            border: '1px solid #007acc',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'all 0.2s ease',
            ':hover': {
              backgroundColor: 'rgba(0, 180, 255, 0.1)'
            }
          }}>
            Update Payment Method
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;