/* Features layout-component */

import Box from '../../UI/Box/Box';

import './features.css';
import accompany from '../../../assets/icons-img/accompany-icon.png';
import connection from '../../../assets/icons-img/connection-icon.png';
import identify from '../../../assets/icons-img/identify-icon.png';

const Features = () => (
  <>
    <section className="features">
      <div className="row center-xs">
        <h1 className="col-xs-12 features-title">¿Por que nosotros?</h1>
      </div>
      <div className="row">
        <Box
          image={identify}
          alt="Identify"
          title="Identificamos"
          description="Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum"
        />
        <Box
          image={accompany}
          alt="Acompañamiento"
          title="Perfilamos"
          description="Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum"
        />
        <Box
          image={connection}
          alt="Conexion"
          title="Conectamos"
          description="Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum"
        />
      </div>
    </section>

  </>
);

export default Features;
