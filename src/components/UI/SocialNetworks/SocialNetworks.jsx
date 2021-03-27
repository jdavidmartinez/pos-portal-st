/* SocialNetworks UI-component */

import './social-networks.css';

import facebookIcon from '../../../assets/icons/svg/facebook-icon.svg';
import instagramIcon from '../../../assets/icons/svg/instagram-icon.svg';
import linkedinIcon from '../../../assets/icons/svg/linkedin-icon.svg';

const SocialNetworks = () => (
  <>
    <nav className="row center-xs social">
      <a
        href="https://www.facebook.com/EmpleAppcol"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={facebookIcon} alt="empleapp facebook link" className="social-icons" />
      </a>
      <a
        href="https://www.instagram.com/empleapp.co/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={instagramIcon} alt="empleapp instagram link" className="social-icons" />
      </a>
      <a
        href="https://www.linkedin.com/company/empleappcol/about/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedinIcon} alt="empleapp linkedin link" className="social-icons" />
      </a>
    </nav>
  </>
);

export default SocialNetworks;
