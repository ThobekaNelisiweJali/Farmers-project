import React, { useState } from 'react';
import { Search, Filter, MapPin, Calendar, DollarSign, Tag, UserCheck } from 'lucide-react';
import '../styles/pages/MarketplacePage.css';

interface ListingType {
  id: number;
  title: string;
  type: 'buy' | 'sell';
  price: number;
  quantity: string;
  location: string;
  distance: string;
  date: string;
  description: string;
  sellerName: string;
  sellerRating: number;
  image: string;
  tags: string[];
}

const MarketplacePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'buy' | 'sell'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample marketplace listings
  const listings: ListingType[] = [
    {
      id: 1,
      title: 'Fresh Farm Eggs',
      type: 'sell',
      price: 4.50,
      quantity: '30 trays available',
      location: 'Green Valley Farms',
      distance: '5 miles away',
      date: 'Posted 2 days ago',
      description: 'Fresh organic farm eggs from free-range chickens. Available for immediate pickup or local delivery.',
      sellerName: 'Sarah Johnson',
      sellerRating: 4.8,
      image: 'https://images.pexels.com/photos/6103573/pexels-photo-6103573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['organic', 'free-range', 'fresh']
    },
    {
      id: 2,
      title: 'Looking to Buy Broiler Chickens',
      type: 'buy',
      price: 3.75,
      quantity: 'Need 100 units',
      location: 'Central Processing Facility',
      distance: '12 miles away',
      date: 'Posted 1 day ago',
      description: 'Local restaurant looking to buy broiler chickens. Minimum weight 2kg each. Will pick up.',
      sellerName: 'Mike Chen',
      sellerRating: 4.6,
      image: 'https://images.pexels.com/photos/6303714/pexels-photo-6303714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['broiler', 'bulk', 'restaurant']
    },
    {
      id: 3,
      title: 'Premium Layer Hens',
      type: 'sell',
      price: 15.00,
      quantity: '25 birds available',
      location: 'Sunrise Poultry Farm',
      distance: '8 miles away',
      date: 'Posted 3 days ago',
      description: 'Healthy layer hens, 8 months old, excellent egg production. Brown egg layers.',
      sellerName: 'David Williams',
      sellerRating: 4.9,
      image: 'https://images.pexels.com/photos/7638926/pexels-photo-7638926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['layer-hens', 'brown-eggs', 'healthy']
    },
    {
      id: 4,
      title: 'Organic Duck Eggs',
      type: 'sell',
      price: 7.25,
      quantity: '15 dozen available',
      location: 'Lakeside Farm',
      distance: '15 miles away',
      date: 'Posted today',
      description: 'Farm-fresh organic duck eggs. Rich in flavor and perfect for baking or gourmet dishes.',
      sellerName: 'Lisa Cooper',
      sellerRating: 4.7,
      image: 'https://images.pexels.com/photos/4207909/pexels-photo-4207909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['duck-eggs', 'organic', 'gourmet']
    },
    {
      id: 5,
      title: 'Buying Fresh Turkey',
      type: 'buy',
      price: 5.50,
      quantity: 'Need 30 birds',
      location: 'Harvest Market',
      distance: '3 miles away',
      date: 'Posted 4 days ago',
      description: 'Local market looking to purchase fresh turkeys for upcoming holiday season. 10-15 lbs preferred.',
      sellerName: 'James Wilson',
      sellerRating: 4.5,
      image: 'https://images.pexels.com/photos/7462630/pexels-photo-7462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['turkey', 'holiday', 'fresh']
    },
    {
      id: 6,
      title: 'Day-Old Chicks',
      type: 'sell',
      price: 2.50,
      quantity: '100 chicks available',
      location: 'New Life Hatchery',
      distance: '20 miles away',
      date: 'Posted 2 days ago',
      description: 'Healthy day-old broiler chicks. Vaccinated and ready for pick-up next week.',
      sellerName: 'Emma Taylor',
      sellerRating: 4.9,
      image: 'https://images.pexels.com/photos/2256397/pexels-photo-2256397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['chicks', 'broiler', 'vaccinated']
    }
  ];
  
  const filteredListings = listings.filter(listing => {
    // Filter by tab
    if (activeTab !== 'all' && listing.type !== activeTab) {
      return false;
    }
    
    // Filter by search term
    if (
      searchTerm &&
      !listing.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !listing.description.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !listing.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    ) {
      return false;
    }
    
    return true;
  });
  
  return (
    <div className="marketplace-page">
      <div className="page-header">
        <div className="container">
          <h1>Poultry Marketplace</h1>
          <p>Connect directly with buyers and sellers in your area</p>
        </div>
      </div>
      
      <div className="container">
        <div className="marketplace-controls">
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Listings
            </button>
            <button 
              className={`tab ${activeTab === 'buy' ? 'active' : ''}`}
              onClick={() => setActiveTab('buy')}
            >
              Buy Requests
            </button>
            <button 
              className={`tab ${activeTab === 'sell' ? 'active' : ''}`}
              onClick={() => setActiveTab('sell')}
            >
              Selling
            </button>
          </div>
          
          <div className="marketplace-search">
            <Search size={20} />
            <input 
              type="text" 
              placeholder="Search marketplace..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <button className="btn btn-primary create-listing-btn">
            + Create Listing
          </button>
        </div>
        
        <div className="filter-tags">
          <button className="filter-tag">
            <Filter size={14} />
            <span>Filter</span>
          </button>
          <button className="filter-tag">
            <MapPin size={14} />
            <span>Within 20 miles</span>
          </button>
          <button className="filter-tag">
            <Calendar size={14} />
            <span>Last 7 days</span>
          </button>
          <button className="filter-tag">
            <Tag size={14} />
            <span>Eggs</span>
          </button>
          <button className="filter-tag">
            <Tag size={14} />
            <span>Organic</span>
          </button>
          <button className="filter-tag">
            <DollarSign size={14} />
            <span>Price: Any</span>
          </button>
        </div>
        
        <div className="listings-container">
          {filteredListings.length > 0 ? (
            filteredListings.map(listing => (
              <div key={listing.id} className={`listing-card ${listing.type}`}>
                <div className="listing-image">
                  <img src={listing.image} alt={listing.title} />
                  <div className="listing-badge">
                    {listing.type === 'sell' ? 'Selling' : 'Buying'}
                  </div>
                </div>
                
                <div className="listing-content">
                  <h2>{listing.title}</h2>
                  
                  <div className="listing-price">
                    <DollarSign size={18} />
                    <span>${listing.price.toFixed(2)} {listing.type === 'buy' ? 'offered' : 'per unit'}</span>
                  </div>
                  
                  <div className="listing-details">
                    <div className="detail">
                      <Tag size={16} />
                      <span>{listing.quantity}</span>
                    </div>
                    
                    <div className="detail">
                      <MapPin size={16} />
                      <span>{listing.location} ({listing.distance})</span>
                    </div>
                    
                    <div className="detail">
                      <Calendar size={16} />
                      <span>{listing.date}</span>
                    </div>
                  </div>
                  
                  <p className="listing-description">{listing.description}</p>
                  
                  <div className="listing-tags">
                    {listing.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                  
                  <div className="listing-seller">
                    <div className="seller-info">
                      <UserCheck size={16} />
                      <span>{listing.sellerName}</span>
                      <div className="seller-rating">
                        {'★'.repeat(Math.floor(listing.sellerRating))}
                        {listing.sellerRating % 1 >= 0.5 ? '½' : ''}
                        <span>{listing.sellerRating.toFixed(1)}</span>
                      </div>
                    </div>
                    
                    <button className="btn btn-primary btn-sm">
                      {listing.type === 'sell' ? 'Contact Seller' : 'Make Offer'}
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-listings">
              <h3>No listings found</h3>
              <p>Try adjusting your search filters or check back later for new listings.</p>
            </div>
          )}
        </div>
        
        <div className="pagination">
          <button className="pagination-btn active">1</button>
          <button className="pagination-btn">2</button>
          <button className="pagination-btn">3</button>
          <button className="pagination-btn">Next →</button>
        </div>
      </div>
    </div>
  );
};

export default MarketplacePage;