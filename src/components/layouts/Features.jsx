import Box from '../UI/Box/Box';
import Title from '../UI/Titles/Title';

import '../../assets/css/features.css';
import accompany from '../../assets/img/accompany.png';
import connection from '../../assets/img/connection.png';
import identify from '../../assets/img/identify.png';

const Features = () => (
  <>
    <div className="divTitle">
      <Title className="divTitle" title="¿Por qué nosotros?" />
    </div>
    <div className="containerFeature">
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
  </>
);

export default Features;
