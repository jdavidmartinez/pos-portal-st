import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const CardBrandsCompanies = ({
  allyImage,
  allyImageTwo,
  allyImageThird,
  allyImagefour,
  customImg,
  customImgtwo,
  customImgThird
}) => (
  <Card
    style={{
      width: '31rem',
      margin: 'auto',
      backgroundColor: '#f2f2f2',
      border: '1px solid #eee',
      boxShadow: '0 2px 15px #ccc',
      borderRadius: '36px'
    }}
  >
    <Card.Title>Empresas aliadas</Card.Title>
    <div>
      <Card.Img
        src={allyImage}
        style={{ width: '10%' }}
      />
      <Card.Img
        src={allyImageTwo}
        style={{ width: '10%' }}
      />
      <Card.Img
        src={allyImageThird}
        style={{ width: '10%' }}
      />
      <Card.Img
        src={allyImagefour}
        style={{ width: '10%' }}
      />
    </div>
    <Card.Title>Empresas con las que hemos trabajado</Card.Title>
    <div>
      <Card.Img
        src={customImg}
        style={{ width: '10%' }}
      />
      <Card.Img
        src={customImgtwo}
        style={{ width: '10%' }}
      />
      <Card.Img
        src={customImgThird}
        style={{ width: '10%' }}
      />
    </div>
  </Card>
);

CardBrandsCompanies.propTypes = {
  allyImage: PropTypes.string.isRequired,
  allyImageTwo: PropTypes.string.isRequired,
  allyImageThird: PropTypes.string.isRequired,
  allyImagefour: PropTypes.string.isRequired,
  customImg: PropTypes.string.isRequired,
  customImgtwo: PropTypes.string.isRequired,
  customImgThird: PropTypes.string.isRequired
};

export default CardBrandsCompanies;
