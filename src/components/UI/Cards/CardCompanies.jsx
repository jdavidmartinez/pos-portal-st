import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const CardCompanies = ({ headerImage }) => (
  <Card
    style={{
      width: '25rem',
      margin: 'auto',
      backgroundColor: '#f2f2f2',
      border: '1px solid #eee',
      boxShadow: '0 2px 15px #ccc',
      borderRadius: '36px'
    }}
  >
    <Card.Img
      src={headerImage}
      style={{ width: '100%' }}
    />
  </Card>
);

CardCompanies.propTypes = {
  headerImage: PropTypes.string.isRequired
};

export default CardCompanies;
