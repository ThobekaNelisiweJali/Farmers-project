import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import '../styles/components/MarketPriceCard.css';

interface MarketPriceProps {
  priceData: {
    id: number;
    product: string;
    price: number;
    change: number;
    isUp: boolean;
    location: string;
  };
}

const MarketPriceCard: React.FC<MarketPriceProps> = ({ priceData }) => {
  const { product, price, change, isUp, location } = priceData;
  
  return (
    <div className="market-price-card">
      <div className="price-header">
        <h3>{product}</h3>
        <span className="location">{location}</span>
      </div>
      
      <div className="price-amount">
        ${price.toFixed(2)}
      </div>
      
      <div className={`price-change ${isUp ? 'up' : 'down'}`}>
        {isUp ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
        <span>
          {change > 0 ? `$${change.toFixed(2)}` : 'No change'}
        </span>
      </div>
    </div>
  );
};

export default MarketPriceCard;