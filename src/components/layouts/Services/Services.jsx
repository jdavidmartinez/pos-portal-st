/* Services layout-component */

import './services.css';

import Card from '../../UI/Cards/ServicesCard';

import connectionIcon from '../../../assets/icons/svg/connection-icon.svg';
import jobProfileIcon from '../../../assets/icons/svg/job-profile-icon.svg';
import roleIcon from '../../../assets/icons/svg/role-icon.svg';
import talentIcon from '../../../assets/icons/svg/talent-icon.svg';

import connectionImg from '../../../assets/img/connection-card.png';
import jobProfileImg from '../../../assets/img/job-profile-card.png';
import roleImg from '../../../assets/img/role-card.png';
import talentImg from '../../../assets/img/talent-card.png';

const Services = () => (
  <>
    <section className="services">
      <div className="row">
        <h2 className="col-xs-12 h2-titles services-title">Servicios</h2>
      </div>
      <div className="row around-xs">
        <Card
          headerImage={jobProfileImg}
          iconImage={jobProfileIcon}
          title="Perfilación laboral"
          text="Asesoramos y potencializamos su hoja de via enfocándonos en
          sus competencias y ofreciendo recomendaciones para que su perfil
          se adapte al mercado laboral actual."
        />
        <Card
          headerImage={roleImg}
          iconImage={roleIcon}
          title="Perfilación de cargo"
          text="En compañía de las empresas se perfila y crea el puesto de trabajo
          de manera eficiente y precisa."
        />
        <Card
          headerImage={talentImg}
          iconImage={talentIcon}
          title="Descubrimiento de talento"
          text="Entregamos a la empresa 5 perfiles, los cuales se adaptan a las
          especificaciones del cargo en el menor tiempo."
        />
        <Card
          headerImage={connectionImg}
          iconImage={connectionIcon}
          title="Conexión"
          text="Te acompañamos en todo el proceso de búsqueda de empleo
          mediante un proceso completo de aplicación a vacantes,
          preparación para entrevista y capacitación en temas de valor para
          potencializar tu perfil."
        />
      </div>
    </section>
  </>
);

export default Services;
