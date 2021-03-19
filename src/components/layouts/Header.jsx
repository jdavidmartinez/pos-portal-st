import { Col, Row } from 'react-bootstrap';

import hero from '../../assets/img/img_1_all.png';
import logo from '../../assets/logos/P1-10.png';

import '../../assets/css/header.css';

const Header = () => (
  <header>
    <Row className="justify-content-center">
      <div className="bar-header">
        <img src={logo} alt="logo" className="logo-header" />
        <div className="main-button">Ingresar</div>
      </div>
    </Row>
    <Row className="justify-content-center">
      <Col xs={10} md={5}>
        <h1 className="cv-text">Creamos y Evaluamos tu Hoja de Vida</h1>
        <p>
          Creación de hoja de vida, guía para llegar al empleo
          deseado y capacitación para la entrevista de trabajo.
        </p>
        <div className="main-button">Evaluar HV</div>
      </Col>
      <Col xs={10} md={5}>
        <img src={hero} alt="hero" className="hero" />
      </Col>
    </Row>
  </header>
);

export default Header;
