import React, { useState } from 'react';
import './FAQs.css';

const faqs = [
  {
    id: 1,
    question: 'What services does Elementum offer?',
    answer: 'We offer brand strategy, web design, digital marketing, content creation, and social media management.',
  },
  {
    id: 2,
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope. A typical website project takes 4-8 weeks from kickoff to launch.',
  },
  {
    id: 3,
    question: 'Do you work with startups?',
    answer: 'Absolutely! We love working with startups and help them build strong brand identities from the ground up.',
  },
  {
    id: 4,
    question: 'How do we get started?',
    answer: 'Simply reach out via our contact form or email us. We will schedule a free consultation to discuss your needs.',
  },
];

const FAQs = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faqs" id="faqs" 
    style={{
        position: 'absolute',
        opacity: 0,
        pointerEvents: 'none',
        height: 0,
        overflow: 'hidden',
    }}>
      <h2>Frequently Asked <span className="faq-highlight">Questions</span></h2>
      <div className="faqs-list">
        {faqs.map((faq) => (
          <div key={faq.id} className={`faq-item ${openId === faq.id ? 'open' : ''}`}>
            <div className="faq-question" onClick={() => toggle(faq.id)}>
              <span>{faq.question}</span>
              <span className="faq-icon">{openId === faq.id ? '−' : '+'}</span>
            </div>
            {openId === faq.id && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;