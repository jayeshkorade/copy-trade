import { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    acceptTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Submit to backend
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
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

      <div className="form-footer">
        <label className="terms-checkbox">
          <input 
            type="checkbox"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onChange={handleChange}
            required
          />
          I agree to the Terms of Service and Privacy Policy
        </label>
        <button type="submit" className="btn-primary">
          Create Account
        </button>
      </div>
    </form>
  );
};

export default SignupForm;