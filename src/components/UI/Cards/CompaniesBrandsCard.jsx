/* CompaniesBrandsCard UI-component */

import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const CardBrandsCompanies = ({
  fondoEmprender,
  camaraComercio,
  mirusSmart,
  parqueSoft,
  avtIngenieria,
  hotelMeson,
  marquezFajardo,
  atlanticsoft
}) => (
  <Card
    style={{
      backgroundColor: '#e8e8e8',
      border: '1px solid #eee',
      borderRadius: '36px',
      boxShadow: '0 2px 15px #ccc',
      height: '33rem',
      margin: '10px 10px 10px 10px',
      width: '40rem'
    }}
  >
    <Card.Title
      style={{
        backgroundColor: '#760543',
        borderRadius: '10px',
        color: '#fff',
        fontFamily: 'medium',
        height: '3rem',
        left: '63%',
        lineHeight: '50px',
        margin: '5px 5px 5px 5px',
        position: 'relative',
        textAlign: 'center',
        top: '20px',
        width: '40%'
      }}
    >
      Empresas aliadas
    </Card.Title>
    <div>
      <Card.Img
        src={fondoEmprender}
        style={{ width: '20%', padding: '10px', margin: '10px' }}
      />
      <Card.Img
        src={camaraComercio}
        style={{ width: '20%', padding: '10px', margin: '10px' }}
      />
      <Card.Img
        src={mirusSmart}
        style={{ width: '20%', padding: '10px', margin: '10px' }}
      />
      <Card.Img
        src={parqueSoft}
        style={{ width: '20%', padding: '10px', margin: '10px' }}
      />
    </div>
    <Card.Title
      style={{
        backgroundColor: '#760543',
        borderRadius: '10px',
        color: '#fff',
        fontFamily: 'medium',
        height: '3rem',
        left: '23%',
        lineHeight: '50px',
        margin: '5px 5px 5px 5px',
        position: 'relative',
        textAlign: 'center',
        top: '20px',
        width: '80%'
      }}
    >
      Empresas con las que hemos trabajado
    </Card.Title>
    <div style={{ paddingTop: '50px' }}>
      <Card.Img
        src={avtIngenieria}
        style={{ width: '20%', padding: '10px', margin: '10px' }}
      />
      <Card.Img
        src={hotelMeson}
        style={{ width: '20%', padding: '10px', margin: '10px' }}
      />
      <Card.Img
        src={marquezFajardo}
        style={{ width: '20%', padding: '10px', margin: '10px' }}
      />
      <Card.Img
        src={atlanticsoft}
        style={{ width: '20%', padding: '10px', margin: '10px' }}
      />
    </div>
  </Card>
);

CardBrandsCompanies.propTypes = {
  fondoEmprender: PropTypes.string.isRequired,
  camaraComercio: PropTypes.string.isRequired,
  mirusSmart: PropTypes.string.isRequired,
  parqueSoft: PropTypes.string.isRequired,
  avtIngenieria: PropTypes.string.isRequired,
  hotelMeson: PropTypes.string.isRequired,
  marquezFajardo: PropTypes.string.isRequired,
  atlanticsoft: PropTypes.string.isRequired
};

export default CardBrandsCompanies;
