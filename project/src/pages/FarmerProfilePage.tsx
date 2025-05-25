import React, { useState } from 'react';
import { User, Edit, Star, MapPin, Package, Calendar, Settings, Bell, TrendingUp, LogOut } from 'lucide-react';
import '../styles/pages/FarmerProfilePage.css';

const FarmerProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('listings');
  
  // Sample farmer data
  const farmer = {
    name: 'David Wilson',
    location: 'Green Valley, Riverside County',
    joinDate: 'Member since January 2025',
    bio: 'Small-scale poultry farmer specializing in organic eggs and free-range chickens. Committed to sustainable farming practices and animal welfare.',
    profileImage: 'https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    reviewCount: 27,
    products: [
      { id: 1, name: 'Organic Eggs', type: 'Product', category: 'Eggs' },
      { id: 2, name: 'Free-Range Chickens', type: 'Product', category: 'Meat' },
      { id: 3, name: 'Layer Hens', type: 'Product', category: 'Live Birds' }
    ]
  };
  
  // Sample listings data
  const listings = [
    {
      id: 1,
      title: 'Fresh Organic Eggs',
      type: 'sell',
      price: 5.25,
      quantity: '20 trays available',
      date: 'Posted 2 days ago',
      status: 'active',
      image: 'https://images.pexels.com/photos/6103573/pexels-photo-6103573.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Layer Hens for Sale',
      type: 'sell',
      price: 15.00,
      quantity: '15 birds available',
      date: 'Posted 1 week ago',
      status: 'active',
      image: 'https://images.pexels.com/photos/7638926/pexels-photo-7638926.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Broiler Chickens',
      type: 'sell',
      price: 7.50,
      quantity: 'Sold out',
      date: 'Posted 2 weeks ago',
      status: 'completed',
      image: 'https://images.pexels.com/photos/6303714/pexels-photo-6303714.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];
  
  // Sample analytics data
  const analytics = {
    totalSales: 3450,
    monthlyRevenue: 850,
    averagePrice: 5.75,
    topProducts: ['Organic Eggs', 'Layer Hens', 'Broiler Chickens'],
    recentPriceChanges: [
      { product: 'Eggs (Tray)', oldPrice: 4.50, newPrice: 5.25, date: 'May 15, 2025' },
      { product: 'Broiler Chicken (kg)', oldPrice: 3.90, newPrice: 3.80, date: 'May 10, 2025' }
    ]
  };
  
  // Sample transaction history
  const transactions = [
    { id: 1, buyer: 'Local Grocery Co-op', product: 'Organic Eggs', quantity: '30 trays', total: '$157.50', date: 'May 18, 2025', status: 'Completed' },
    { id: 2, buyer: 'Farm-to-Table Restaurant', product: 'Broiler Chickens', quantity: '25 birds', total: '$187.50', date: 'May 12, 2025', status: 'Completed' },
    { id: 3, buyer: 'John Smith', product: 'Layer Hens', quantity: '5 birds', total: '$75.00', date: 'May 8, 2025', status: 'Completed' },
    { id: 4, buyer: 'Green Life Market', product: 'Organic Eggs', quantity: '40 trays', total: '$210.00', date: 'May 1, 2025', status: 'Completed' }
  ];
  
  return (
    <div className="farmer-profile-page">
      <div className="profile-header">
        <div className="container">
          <div className="profile-header-content">
            <div className="profile-image-container">
              <img src={farmer.profileImage} alt={farmer.name} className="profile-image" />
              <button className="edit-profile-image">
                <Edit size={16} />
              </button>
            </div>
            
            <div className="profile-info">
              <h1>{farmer.name}</h1>
              
              <div className="profile-meta">
                <div className="profile-meta-item">
                  <MapPin size={16} />
                  <span>{farmer.location}</span>
                </div>
                
                <div className="profile-meta-item">
                  <Calendar size={16} />
                  <span>{farmer.joinDate}</span>
                </div>
                
                <div className="profile-meta-item">
                  <Star size={16} />
                  <span>{farmer.rating} ({farmer.reviewCount} reviews)</span>
                </div>
              </div>
              
              <p className="profile-bio">{farmer.bio}</p>
              
              <div className="profile-products">
                <h3>Products</h3>
                <div className="product-tags">
                  {farmer.products.map(product => (
                    <span key={product.id} className="product-tag">
                      {product.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="profile-actions">
              <button className="btn btn-primary">
                <Edit size={16} />
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="profile-navigation">
          <button 
            className={`profile-nav-item ${activeTab === 'listings' ? 'active' : ''}`}
            onClick={() => setActiveTab('listings')}
          >
            <Package size={20} />
            <span>My Listings</span>
          </button>
          
          <button 
            className={`profile-nav-item ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            <TrendingUp size={20} />
            <span>Price Analytics</span>
          </button>
          
          <button 
            className={`profile-nav-item ${activeTab === 'transactions' ? 'active' : ''}`}
            onClick={() => setActiveTab('transactions')}
          >
            <Calendar size={20} />
            <span>Transaction History</span>
          </button>
          
          <button 
            className={`profile-nav-item ${activeTab === 'notifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('notifications')}
          >
            <Bell size={20} />
            <span>Notifications</span>
          </button>
          
          <button 
            className={`profile-nav-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <Settings size={20} />
            <span>Settings</span>
          </button>
        </div>
        
        <div className="profile-content">
          {activeTab === 'listings' && (
            <div className="profile-listings">
              <div className="section-header">
                <h2>My Listings</h2>
                <button className="btn btn-primary">+ Create New Listing</button>
              </div>
              
              <div className="listings-filters">
                <button className="filter-btn active">All</button>
                <button className="filter-btn">Active</button>
                <button className="filter-btn">Completed</button>
                <button className="filter-btn">Drafts</button>
              </div>
              
              <div className="farmer-listings-grid">
                {listings.map(listing => (
                  <div key={listing.id} className={`farmer-listing-card ${listing.status}`}>
                    <div className="listing-image">
                      <img src={listing.image} alt={listing.title} />
                      <div className="listing-status">{listing.status}</div>
                    </div>
                    
                    <div className="listing-content">
                      <h3>{listing.title}</h3>
                      
                      <div className="listing-details">
                        <div className="listing-price">${listing.price.toFixed(2)}</div>
                        <div className="listing-quantity">{listing.quantity}</div>
                      </div>
                      
                      <div className="listing-date">{listing.date}</div>
                      
                      <div className="listing-actions">
                        <button className="btn btn-outline btn-sm">Edit</button>
                        <button className="btn btn-outline btn-sm">Delete</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'analytics' && (
            <div className="profile-analytics">
              <div className="section-header">
                <h2>Price Analytics</h2>
                <div className="analytics-period-selector">
                  <button className="period-btn active">1M</button>
                  <button className="period-btn">3M</button>
                  <button className="period-btn">6M</button>
                  <button className="period-btn">1Y</button>
                  <button className="period-btn">All</button>
                </div>
              </div>
              
              <div className="analytics-cards">
                <div className="analytics-card">
                  <h3>Total Sales</h3>
                  <div className="analytics-value">${analytics.totalSales}</div>
                  <div className="analytics-trend positive">↑ 12% from last month</div>
                </div>
                
                <div className="analytics-card">
                  <h3>Monthly Revenue</h3>
                  <div className="analytics-value">${analytics.monthlyRevenue}</div>
                  <div className="analytics-trend positive">↑ 8% from last month</div>
                </div>
                
                <div className="analytics-card">
                  <h3>Average Price</h3>
                  <div className="analytics-value">${analytics.averagePrice}</div>
                  <div className="analytics-trend positive">↑ 5% from last month</div>
                </div>
              </div>
              
              <div className="analytics-charts">
                <div className="analytics-chart-container">
                  <h3>Price Trends</h3>
                  <div className="chart-placeholder">
                    <div className="placeholder-text">
                      Chart showing price trends over time would be displayed here
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="analytics-sections">
                <div className="analytics-section">
                  <h3>Top Selling Products</h3>
                  <ul className="top-products-list">
                    {analytics.topProducts.map((product, index) => (
                      <li key={index}>
                        <span className="product-rank">{index + 1}</span>
                        <span className="product-name">{product}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="analytics-section">
                  <h3>Recent Price Changes</h3>
                  <div className="price-changes-list">
                    {analytics.recentPriceChanges.map((change, index) => (
                      <div key={index} className="price-change-item">
                        <div className="price-change-product">{change.product}</div>
                        <div className="price-change-values">
                          <span className="old-price">${change.oldPrice.toFixed(2)}</span>
                          <span className="arrow">→</span>
                          <span className="new-price">${change.newPrice.toFixed(2)}</span>
                        </div>
                        <div className="price-change-date">{change.date}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'transactions' && (
            <div className="profile-transactions">
              <div className="section-header">
                <h2>Transaction History</h2>
              </div>
              
              <div className="transactions-filters">
                <div className="filter-group">
                  <label>Date Range:</label>
                  <select className="filter-select">
                    <option>Last 30 days</option>
                    <option>Last 3 months</option>
                    <option>Last 6 months</option>
                    <option>Last year</option>
                    <option>All time</option>
                  </select>
                </div>
                
                <div className="filter-group">
                  <label>Product:</label>
                  <select className="filter-select">
                    <option>All Products</option>
                    <option>Organic Eggs</option>
                    <option>Broiler Chickens</option>
                    <option>Layer Hens</option>
                  </select>
                </div>
              </div>
              
              <div className="transactions-table">
                <div className="transactions-header">
                  <div className="th buyer-col">Buyer</div>
                  <div className="th product-col">Product</div>
                  <div className="th quantity-col">Quantity</div>
                  <div className="th total-col">Total</div>
                  <div className="th date-col">Date</div>
                  <div className="th status-col">Status</div>
                </div>
                
                <div className="transactions-body">
                  {transactions.map(transaction => (
                    <div key={transaction.id} className="transaction-row">
                      <div className="td buyer-col">{transaction.buyer}</div>
                      <div className="td product-col">{transaction.product}</div>
                      <div className="td quantity-col">{transaction.quantity}</div>
                      <div className="td total-col">{transaction.total}</div>
                      <div className="td date-col">{transaction.date}</div>
                      <div className="td status-col">
                        <span className={`status-badge ${transaction.status.toLowerCase()}`}>
                          {transaction.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="transactions-summary">
                <div className="summary-item">
                  <div className="summary-label">Total Sales:</div>
                  <div className="summary-value">$630.00</div>
                </div>
                
                <div className="summary-item">
                  <div className="summary-label">Total Transactions:</div>
                  <div className="summary-value">4</div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'notifications' && (
            <div className="profile-notifications">
              <div className="section-header">
                <h2>Notifications</h2>
                <button className="btn btn-outline">Mark All as Read</button>
              </div>
              
              <div className="notifications-filters">
                <button className="filter-btn active">All</button>
                <button className="filter-btn">Unread</button>
                <button className="filter-btn">Price Alerts</button>
                <button className="filter-btn">Messages</button>
                <button className="filter-btn">System</button>
              </div>
              
              <div className="notifications-list">
                <div className="notification-item unread">
                  <div className="notification-icon price-alert">
                    <TrendingUp size={20} />
                  </div>
                  <div className="notification-content">
                    <div className="notification-title">Price Alert: Eggs</div>
                    <div className="notification-message">
                      Egg prices in your area have increased by 10% in the last week.
                    </div>
                    <div className="notification-time">2 hours ago</div>
                  </div>
                </div>
                
                <div className="notification-item">
                  <div className="notification-icon message">
                    <User size={20} />
                  </div>
                  <div className="notification-content">
                    <div className="notification-title">New Message from Local Market</div>
                    <div className="notification-message">
                      "Hello, I'm interested in purchasing 20 trays of your organic eggs..."
                    </div>
                    <div className="notification-time">1 day ago</div>
                  </div>
                </div>
                
                <div className="notification-item">
                  <div className="notification-icon system">
                    <Bell size={20} />
                  </div>
                  <div className="notification-content">
                    <div className="notification-title">System Notification</div>
                    <div className="notification-message">
                      Your listing "Fresh Organic Eggs" has been viewed 15 times in the last 24 hours.
                    </div>
                    <div className="notification-time">2 days ago</div>
                  </div>
                </div>
              </div>
              
              <div className="notifications-settings">
                <h3>Notification Settings</h3>
                <div className="settings-group">
                  <div className="setting-item">
                    <div className="setting-label">Price Alert Notifications</div>
                    <label className="toggle">
                      <input type="checkbox" checked readOnly />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                  
                  <div className="setting-item">
                    <div className="setting-label">Message Notifications</div>
                    <label className="toggle">
                      <input type="checkbox" checked readOnly />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                  
                  <div className="setting-item">
                    <div className="setting-label">System Notifications</div>
                    <label className="toggle">
                      <input type="checkbox" checked readOnly />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                  
                  <div className="setting-item">
                    <div className="setting-label">Email Notifications</div>
                    <label className="toggle">
                      <input type="checkbox" checked readOnly />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'settings' && (
            <div className="profile-settings">
              <div className="section-header">
                <h2>Account Settings</h2>
              </div>
              
              <div className="settings-container">
                <div className="settings-sidebar">
                  <div className="settings-nav">
                    <button className="settings-nav-item active">Profile Information</button>
                    <button className="settings-nav-item">Password & Security</button>
                    <button className="settings-nav-item">Notifications</button>
                    <button className="settings-nav-item">Payment Methods</button>
                    <button className="settings-nav-item">Privacy</button>
                  </div>
                  
                  <button className="btn btn-outline btn-logout">
                    <LogOut size={16} />
                    <span>Log Out</span>
                  </button>
                </div>
                
                <div className="settings-content">
                  <h3>Profile Information</h3>
                  
                  <form className="settings-form">
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <input type="text" className="form-input" defaultValue={farmer.name} />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input type="email" className="form-input" defaultValue="davidwilson@example.com" />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input type="tel" className="form-input" defaultValue="(555) 123-4567" />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Location</label>
                      <input type="text" className="form-input" defaultValue={farmer.location} />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Bio</label>
                      <textarea className="form-textarea" defaultValue={farmer.bio}></textarea>
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Farm Size</label>
                      <select className="form-select">
                        <option>Small (1-50 birds)</option>
                        <option selected>Medium (51-200 birds)</option>
                        <option>Large (201-500 birds)</option>
                        <option>Very Large (500+ birds)</option>
                      </select>
                    </div>
                    
                    <div className="form-actions">
                      <button type="submit" className="btn btn-primary">Save Changes</button>
                      <button type="button" className="btn btn-outline">Cancel</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FarmerProfilePage;