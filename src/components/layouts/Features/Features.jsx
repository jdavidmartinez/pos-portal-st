/* Features layout-component */

import './features.css';

import Box from '../../UI/Box/Box';

import accompany from '../../../assets/icons-img/accompany-icon.png';
import connection from '../../../assets/icons-img/connection-icon.png';
import identify from '../../../assets/icons-img/identify-icon.png';

const Features = () => (
  <>
    <section className="features">
      <div className="row center-xs">
        <h2 className="col-xs-12 h2-titles features-title">¿Por que nosotros?</h2>
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
