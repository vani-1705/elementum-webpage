import React from 'react';
import './AboutUs.css';
import image7 from '../images/image7.png'
import image8 from '../images/image8.png'
import image9 from '../images/image9.png'
import image10 from '../images/image10.png'

const sideProfiles = [
 image7,
 image8,
 image9,
 image10
];

const AboutUs = () => {
  return (
    <section className="aboutus" id="blog">
      <div className="aboutus-left-profiles">
        {sideProfiles.slice(0, 2).map((img, i) => (
          <div key={i} className="side-profile">
            <img src={img} alt={`Profile ${i + 1}`} />
          </div>
        ))}
      </div>

      <div className="aboutus-center">
        <h2>
          What our customer
          <br />
          says <span className="green-italic">About Us</span>
        </h2>

        <div className="quote-block">
          <span className="quote-mark open">"</span>

          <p>
            Elementum delivered the site within the timeline
      as they requested. In the end, the client found a 50%
             increase in traffic within days since its launch. They
            also had an impressive ability to use technologies that
             the company hasn't used, which have also proved to
                     be easy to use and reliable.
          </p>

          <span className="quote-mark close">"</span>
        </div>
      </div>

      <div className="aboutus-right-profiles">
        {sideProfiles.slice(2, 4).map((img, i) => (
          <div key={i} className="side-profile">
            <img src={img} alt={`Profile ${i + 3}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;