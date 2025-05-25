import React from 'react';
import { Quote } from 'lucide-react';
import '../styles/components/TestimonialCard.css';

interface TestimonialProps {
  testimonial: {
    id: number;
    name: string;
    role: string;
    image: string;
    quote: string;
    location: string;
  };
}

const TestimonialCard: React.FC<TestimonialProps> = ({ testimonial }) => {
  const { name, role, image, quote, location } = testimonial;
  
  return (
    <div className="testimonial-card">
      <div className="quote-icon">
        <Quote size={24} />
      </div>
      
      <p className="testimonial-quote">{quote}</p>
      
      <div className="testimonial-author">
        <img src={image} alt={name} className="author-image" />
        <div className="author-info">
          <h4>{name}</h4>
          <span className="author-role">{role}</span>
          <span className="author-location">{location}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;