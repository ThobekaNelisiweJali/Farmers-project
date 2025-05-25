import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Egg, Mail, Lock, User, MapPin, Eye, EyeOff } from 'lucide-react';
import '../styles/pages/AuthPages.css';

const RegisterPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    location: '',
    accountType: 'farmer'
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration data:', formData);
    // Registration logic would go here
  };
  
  return (
    <div className="auth-page register-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <div className="auth-logo">
              <Egg size={32} />
            </div>
            <h1>Create an Account</h1>
            <p>Join Market Match to connect with buyers and sellers in your area</p>
          </div>
          
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="account-type-selector">
              <div className="account-type-label">I am a:</div>
              <div className="account-types">
                <label className={`account-type ${formData.accountType === 'farmer' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="accountType"
                    value="farmer"
                    checked={formData.accountType === 'farmer'}
                    onChange={handleChange}
                  />
                  <span>Poultry Farmer</span>
                </label>
                <label className={`account-type ${formData.accountType === 'buyer' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="accountType"
                    value="buyer"
                    checked={formData.accountType === 'buyer'}
                    onChange={handleChange}
                  />
                  <span>Buyer</span>
                </label>
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="fullName">Full Name</label>
              <div className="input-with-icon">
                <User size={18} className="input-icon" />
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  className="form-input"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email Address</label>
              <div className="input-with-icon">
                <Mail size={18} className="input-icon" />
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="location">Location</label>
              <div className="input-with-icon">
                <MapPin size={18} className="input-icon" />
                <input
                  id="location"
                  type="text"
                  name="location"
                  className="form-input"
                  placeholder="Your city/region"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="password">Create Password</label>
              <div className="input-with-icon">
                <Lock size={18} className="input-icon" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  className="form-input"
                  placeholder="Min. 8 characters"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <div className="password-requirements">
                <div className="requirement">
                  <span className={formData.password.length >= 8 ? 'met' : ''}>•</span> At least 8 characters
                </div>
                <div className="requirement">
                  <span className={/[A-Z]/.test(formData.password) ? 'met' : ''}>•</span> 1 uppercase letter
                </div>
                <div className="requirement">
                  <span className={/[0-9]/.test(formData.password) ? 'met' : ''}>•</span> 1 number
                </div>
              </div>
            </div>
            
            <div className="form-group">
              <label className="checkbox-container">
                <input type="checkbox" required />
                <span className="checkmark"></span>
                I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
              </label>
            </div>
            
            <button type="submit" className="btn btn-primary auth-submit">
              Create Account
            </button>
          </form>
          
          <div className="auth-divider">
            <span>OR</span>
          </div>
          
          <div className="social-auth">
            <button className="btn btn-outline social-btn">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" />
              Continue with Google
            </button>
            <button className="btn btn-outline social-btn">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
              Continue with Facebook
            </button>
          </div>
          
          <div className="auth-footer">
            <p>Already have an account? <Link to="/login">Log In</Link></p>
          </div>
        </div>
      </div>
      
      <div className="auth-image">
        <img 
          src="https://images.pexels.com/photos/7638926/pexels-photo-7638926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Poultry farmer with chickens"
        />
        <div className="auth-image-overlay">
          <div className="overlay-content">
            <h2>"Joining Market Match was the best decision for my poultry business."</h2>
            <p>- Michael Chen, Small Farm Owner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;