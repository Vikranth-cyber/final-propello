import React from 'react';
import { RiWalletLine } from 'react-icons/ri';
import { useMediaQuery } from 'react-responsive';

const Billings = () => {
  const billingHistory = [
    { date: '2025-05-01', amount: '₹999', method: 'UPI', status: 'Paid' },
    { date: '2025-04-01', amount: '₹999', method: 'Credit Card', status: 'Paid' },
    { date: '2025-03-01', amount: '₹999', method: 'Credit Card', status: 'Paid' },
  ];
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="premium-container">
      <div className="step-content">
        <div className="page-header">
          <RiWalletLine size={isMobile ? 28 : 32} color="#fc466b" />
          <h1>Billing & Payments</h1>
          <p>Manage your subscription and payment methods</p>
        </div>

        {/* Subscription Info */}
        <div className="billing-card">
          <h3>Subscription Details</h3>
          <div className="billing-grid">
            <div className="billing-item">
              <p className="billing-label">Plan</p>
              <p className="billing-value">Pro Monthly</p>
            </div>
            <div className="billing-item">
              <p className="billing-label">Next Renewal</p>
              <p className="billing-value">July 1, 2025</p>
            </div>
            <div className="billing-item">
              <p className="billing-label">Status</p>
              <p className="billing-value status-active">Active</p>
            </div>
            <div className="billing-item">
              <p className="billing-label">Price</p>
              <p className="billing-value">₹999/month</p>
            </div>
          </div>
          <button className="primary-btn">Change Plan</button>
        </div>

        {/* Billing History */}
        <div className="billing-card">
          <h3>Billing History</h3>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Method</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {billingHistory.map((entry, idx) => (
                  <tr key={idx}>
                    <td>{entry.date}</td>
                    <td>{entry.amount}</td>
                    <td>{entry.method}</td>
                    <td className={entry.status === 'Paid' ? 'status-paid' : 'status-failed'}>
                      {entry.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Payment Method */}
        <div className="billing-card">
          <h3>Payment Method</h3>
          <div className="payment-method">
            <div>
              <p className="billing-label">Current Method</p>
              <p className="billing-value">UPI - vik***@oksbi</p>
            </div>
            <button className="secondary-btn">Update Payment Method</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = `
.premium-container {
  width: calc(100% - 250px);
  min-height: calc(100vh - 80px);
  margin: 80px 0 0 250px;
  padding: 30px;
  background: #ffffff;
  box-sizing: border-box;
  position: relative;
  font-family: 'Inter', sans-serif;
}

.step-content {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  flex: 1;
}

.page-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 40px;
}

.page-header h1 {
  font-size: 2rem;
  font-weight: 700;
  margin: 15px 0 10px;
  background: linear-gradient(90deg, #fc466b, #3f5efb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.page-header p {
  color: #666;
  font-size: 1rem;
  margin: 0;
}

.billing-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(252, 70, 107, 0.1);
  margin-bottom: 30px;
}

.billing-card h3 {
  background: linear-gradient(90deg, #fc466b, #3f5efb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 25px;
  font-size: 1.3rem;
  font-weight: 600;
}

.billing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.billing-item {
  margin-bottom: 15px;
}

.billing-label {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 5px;
}

.billing-value {
  color: #333;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
}

.status-active {
  background: linear-gradient(90deg, #fc466b, #3f5efb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}

.status-paid {
  background: linear-gradient(90deg, #fc466b, #3f5efb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}

.status-failed {
  color: #ff4c4c;
  font-weight: 600;
}

.table-container {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  text-align: left;
  padding: 12px 16px;
  background: linear-gradient(90deg, #fc466b, #3f5efb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 0.9rem;
  font-weight: 600;
  border-bottom: 2px solid rgba(252, 70, 107, 0.2);
}

td {
  padding: 12px 16px;
  color: #333;
  font-size: 0.95rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

tr:hover {
  background-color: rgba(252, 70, 107, 0.03);
}

.payment-method {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.primary-btn {
  background: linear-gradient(90deg, #fc466b, #3f5efb);
  color: white;
  border: none;
  padding: 14px 30px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  box-shadow: 0 4px 15px rgba(252, 70, 107, 0.3);
}

.primary-btn:hover {
  background: linear-gradient(90deg, #e14269, #2d4bd8);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(252, 70, 107, 0.4);
}

.secondary-btn {
  background: white;
  color: #fc466b;
  border: 1px solid #fc466b;
  padding: 14px 30px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.secondary-btn:hover {
  background: rgba(252, 70, 107, 0.1);
}

/* Responsive */
@media (max-width: 1024px) {
  .premium-container {
    width: 100%;
    margin-left: 0;
    padding: 20px;
  }
}

@media (max-width: 768px) {
  .premium-container {
    margin-top: 120px;
    padding: 15px;
  }

  .page-header h1 {
    font-size: 1.8rem;
  }

  .billing-card {
    padding: 20px;
  }

  .billing-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .page-header h1 {
    font-size: 1.5rem;
  }

  .billing-grid {
    grid-template-columns: 1fr;
  }

  .payment-method {
    flex-direction: column;
    align-items: flex-start;
  }

  .secondary-btn {
    width: 100%;
  }
}
`;

const styleTag = document.createElement('style');
styleTag.innerHTML = styles;
document.head.appendChild(styleTag);

export default Billings;