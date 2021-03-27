/* ServicesCard UI-component */

import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

import '../../../assets/css/card.css';

const CardType = ({
  headerImage,
  iconImage,
  text,
  title
}) => (
  <Card
    style={{
      backgroundColor: '#f2f2f2',
      border: '1px solid #eee',
      borderRadius: '36px',
      boxShadow: '0 2px 15px #ccc',
      height: '30em',
      margin: 'auto',
      marginBottom: '50px',
      width: '40%'
    }}
  >
    <Card.Img src={headerImage} variant="top" style={{ width: '100%' }} />
    <Card.Body>
      <Card.Title style={{
        color: '#760543',
        fontSize: '1.2em',
        fontWeight: 'bold',
        padding: '2em'
      }}
      >
        {title}
      </Card.Title>
      <div
        style={{
          display: 'flex'
        }}
      >
        <Card.Text style={{
          lineHeight: '25px',
          padding: '0 4em 3em 2em'
        }}
        >
          {text}
        </Card.Text>
        <Card.Img
          src={iconImage}
          style={{
            margin: 'auto',
            padding: '30px',
            position: 'relative',
            top: '-20px',
            width: '20%'
          }}
        />
      </div>
    </Card.Body>
  </Card>
);

CardType.propTypes = {
  headerImage: PropTypes.string.isRequired,
  iconImage: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default CardType;
