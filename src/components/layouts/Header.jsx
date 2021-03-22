import { Col, Row } from 'react-bootstrap';

// Images and styles assets
import hero from '../../assets/img/header-girl.png';
import logo from '../../assets/logos/logo.png';
import '../../assets/css/header.css';

// Icon assets
import arrowRightIcon from '../../assets/icons/arrow-right-icon.svg';
import facebookIcon from '../../assets/icons/facebook-icon.svg';
import instagramIcon from '../../assets/icons/instagram-icon.svg';
import linkedinIcon from '../../assets/icons/linkedin-icon.svg';
import whatsAppIcon from '../../assets/icons/whatsapp-icon.svg';

const Header = () => (
  <header className="header">
    <Row className="justify-content-center">
      <Col md={10} className="header-top-bar">
        <img src={logo} alt="logo" className="header-logo" />
        <div className="header-ingress-button">Ingresar</div>
      </Col>
    </Row>
    <Row className="justify-content-center header-content">
      <Col md={4}>
        <Row className="header-info">
          <Col md={9}>
            <h1 className="header-content-title">Creamos y</h1>
            <h1 className="header-content-title">evaluamos tu</h1>
            <h1 className="header-content-title">Hoja de Vida</h1>
          </Col>
          <Col md={9}>
            <p className="header-content-text">
              Creación de hoja de vida, guía para llegar al empleo
              deseado y capacitación para la entrevista de trabajo.
            </p>
          </Col>
          <Col md={9}>
            <div className="header-evaluate-hv-button">
              Evaluar mi Hv
              <img src={arrowRightIcon} alt="empleapp" className="arrow-right-icon" />
            </div>
          </Col>
        </Row>
      </Col>
      <Col md={6}>
        <img src={hero} alt="hero" className="hero" />
      </Col>
    </Row>
    <Row className="justify-content-end">
      <Col md={2} className="header-bottom-bar">
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
      </Col>
      <Col md={1}>
        <a
        // eslint-disable-next-line max-len
          href="https://api.whatsapp.com/send?phone=573002507458&text=Hola%20Quiero%20Saber%20M%c3%a1s&source=&data=&app_absent="
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsAppIcon} alt="empleapp whatsapp link" className="whatsapp-button" />
        </a>
      </Col>
    </Row>
  </header>
);

export default Header;
