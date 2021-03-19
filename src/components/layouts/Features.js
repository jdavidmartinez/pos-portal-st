
import Title from '../IU/Titles/Title.js';
import Box from '../IU/Box/Box.js';
import identify from '../../assets/img/Identify.png';
import acompañamiento from '../../assets/img/Acompañamiento.png';
import conexion from '../../assets/img/Conexion.png';

export default function Features() {
  return(
    <>
      <Title title = '¿Por qué nosotros?' />    
    <div className='containerFeature'>
      <Box
            src = {identify}
            alt = 'Identify'
            title = 'Identificamos'
            description = 'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum'
      />
      <Box
            src = {acompañamiento}
            alt = 'Acompañamiento'
            title= 'Acompañamiento'
            description = 'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum'
      />
      <Box
            src = {conexion}
            alt = 'Conexion'
            title = 'Conectamos'
            description = 'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum'
      />
      </div>       
    </>
  );
}
