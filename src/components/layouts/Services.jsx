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
      <Col xs={10} md={6} className="py-5">
        <Card
          headerImage={jobProfileImg}
          iconImage={jobProfileIcon}
          title="Perfil laboral"
          text="asesoramos y potencializamos su hoja de via enfocándonos en
          sus competencias y ofreciendo recomendaciones para que su perfil
          se adapte al mercado laboral actual."
        />
      </Col>
      <Col xs={10} md={6} className="py-5">
        <Card
          headerImage={chargeImg}
          iconImage={chargetIcon}
          title="Perfil de cargo"
          text="En compañía de las empresas se perfila y crea el puesto de trabajo
          de manera eficiente y precisa."
        />
      </Col>
      <Col xs={10} md={6} className="py-5">
        <Card
          headerImage={talentImg}
          iconImage={talentIcon}
          title="Descubrimiento de talento"
          text="Entregamos a la empresa 5 perfiles, los cuales se adaptan a las
          especificaciones del cargo en el menor tiempo."
        />
      </Col>
      <Col xs={10} md={6} className="py-5">
        <Card
          headerImage={connectionImg}
          iconImage={contectionIcon}
          title="Conexión laboral"
          text="Te acompañamos en todo el proceso de búsqueda de empleo
          mediante un proceso completo de aplicación a vacantes,
          preparación para entrevista y capacitación en temas de valor para
          potencializar tu perfil."
        />
      </Col>
    </Row>
  </section>
);

export default Services;
