/* CompaniesCard UI-component */

import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const CardCompanies = ({ headerImage }) => (
  <Card
    style={{
      backgroundColor: '#f2f2f2',
      border: '1px solid #eee',
      borderRadius: '36px',
      boxShadow: '0 2px 15px #ccc',
      margin: 'auto',
      width: '30rem'
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
