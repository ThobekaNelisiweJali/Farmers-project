import React, { useState } from 'react';
import { Search, Filter, ArrowDownUp } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import '../styles/pages/MarketPricesPage.css';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MarketPricesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('today');
  const [selectedProduct, setSelectedProduct] = useState('eggs');
  
  // Sample market data
  const marketPrices = [
    { id: 1, product: 'Eggs (Tray)', price: 5.25, change: 0.75, isUp: true, location: 'Central Market', lastUpdated: '1 hour ago' },
    { id: 2, product: 'Broiler Chicken (kg)', price: 3.80, change: 0.10, isUp: false, location: 'East End Market', lastUpdated: '2 hours ago' },
    { id: 3, product: 'Layer Hen', price: 12.50, change: 1.20, isUp: true, location: 'Westside Poultry Fair', lastUpdated: '3 hours ago' },
    { id: 4, product: 'Chicks (10 units)', price: 18.75, change: 0, isUp: true, location: 'Greenfield Market', lastUpdated: '4 hours ago' },
    { id: 5, product: 'Duck Eggs (Dozen)', price: 7.20, change: 0.30, isUp: true, location: 'Riverside Market', lastUpdated: '2 hours ago' },
    { id: 6, product: 'Turkey (kg)', price: 6.40, change: 0.15, isUp: false, location: 'Central Market', lastUpdated: '1 hour ago' },
    { id: 7, product: 'Quail Eggs (24 pack)', price: 8.90, change: 0.50, isUp: true, location: 'Farmers Cooperative', lastUpdated: '5 hours ago' },
    { id: 8, product: 'Chicken Feed (25kg)', price: 22.50, change: 1.00, isUp: false, location: 'Agri Supply Store', lastUpdated: '1 day ago' },
  ];
  
  // Chart data for price trends
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Eggs Price Trend (2025)',
        data: [4.8, 4.7, 4.9, 5.1, 5.3, 5.2, 5.0, 5.1, 5.3, 5.2, 5.4, 5.25],
        borderColor: 'rgb(60, 140, 64)',
        backgroundColor: 'rgba(60, 140, 64, 0.1)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Eggs Price Trend (2024)',
        data: [4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.6, 4.8, 4.7, 4.9, 5.0, 5.1],
        borderColor: 'rgba(243, 156, 18, 0.8)',
        backgroundColor: 'rgba(243, 156, 18, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };
  
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: 'Price (USD)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
    },
  };
  
  return (
    <div className="market-prices-page">
      <div className="page-header">
        <div className="container">
          <h1>Market Prices</h1>
          <p>Get real-time updates on poultry product prices in your region</p>
        </div>
      </div>
      
      <div className="container">
        <div className="search-filter-container">
          <div className="search-bar">
            <Search size={20} />
            <input type="text" placeholder="Search for a product..." />
          </div>
          
          <div className="filter-options">
            <button className="filter-button">
              <Filter size={18} />
              <span>Filter</span>
            </button>
            
            <button className="sort-button">
              <ArrowDownUp size={18} />
              <span>Sort</span>
            </button>
            
            <select className="region-select">
              <option value="all">All Regions</option>
              <option value="central">Central Region</option>
              <option value="northern">Northern Region</option>
              <option value="eastern">Eastern Region</option>
              <option value="western">Western Region</option>
              <option value="southern">Southern Region</option>
            </select>
          </div>
        </div>
        
        <div className="time-filter">
          <button 
            className={`time-filter-btn ${activeTab === 'today' ? 'active' : ''}`}
            onClick={() => setActiveTab('today')}
          >
            Today
          </button>
          <button 
            className={`time-filter-btn ${activeTab === 'week' ? 'active' : ''}`}
            onClick={() => setActiveTab('week')}
          >
            This Week
          </button>
          <button 
            className={`time-filter-btn ${activeTab === 'month' ? 'active' : ''}`}
            onClick={() => setActiveTab('month')}
          >
            This Month
          </button>
          <button 
            className={`time-filter-btn ${activeTab === 'year' ? 'active' : ''}`}
            onClick={() => setActiveTab('year')}
          >
            This Year
          </button>
        </div>
        
        <div className="price-trends-section">
          <h2>Price Trends</h2>
          <div className="product-selector">
            <button 
              className={`product-btn ${selectedProduct === 'eggs' ? 'active' : ''}`}
              onClick={() => setSelectedProduct('eggs')}
            >
              Eggs
            </button>
            <button 
              className={`product-btn ${selectedProduct === 'broiler' ? 'active' : ''}`}
              onClick={() => setSelectedProduct('broiler')}
            >
              Broiler Chicken
            </button>
            <button 
              className={`product-btn ${selectedProduct === 'layer' ? 'active' : ''}`}
              onClick={() => setSelectedProduct('layer')}
            >
              Layer Hen
            </button>
            <button 
              className={`product-btn ${selectedProduct === 'chicks' ? 'active' : ''}`}
              onClick={() => setSelectedProduct('chicks')}
            >
              Chicks
            </button>
          </div>
          
          <div className="chart-container">
            <Line options={chartOptions} data={chartData} />
          </div>
        </div>
        
        <div className="current-prices-section">
          <h2>Current Market Prices</h2>
          <div className="prices-grid">
            <div className="prices-header">
              <div className="col product-col">Product</div>
              <div className="col price-col">Price</div>
              <div className="col change-col">Change</div>
              <div className="col location-col">Location</div>
              <div className="col updated-col">Updated</div>
            </div>
            
            {marketPrices.map(item => (
              <div key={item.id} className="price-row">
                <div className="col product-col">{item.product}</div>
                <div className="col price-col">${item.price.toFixed(2)}</div>
                <div className={`col change-col ${item.isUp ? 'up' : 'down'}`}>
                  {item.change > 0 ? (
                    <>
                      {item.isUp ? '↑' : '↓'} ${item.change.toFixed(2)}
                    </>
                  ) : (
                    'No change'
                  )}
                </div>
                <div className="col location-col">{item.location}</div>
                <div className="col updated-col">{item.lastUpdated}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="price-insights">
          <h2>Market Insights</h2>
          <div className="insights-grid">
            <div className="insight-card">
              <h3>Price Forecast</h3>
              <p>Egg prices are expected to rise by 5% in the next two weeks due to increased demand during the holiday season.</p>
            </div>
            
            <div className="insight-card">
              <h3>Supply Trends</h3>
              <p>Broiler chicken supply is stabilizing after the recent shortage, expect prices to drop slightly by next week.</p>
            </div>
            
            <div className="insight-card">
              <h3>Market Events</h3>
              <p>The Farmer's Cooperative Market Fair is scheduled for the 15th. Historical data shows 10-15% better prices during this event.</p>
            </div>
          </div>
        </div>
        
        <div className="price-alerts-cta">
          <h2>Never Miss the Best Price</h2>
          <p>Set up price alerts to get notified when prices reach your target or when there's a significant change in the market.</p>
          <button className="btn btn-primary">Set Up Price Alerts</button>
        </div>
      </div>
    </div>
  );
};

export default MarketPricesPage;