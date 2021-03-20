import { Col, Row } from 'react-bootstrap';

// Images and styles assets
import hero from '../../assets/img/header-girl.png';
import logo from '../../assets/logos/logo.png';
import '../../assets/css/header.css';

// Icon assets
import facebookIcon from '../../assets/icons/facebook-icon.svg';
import instagramIcon from '../../assets/icons/instagram-icon.svg';
import linkedinIcon from '../../assets/icons/linkedin-icon.svg';
import whatsAppIcon from '../../assets/icons/whatsapp-icon.svg';

const Header = () => (
  <header>
    <Row className="justify-content-center">
      <Col md={10} className="header-top-bar">
        <img src={logo} alt="logo" className="header-logo" />
        <div className="header-ingress-button">Ingresar</div>
      </Col>
    </Row>
    <Row className="justify-content-center">
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
            <div className="header-evaluate-hv-button">Evaluar HV </div>
          </Col>
        </Row>
      </Col>
      <Col md={6}>
        <img src={hero} alt="hero" className="hero" />
      </Col>
    </Row>
    <Row className="justify-content-end">
      <Col md={2} className="header-bottom-bar">
        <img src={facebookIcon} alt="logo" className="icons" />
        <img src={instagramIcon} alt="logo" className="icons" />
        <img src={linkedinIcon} alt="logo" className="icons" />
        <img src={whatsAppIcon} alt="logo" className="icons" />
      </Col>
    </Row>
  </header>
);

export default Header;
