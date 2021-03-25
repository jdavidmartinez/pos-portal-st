import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const CardBrandsCompanies = ({
  allyImage,
  allyImageTwo,
  allyImageThird,
  allyImageFour,
  customImg,
  customImgtwo,
  customImgThird,
  customImgFour
}) => (
  <Card
    style={{
      width: '40rem',
      height: '33rem',
      margin: '10px 10px 10px 10px',
      backgroundColor: '#f2f2f2',
      border: '1px solid #eee',
      boxShadow: '0 2px 15px #ccc',
      borderRadius: '36px'
    }}
  >
    <Card.Title
      style={{
        width: '40%',
        height: '3rem',
        margin: '5px 5px 5px 5px',
        lineHeight: '50px',
        color: '#ffff',
        textAlign: 'center',
        backgroundColor: '#760543',
        borderRadius: '5px',
        position: 'relative',
        top: '20px',
        left: '63%'
      }}
    >
      Empresas aliadas
    </Card.Title>
    <div>
      <Card.Img
        src={allyImage}
        style={{ width: '20%', padding: '10px', margin: '10px' }}
      />
      <Card.Img
        src={allyImageTwo}
        style={{ width: '20%', padding: '10px', margin: '10px' }}
      />
      <Card.Img
        src={allyImageThird}
        style={{ width: '20%', padding: '10px', margin: '10px' }}
      />
      <Card.Img
        src={allyImageFour}
        style={{ width: '20%', padding: '10px', margin: '10px' }}
      />
    </div>
    <Card.Title
      style={{
        width: '80%',
        height: '3rem',
        margin: '5px 5px 5px 5px',
        lineHeight: '50px',
        color: '#ffff',
        textAlign: 'center',
        backgroundColor: '#760543',
        borderRadius: '5px',
        position: 'relative',
        top: '20px',
        left: '23%'
      }}
    >
      Empresas con las que hemos trabajado
    </Card.Title>
    <div style={{ paddingTop: '50px' }}>
      <Card.Img
        src={customImg}
        style={{ width: '20%', padding: '10px', margin: '10px' }}
      />
      <Card.Img
        src={customImgtwo}
        style={{ width: '20%', padding: '10px', margin: '10px' }}
      />
      <Card.Img
        src={customImgThird}
        style={{ width: '20%', padding: '10px', margin: '10px' }}
      />
      <Card.Img
        src={customImgFour}
        style={{ width: '20%', padding: '10px', margin: '10px' }}
      />
    </div>
  </Card>
);

CardBrandsCompanies.propTypes = {
  allyImage: PropTypes.string.isRequired,
  allyImageTwo: PropTypes.string.isRequired,
  allyImageThird: PropTypes.string.isRequired,
  allyImageFour: PropTypes.string.isRequired,
  customImg: PropTypes.string.isRequired,
  customImgtwo: PropTypes.string.isRequired,
  customImgThird: PropTypes.string.isRequired,
  customImgFour: PropTypes.string.isRequired
};

export default CardBrandsCompanies;
