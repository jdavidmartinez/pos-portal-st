import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

import '../../../assets/css/card.css';

const CardType = ({
  headerImage,
  iconImage,
  title,
  text
}) => (
  <Card
    style={{
      width: '35rem',
      height: '21rem',
      backgroundColor: '#f2f2f2',
      border: '1px solid #eee',
      boxShadow: '0 2px 15px #ccc',
      borderRadius: '36px',
      margin: 'auto'
    }}
  >
    <Card.Img variant="top" src={headerImage} style={{ width: '100%' }} />
    <Card.Body>
      <div
        style={{
          color: '#760543',
          fontWeight: 'bold'
        }}
      >
        <Card.Title>{title}</Card.Title>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex'
        }}
      >
        <Card.Text style={{ paddingRight: '20px' }}>
          {text}
        </Card.Text>
        <Card.Img
          src={iconImage}
          style={{
            width: '20%',
            backgroundColor: '#760543',
            padding: '10px',
            margin: 'auto',
            position: 'relative',
            top: '-20px'
          }}
          className="icon-image"
        />
      </div>
    </Card.Body>
  </Card>
);

CardType.propTypes = {
  headerImage: PropTypes.string.isRequired,
  iconImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default CardType;
