import { Col, Row } from 'react-bootstrap';

import Card from '../UI/Cards/Card';

import jobProfile from '../../assets/img/job-profile.svg';
import profileImg from '../../assets/img/profile-card.png';
import talentImg from '../../assets/img/talent-card.png';
import '../../assets/css/services.css';

import connectionImg from '../../assets/img/connection-card.png';
import chargeImg from '../../assets/img/charge-card.png';

const Services = () => (
  <section>
    <Row>
      <Col xs={10}>
        <h1 className="services-title">Servicios</h1>
      </Col>
    </Row>
    <Row>
      <Col xs={10} md={6}>
        <Card
          headerImage={profileImg}
          title="Perfil laboral"
          jobProfile={jobProfile}
        />
      </Col>
      <Col xs={10} md={6}>
        <Card
          headerImage={chargeImg}
          title="Perfil de cargo"
          jobProfile={jobProfile}
        />
      </Col>
      <Col xs={10} md={6}>
        <Card
          headerImage={talentImg}
          title="Descubrimiento de talento"
          jobProfile={jobProfile}
        />
      </Col>
      <Col xs={10} md={6}>
        <Card
          headerImage={connectionImg}
          title="Conexión laboral"
          jobProfile={jobProfile}
        />
      </Col>
    </Row>
  </section>
);

export default Services;
