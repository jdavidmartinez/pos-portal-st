import { Col, Row } from 'react-bootstrap';

import CardCompanies from '../UI/Cards/CardCompanies';

import companiesImg from '../../assets/img/companies.png';
import '../../assets/css/companies.css';

const Companies = () => (
  <section>
    <Row>
      <Col xs={10}>
        <h1 className="services-title">Empresas</h1>
      </Col>
    </Row>
    <Row className="cardStyle">
      <Col xs={10} md={4} className="profileCard py-5">
        <CardCompanies headerImage={companiesImg} title="Perfil laboral" />
      </Col>
      <Col xs={10} md={4} className="profileCard py-5">
        <CardCompanies headerImage={companiesImg} title="Perfil laboral" />
      </Col>
    </Row>
  </section>
);

export default Companies;
