import { useState } from 'react';
import { FiHome, FiTrendingUp, FiUsers, FiBarChart2 } from 'react-icons/fi';
import { BsPersonFill, BsGraphUp, BsCurrencyDollar } from 'react-icons/bs';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="sidebar-title">PMS Admin</h2>
        <ul className="nav-menu">
          <li 
            className={activeTab === 'dashboard' ? 'active' : ''}
            onClick={() => setActiveTab('dashboard')}
          >
            <FiHome className="icon" />
            <span>Dashboard</span>
          </li>
          <li 
            className={activeTab === 'trade' ? 'active' : ''}
            onClick={() => setActiveTab('trade')}
          >
            <FiTrendingUp className="icon" />
            <span>Trade Management</span>
          </li>
          <li 
            className={activeTab === 'portfolio' ? 'active' : ''}
            onClick={() => setActiveTab('portfolio')}
          >
            <FiUsers className="icon" />
            <span>User Portfolio</span>
          </li>
          <li 
            className={activeTab === 'reports' ? 'active' : ''}
            onClick={() => setActiveTab('reports')}
          >
            <FiBarChart2 className="icon" />
            <span>Reports & Analytics</span>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1 className="page-title">Dashboard Overview</h1>
        
        {/* Metrics Cards */}
        <div className="metrics-container">
          <div className="metric-card">
            <div className="metric-icon user-icon">
              <BsPersonFill />
            </div>
            <div className="metric-info">
              <h3>124</h3>
              <p>Total Users</p>
            </div>
          </div>
          
          <div className="metric-card">
            <div className="metric-icon trade-icon">
              <BsGraphUp />
            </div>
            <div className="metric-info">
              <h3>37</h3>
              <p>Active Trades</p>
            </div>
          </div>
          
          <div className="metric-card">
            <div className="metric-icon profit-icon">
              <BsCurrencyDollar />
            </div>
            <div className="metric-info">
              <h3>$11,950</h3>
              <p>Profit (30d)</p>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="charts-container">
          <div className="chart-card">
            <h3 className="chart-title">Trade Performance</h3>
            <div className="chart-placeholder">
              [Performance Chart Here]
            </div>
          </div>
          <div className="chart-card">
            <h3 className="chart-title">Registered Users</h3>
            <div className="chart-placeholder">
              [Users Trend Chart Here]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;