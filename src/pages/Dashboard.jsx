import AdminLayout from '../components/AdminLayout';
import { BsPersonFill, BsGraphUp, BsCurrencyDollar } from 'react-icons/bs';

const Dashboard = () => {
  return (
    <AdminLayout>
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
    </AdminLayout>
  );
};

export default Dashboard;
