import React from 'react';
import { FaHome, FaChartLine, FaUserCog, FaListAlt } from 'react-icons/fa';

const UserHome = () => {
  return (
    <div className="user-dashboard">
      <aside className="user-sidebar">
        <div className="user-sidebar-title">📊 PMS User</div>
        <ul className="user-nav-menu">
          <li className="active"><FaHome className="icon" /> Home</li>
          <li><FaChartLine className="icon" /> Trade Settings</li>
          <li><FaUserCog className="icon" /> Account Management</li>
          <li><FaListAlt className="icon" /> Transaction History</li>
        </ul>
      </aside>

      <main className="user-main-content">
        <h1 className="user-page-title">Portfolio Overview</h1>

        <div className="user-metrics-container">
          <div className="user-metric-card">
            <div className="user-metric-info">
              <p>Current Balance</p>
              <h3>$4000.00</h3>
            </div>
          </div>

          <div className="user-metric-card">
            <div className="user-metric-info">
              <p>Active Trades</p>
              <h3 className="green-text">2 <span>📈</span></h3>
            </div>
          </div>

          <div className="user-metric-card">
            <div className="user-metric-info">
              <p>Profit (30d)</p>
              <h3 className="purple-text">$320 <span>📈</span></h3>
            </div>
          </div>
        </div>

        <div className="user-chart-card">
          <h2 className="chart-title">Profit/Loss Overview</h2>
          <div className="chart-placeholder">[Chart Placeholder]</div>
        </div>
      </main>
    </div>
  );
};

export default UserHome;
