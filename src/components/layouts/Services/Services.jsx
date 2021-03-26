/* Services layout-component */

import Card from '../../UI/Cards/Card';

import whiteJobProfileIcon from '../../../assets/icons/whiteProfile.svg';
import whiteTalentIcon from '../../../assets/icons/whiteTalent.svg';
import whiteConnectionIcon from '../../../assets/icons/whiteConnection.svg';
import whiteChargeIcon from '../../../assets/icons/whiteCharge.svg';

import chargeImg from '../../../assets/img/charge-card.png';
import connectionImg from '../../../assets/img/connection-card.png';
import jobProfileImg from '../../../assets/img/profile-card.png';
import talentImg from '../../../assets/img/talent-card.png';

import './services.css';

const Services = () => (
  <section>
    <div className="row">
      <h1 className="col-xs-12">Servicios</h1>
    </div>
    <div className="row">
      <Card
        headerImage={jobProfileImg}
        iconImage={whiteJobProfileIcon}
        title="Perfil laboral"
        text="asesoramos y potencializamos su hoja de via enfocándonos en
          sus competencias y ofreciendo recomendaciones para que su perfil
          se adapte al mercado laboral actual."
        className="col-xs-6"
      />
      <Card
        headerImage={chargeImg}
        iconImage={whiteChargeIcon}
        title="Perfil de cargo"
        text="En compañía de las empresas se perfila y crea el puesto de trabajo
          de manera eficiente y precisa."
        className="col-xs-6"
      />
      <Card
        headerImage={talentImg}
        iconImage={whiteTalentIcon}
        title="Descubrimiento de talento"
        text="Entregamos a la empresa 5 perfiles, los cuales se adaptan a las
          especificaciones del cargo en el menor tiempo."
        className="col-xs-6"
      />
      <Card
        headerImage={connectionImg}
        iconImage={whiteConnectionIcon}
        title="Conexión laboral"
        text="Te acompañamos en todo el proceso de búsqueda de empleo
          mediante un proceso completo de aplicación a vacantes,
          preparación para entrevista y capacitación en temas de valor para
          potencializar tu perfil."
        className="col-xs-6"
      />
    </div>
  </section>
);

export default Services;
