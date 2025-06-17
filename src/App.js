import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UserHome from './pages/UserHome';
import TradeSettings from './pages/TradeSettings';
import AdminReg from './pages/AdminReg';
import AdminLogin from './pages/AdminLogin';
import TradeManagement from './pages/TradeManagement';
// import AccountManagement from './components/AccountManagement';
// import TransactionHistory from './components/TransactionHistory';
import UserLayout from './components/UserLayout'; 
import './App.css';

function AppWrapper() {
  const location = useLocation();
  const isAuthPage =
    location.pathname === '/login' ||
    location.pathname === '/signup' ||
    location.pathname === '/admin-login' ||
    location.pathname === '/admin-signup' ||
    location.pathname === '/';

  return (
    <div className={`${isAuthPage ? 'auth-page' : ''}`}>
      <Routes>
        {/* Public / Auth routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin-signup" element={<AdminReg />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/" element={<Login />} />
        <Route path="/trade-management" element={<TradeManagement />} />

        {/* Protected User Routes using a common layout */}
        <Route path="/user" element={<UserLayout />}>
          <Route path="home" element={<UserHome />} />
          <Route path="trade-settings" element={<TradeSettings />} />
          {/* <Route path="account-management" element={<AccountManagement />} />
          <Route path="transaction-history" element={<TransactionHistory />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
