/* Header layout-component */

import './header.css';

import logo from '../../../assets/logos/empleapp-header-logo.png';
import woman from '../../../assets/img/woman.png';

import arrowRightIcon from '../../../assets/icons/arrow-right-icon.svg';
import facebookIcon from '../../../assets/icons/facebook-icon.svg';
import instagramIcon from '../../../assets/icons/instagram-icon.svg';
import linkedinIcon from '../../../assets/icons/linkedin-icon.svg';
import whatsAppIcon from '../../../assets/icons/whatsapp-icon.svg';

const Header = () => (
  <>
    <header className="header">
      <div className="row between-xs header-top-bar">
        <img src={logo} alt="empleapp logo" className="header-logo" />
        <a
          href="https://"
          target="_blank"
          rel="noopener noreferrer"
          className="header-ingress-button"
        >
          Ingresar
        </a>
      </div>

      <div className="row between-xs header-info">
        <div className="col-xs-4">
          <h1 className="header-content-title">
            Creamos y evaluamos tu
            <strong className="header-content-title-strong"> Hoja de Vida</strong>
          </h1>
          <p className="header-content-text">
            Creación de hoja de vida, guía para llegar al empleo
            deseado y capacitación para la entrevista de trabajo.
          </p>
          <a
            href="https://"
            target="_blank"
            rel="noopener noreferrer"
            className="header-hv-button"
          >
            Evaluar mi Hv
            <img src={arrowRightIcon} alt="empleapp" className="header-arrow-right-icon" />
          </a>
        </div>
        <div className="col-xs-5">
          <img src={woman} alt="empleapp woman" />
        </div>
      </div>

      <div className="row header-socials-icons-row">
        <div className="col-xs-offset-9 col-xs-2 center-xs header-socials-icons-bar">
          <a
            href="https://www.facebook.com/EmpleAppcol"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookIcon} alt="empleapp facebook link" className="header-social-icons" />
          </a>
          <a
            href="https://www.instagram.com/empleapp.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="empleapp instagram link" className="header-social-icons" />
          </a>
          <a
            href="https://www.linkedin.com/company/empleappcol/about/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="empleapp linkedin link" className="header-social-icons" />
          </a>
        </div>
        <a
            // eslint-disable-next-line max-len
          href="https://api.whatsapp.com/send?phone=573002507458&text=Hola%20Quiero%20Saber%20M%c3%a1s&source=&data=&app_absent="
          target="_blank"
          rel="noopener noreferrer"
          className="col-xs-1"
        >
          <img src={whatsAppIcon} alt="empleapp whatsapp link" className="header-whatsapp-button" />
        </a>
      </div>
    </header>
  </>
);

export default Header;
