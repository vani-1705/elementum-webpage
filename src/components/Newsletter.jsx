import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="newsletter" id="contact">
      <div className="newsletter-shape"></div>
      <h2>Subscribe to<br />our newsletter</h2>
      <p>To make your stay special and even more memorable</p>

      {subscribed ? (
        <p className="success-msg">✅ Thank you for subscribing!</p>
      ) : (
        <div className="newsletter-form">
         <button onClick={handleSubscribe}>Subscribe Now</button>
        </div>
      )}
    </section>
  );
};

export default Newsletter;