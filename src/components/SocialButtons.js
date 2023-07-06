import React from 'react';
import Facebook1 from './assets/Facebook1.png';
import Instagram1 from './assets/Instagram1.png';

const SocialButtons = () => {
  return (
    <div className="social-buttons">
      <a href="https://www.instagram.com/legacy_pools/" target="_blank" rel="noopener noreferrer">
        <img src={Instagram1} alt="Instagram" className="me-2" />
      </a>

      <a href="https://www.facebook.com/people/Legacy-Pools-LLC/100063495162428/" target="_blank" rel="noopener noreferrer">
        <img src={Facebook1} alt="Facebook" className="me-2" />
      </a>
    </div>
  );
}

export default SocialButtons;