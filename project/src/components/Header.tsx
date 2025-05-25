import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Egg, ShoppingBag, LineChart, User, Menu, X } from 'lucide-react';
import '../styles/components/Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <Egg size={32} />
            <span>Market Match</span>
          </Link>

          <nav className={`nav-desktop ${mobileMenuOpen ? 'mobile-active' : ''}`}>
            <ul className="nav-links">
              <li>
                <Link to="/" className={isActive('/')}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/marketplace" className={isActive('/marketplace')}>
                  <ShoppingBag size={18} />
                  Marketplace
                </Link>
              </li>
              <li>
                <Link to="/market-prices" className={isActive('/market-prices')}>
                  <LineChart size={18} />
                  Market Prices
                </Link>
              </li>
              <li>
                <Link to="/profile" className={isActive('/profile')}>
                  <User size={18} />
                  My Profile
                </Link>
              </li>
            </ul>
          </nav>

          <div className="auth-buttons">
            <Link to="/login" className="btn btn-outline btn-sm">Log In</Link>
            <Link to="/register" className="btn btn-primary btn-sm">Sign Up</Link>
          </div>

          <button 
            className="mobile-menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li>
            <Link to="/" className={isActive('/')}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/marketplace" className={isActive('/marketplace')}>
              <ShoppingBag size={18} />
              Marketplace
            </Link>
          </li>
          <li>
            <Link to="/market-prices" className={isActive('/market-prices')}>
              <LineChart size={18} />
              Market Prices
            </Link>
          </li>
          <li>
            <Link to="/profile" className={isActive('/profile')}>
              <User size={18} />
              My Profile
            </Link>
          </li>
          <li className="mobile-auth">
            <Link to="/login" className="btn btn-outline">Log In</Link>
            <Link to="/register" className="btn btn-primary">Sign Up</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;