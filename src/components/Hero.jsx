import React from 'react';
import './Hero.css';
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import image4 from '../images/image4.png'
import image5 from '../images/image5.png'
import image6 from '../images/image6.png'

const teamMembers = [
  { id: 1, name: 'Member 1', img: image1 },
  { id: 2, name: 'Member 2', img: image2 },
  { id: 3, name: 'Member 3', img: image3 },
  { id: 4, name: 'Member 4', img: image4 },
  { id: 5, name: 'Member 5', img: image5 },
  { id: 6, name: 'Member 6', img: image6 },
];

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-shape-left"></div>
      <div className="hero-shape-right"></div>

      <div className="hero-content">
        <h1 className="hero-title">
          The thinkers and <br />
          doers were{' '} <span className="highlight-pink">changing</span>  <br />
          the{' '} <span className="highlight-green">status</span> Quo with
        </h1>
        <p className="hero-subtitle">
          We are a team of strategists, designers, communicators, researchers. Together,
          we believe that progress only happens when you allow to play things safe.
        </p>
      </div>

      <div className="hero-team">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-circle">
            <img src={member.img} alt={member.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;