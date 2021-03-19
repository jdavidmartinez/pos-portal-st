import Box from '../UI/Box/Box';
import Title from '../UI/Titles/Title';

import identify from '../../assets/img/Identify.png';
import acompañamiento from '../../assets/img/Acompañamiento.png';
import conexion from '../../assets/img/Conexion.png';

export default function Features() {
  return (
    <>
      <Title title="¿Por qué nosotros?" />
      <div className="containerFeature">
        <Box
          imagen={identify}
          alt="Identify"
          title="Identificamos"
          description="Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum"
        />
        <Box
          imagen={acompañamiento}
          alt="Acompañamiento"
          title="Acompañamiento"
          description="Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum"
        />
        <Box
          imagen={conexion}
          alt="Conexion"
          title="Conectamos"
          description="Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum"
        />
      </div>
    </>
  );
}
