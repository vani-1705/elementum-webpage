import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Services.css';

const services = [
  {
    id: 1,
    subtitle: 'Office of multiple internal content',
    title: 'Collaborative & partnership',
  },
  {
    id: 2,
    subtitle: 'The hangar US Air force digital experimental',
    title: 'We talk about our weight',
  },
  {
    id: 3,
    subtitle: 'Delta faucet content social, digital',
    title: 'Piloting digital confidence',
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-header">
        <h2>
          What we can <span className="green-text">offer</span> you!
        </h2>
        <div className="curve-decoration"></div>
      </div>

      <div className="services-list">
        {services.map((service) => (
          <div key={service.id} className="service-item">
            <div className="service-left">
              <p className="service-subtitle">{service.subtitle}</p>
            </div>
            <div className="service-right">
              <h3>{service.title}</h3>
              <FaArrowRight className="arrow-icon" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;