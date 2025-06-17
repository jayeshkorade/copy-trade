import React from 'react';

const UserHome = () => {
  return (
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
  );
};

export default UserHome;
