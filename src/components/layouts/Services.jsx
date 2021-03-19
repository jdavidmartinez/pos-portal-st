import { Col, Row } from 'react-bootstrap';

// Components
import Card from '../UI/Cards/Card';

// assets
import profileImg from '../../assets/img/profile-card.png';
import talentImg from '../../assets/img/talent-card.png';
import '../../assets/css/services.css';

const Services = () => (
  <section>
    <Row>
      <Col xs={10}>
        <h1 className="services-title">Servicios</h1>
      </Col>
    </Row>
    <Row>
      <Col xs={10} md={6}>
        <Card headerImage={profileImg} title="Perfil laboral" />
      </Col>
      <Col xs={10} md={6}>
        <Card headerImage={profileImg} title="Perfil de cargo" />
      </Col>
      <Col xs={10} md={6}>
        <Card headerImage={talentImg} title="Descubrimiento de talento" />
      </Col>
      <Col xs={10} md={6}>
        <Card headerImage={profileImg} title="Conexión laboral" />
      </Col>
    </Row>
  </section>
);

export default Services;
