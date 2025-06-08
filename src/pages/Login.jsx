import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
    // Add your authentication logic here
    // On successful login:
    navigate('/dashboard');
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="login-container">
          <div className="login-header">
            <h1>Welcome Back</h1>
            <p>Sign in to access your Crypto PMS account</p>
          </div>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-control">
              <label>Email Address</label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-control">
              <label>Password</label>
              <input 
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn-primary">
              Sign In
            </button>
            
            <div className="login-footer">
              <p>Don't have an account? <a href="/signup">Sign up</a></p>
              <p><a href="/forgot-password">Forgot password?</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;