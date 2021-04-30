/* Features layout-component */

import './features.css';

import FeaturesCard from '../../UI/Cards/FeaturesCard';

import accompany from '../../../assets/icons/img/accompany-icon.png';
import connection from '../../../assets/icons/img/connection-icon.png';
import identify from '../../../assets/icons/img/identify-icon.png';

const Features = () => (
  <>
    <section className="features">
      <div className="row center-xs">
        <h2 className="col-xs-12 h2-titles features-title">¿Por qué Nosotros?</h2>
      </div>
      <div className="row around-xs">
        <FeaturesCard
          image={identify}
          alt="Identify"
          title="Identificamos"
          description="Nos importa lo que deseas para tu futuro, en una entrevista inicial
            entendemos las necesidades e inconvenientes que han surgido a lo largo del proceso
            de búsqueda de empleo."
        />
        <FeaturesCard
          image={accompany}
          alt="Acompañamiento"
          title="Perfilamos"
          description="En un acompañamiento de 3 días encontramos habilidades y fortalezas del
            perfil y lo plasmamos en un documento digital potencializado."
        />
        <FeaturesCard
          image={connection}
          alt="Conexion"
          title="Conectamos"
          description="¡Pasamos a la acción! conociendo tu perfil y tus requerimientos continuamos
            conectando con las empresas a nivel nacional e internacional."
        />
      </div>
    </section>
  </>
);

export default Features;
