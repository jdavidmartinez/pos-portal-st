import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

import '../../../assets/css/card.css';

const CardCompanies = ({ headerImage }) => (
  <Card
    style={{
      width: '31rem',
      backgroundColor: '#f2f2f2',
      border: '1px solid #eee',
      boxShadow: '0 2px 15px #ccc',
      borderRadius: '36px'
    }}
  >
    <Card.Img
      variant="top"
      src={headerImage}
      style={{ width: '100%' }}
    />
    <Card.Body>
      <div
        style={{
          padding: '20px 0 0 25px',
          color: '#760543',
          fontWeight: 'bold'
        }}
      />
    </Card.Body>
  </Card>
);

CardCompanies.propTypes = {
  headerImage: PropTypes.string.isRequired
};

export default CardCompanies;
