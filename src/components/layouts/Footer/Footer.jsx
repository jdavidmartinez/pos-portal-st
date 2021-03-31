/* Footer layout-component */

import SocialNetworks from '../../UI/SocialNetworks/SocialNetworks';

import './footer.css';

import logo from '../../../assets/logos/empleapp-footer-logo.png';

const Footer = () => (
  <>
    <footer className="row center-xs footer">
      <div className="col-xs-12">
        <img src={logo} alt="empleapp logo" className="footer-logo" />
      </div>
      <SocialNetworks className="col-xs-2 col-md-3" />
      <h3 className="col-xs-12 footer-h3">contacto@empleapp.com</h3>
    </footer>
  </>
);

export default Footer;
