import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Zap, Map, TrendingUp, ShieldCheck, Users } from 'lucide-react';
import MarketPriceCard from '../components/MarketPriceCard';
import TestimonialCard from '../components/TestimonialCard';
import '../styles/pages/HomePage.css';

const HomePage: React.FC = () => {
  // Sample market prices data
  const marketPrices = [
    { id: 1, product: 'Eggs (Tray)', price: 5.25, change: 0.75, isUp: true, location: 'Central Market' },
    { id: 2, product: 'Broiler Chicken (kg)', price: 3.80, change: 0.10, isUp: false, location: 'East End Market' },
    { id: 3, product: 'Layer Hen', price: 12.50, change: 1.20, isUp: true, location: 'Westside Poultry Fair' },
    { id: 4, product: 'Chicks (10 units)', price: 18.75, change: 0, isUp: true, location: 'Greenfield Market' }
  ];

  // Sample testimonials
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Poultry Farmer',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Market Match has completely transformed how I sell my poultry products. I now get the best prices and have a consistent customer base.',
      location: 'Greenville'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Small Farm Owner',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The price alerts feature has saved me thousands. I now know exactly when to bring my eggs to market for maximum profit.',
      location: 'Riverside County'
    },
    {
      id: 3,
      name: 'Amara Okafor',
      role: 'Cooperative Leader',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Our farming cooperative has grown 40% since using Market Match. The platform connected us with buyers we never would have found otherwise.',
      location: 'Lakeside District'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="slide-up">Connect with the Best Markets for Your Poultry Products</h1>
            <p className="slide-up">Market Match helps poultry farmers find the best prices and connect directly with buyers in their area.</p>
            
            <div className="hero-cta slide-up">
              <Link to="/register" className="btn btn-primary btn-lg">Get Started</Link>
              <Link to="/how-it-works" className="btn btn-outline btn-lg">How It Works</Link>
            </div>
            
            <div className="hero-search slide-up">
              <div className="search-container">
                <div className="search-icon">
                  <Search size={20} />
                </div>
                <input 
                  type="text" 
                  placeholder="Search for markets, buyers, or products..." 
                  className="search-input"
                />
                <button className="search-button">Find Markets</button>
              </div>
              <p className="search-examples">Try: eggs, broiler chicken, local buyers</p>
            </div>
          </div>
        </div>
        
        <div className="hero-image-container">
          <img 
            src="https://images.pexels.com/photos/2255459/pexels-photo-2255459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Poultry farmer with chickens" 
            className="hero-image"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Farmers Choose Market Match</h2>
            <p>Our platform is designed specifically for poultry farmers to maximize profits and simplify selling.</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Zap size={32} />
              </div>
              <h3>Real-Time Alerts</h3>
              <p>Get instant notifications when market prices change or when there are buyers looking for your products.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Map size={32} />
              </div>
              <h3>Local Connections</h3>
              <p>Connect with buyers and markets in your area to reduce transportation costs and deliver fresher products.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <TrendingUp size={32} />
              </div>
              <h3>Price Analytics</h3>
              <p>Track price trends over time to make informed decisions about when to sell your poultry products.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <ShieldCheck size={32} />
              </div>
              <h3>Verified Buyers</h3>
              <p>All buyers on our platform are verified to ensure secure and reliable transactions for farmers.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Users size={32} />
              </div>
              <h3>Farmer Community</h3>
              <p>Join a network of poultry farmers to share insights, best practices, and support each other.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Prices Section */}
      <section className="market-prices-section">
        <div className="container">
          <div className="section-header">
            <h2>Current Market Prices</h2>
            <p>Stay updated with the latest poultry market prices in your region</p>
            <Link to="/market-prices" className="view-all-link">View all prices</Link>
          </div>
          
          <div className="market-prices-grid">
            {marketPrices.map(price => (
              <MarketPriceCard key={price.id} priceData={price} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="container">
          <div className="section-header">
            <h2>How Market Match Works</h2>
            <p>Three simple steps to start selling at the best prices</p>
          </div>
          
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Create Your Profile</h3>
                <p>Sign up and create your farmer profile with details about your poultry products, location, and production capacity.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Connect with Buyers</h3>
                <p>Browse through verified buyers or wait for interested buyers to contact you based on your products.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Sell at the Best Price</h3>
                <p>Negotiate directly with buyers or accept market prices, then arrange delivery and receive payment.</p>
              </div>
            </div>
          </div>
          
          <div className="cta-container">
            <Link to="/register" className="btn btn-primary btn-lg">Start Selling Today</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>Success Stories</h2>
            <p>Hear from farmers who have transformed their poultry business with Market Match</p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get the Best Prices for Your Poultry?</h2>
            <p>Join thousands of farmers who are already maximizing their profits with Market Match.</p>
            <div className="cta-buttons">
              <Link to="/register" className="btn btn-primary btn-lg">Sign Up Now</Link>
              <Link to="/contact" className="btn btn-outline btn-lg">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;