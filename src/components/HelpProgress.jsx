import React from 'react';
import './HelpProgress.css';
import meeting2 from '../images/meeting2.png'

const HelpProgress = () => {
  return (
    <section className="help-progress" id="studio">
      <div className="help-left">
        <div className="img-circle-left">
         <img
         src={meeting2}
         alt="Team Working"
         />
        </div>
        <div className="triangle-red-left"></div>
      </div>

      <div className="help-right">
        <div className="curve-line"></div>
          <h2>
            See how we can <br />
          <span className="underline-text">help you progress</span>
        </h2>
        <p>
          We add a layer of fearless insights and action that allows change
          makers to accelerate their progress in areas such as brand, design,
          digital, comms and social research.
        </p>
        <a href="#services" className="read-more-dark">Read more —— </a>
      </div>
    </section>
  );
};

export default HelpProgress;