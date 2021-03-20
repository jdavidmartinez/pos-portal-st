import { Col, Row } from 'react-bootstrap';

import hero from '../../assets/img/header-girl.png';
import logo from '../../assets/logos/logo.png';

import '../../assets/css/header.css';

const Header = () => (
  <header>
    <Row className="justify-content-center">
      <Col md={10} className="header-top-bar">
        <img src={logo} alt="logo" className="header-logo" />
        <div className="header-main-button">Ingresar</div>
      </Col>
    </Row>
    <Row className="justify-content-center">
      <Col xs={10} md={5}>
        <h1 className="cv-text">Creamos y Evaluamos tu Hoja de Vida</h1>
        <p>
          Creación de hoja de vida, guía para llegar al empleo
          deseado y capacitación para la entrevista de trabajo.
        </p>
        <div className="header-main-button">Evaluar HV</div>
      </Col>
      <Col xs={10} md={5}>
        <img src={hero} alt="hero" className="hero" />
      </Col>
    </Row>
  </header>
);

export default Header;
