import React from 'react';
import './Tomorrow.css';
import meeting1 from '../images/meeting1.png'

const Tomorrow = () => {
  return (
    <section className="tomorrow" id="studio">
      <div className="tomorrow-left">
        <div className="pink-glow"></div>
        <h2>
          <span className="italic-text">Tomorrow</span> should<br />
          be better than today
        </h2>
        <p>
          We are a team of strategists, designers, communicators, researchers.
          Together, we believe that progress only happens when you refuse
          to play things safe.
        </p>
        <a href="#services" className="read-more">Read more ——</a>
      </div>

      <div className="tomorrow-right">
        <div className="shape-triangle"></div>
        <div className="img-circle">
          <img
            src={meeting1}
            alt="Team meeting"
          />
        </div>
      </div>
    </section>
  );
};

export default Tomorrow;