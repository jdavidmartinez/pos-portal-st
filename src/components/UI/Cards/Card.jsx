import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

import '../../../assets/css/card.css';

const CardType = ({ headerImage, pLaboral, title }) => (
  <Card
    style={{
      width: '31rem',
      backgroundColor: '#f2f2f2',
      border: '1px solid #eee',
      boxShadow: '0 2px 15px #ccc',
      borderRadius: '36px'
    }}
  >
    <Card.Img variant="top" src={headerImage} style={{ width: '100%' }} />
    <Card.Body>
      <div
        style={{
          padding: '30px 0 0 25px',
          color: '#760543',
          fontWeight: 'bold'
        }}
      >
        <Card.Title>{title}</Card.Title>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '20px 25px 30px 25px ',
          boxSizing: 'border-box'
        }}
      >
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, quis nullam
          hendrerit orci at penatibus potenti, cursus condimentum porta risus
          morbi sollicitudin. Auctor himenaeos fames egestas commodo non
          ligula tempor class, feugiat cum dignissim arcu bibendum est
          convallis facilisis
        </Card.Text>
        <Card.Img
          src={pLaboral}
          style={{ width: '20%', paddingLeft: '40px' }}
          className="icon-image"
        />
      </div>
    </Card.Body>
  </Card>
);

CardType.propTypes = {
  headerImage: PropTypes.string.isRequired,
  pLaboral: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default CardType;
