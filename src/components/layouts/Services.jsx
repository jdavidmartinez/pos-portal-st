import { Col, Row } from 'react-bootstrap';

import Card from '../UI/Cards/Card';

// Icons
import jobProfileIcon from '../../assets/icons/job-profile-icon.svg';
import talentIcon from '../../assets/icons/talent-icon.svg';
import contectionIcon from '../../assets/icons/connection-icon.svg';
import chargetIcon from '../../assets/icons/rol-profile-icon.svg';

// Card's header image
import chargeImg from '../../assets/img/charge-card.png';
import connectionImg from '../../assets/img/connection-card.png';
import jobProfileImg from '../../assets/img/profile-card.png';
import talentImg from '../../assets/img/talent-card.png';
import Title from '../UI/Titles/Title'
import '../../assets/css/services.css';

const Services = () => (
  <section>
    <div className="divTitle">
      <Title className="divTitle" title="Servicios" />
    </div>
    <Row>
      <Col xs={10} md={6}>
        <Card
          headerImage={jobProfileImg}
          iconImage={jobProfileIcon}
          title="Perfil laboral"
        />
      </Col>
      <Col xs={10} md={6}>
        <Card
          headerImage={chargeImg}
          iconImage={chargetIcon}
          title="Perfil de cargo"
        />
      </Col>
      <Col xs={10} md={6}>
        <Card
          headerImage={talentImg}
          iconImage={talentIcon}
          title="Descubrimiento de talento"
        />
      </Col>
      <Col xs={10} md={6}>
        <Card
          headerImage={connectionImg}
          iconImage={contectionIcon}
          title="Conexión laboral"
        />
      </Col>
    </Row>
  </section>
);

export default Services;
