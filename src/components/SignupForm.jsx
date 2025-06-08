import { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    mobile: '',
    password: '',
    bitgetApiKey: '',
    bitgetSecretKey: '',
    bitgetPassphrase: '',
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
        <label>Mobile Number</label>
        <input 
          type="tel"
          name="mobile"
          value={formData.mobile}
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

      <div className="form-control">
        <label>Bitget API Key</label>
        <input 
          type="text"
          name="bitgetApiKey"
          value={formData.bitgetApiKey}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-control">
        <label>Bitget Secret Key</label>
        <input 
          type="password"
          name="bitgetSecretKey"
          value={formData.bitgetSecretKey}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-control">
        <label>Bitget Passphrase</label>
        <input 
          type="password"
          name="bitgetPassphrase"
          value={formData.bitgetPassphrase}
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