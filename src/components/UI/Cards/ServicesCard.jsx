/* ServicesCard UI-component */

import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

import '../../layouts/Services/services.css';

const CardType = ({
  headerImage,
  iconImage,
  text,
  title
}) => (
  <>
    <Card className="col-xs-12 col-sm-5 card">
      <Card.Img src={headerImage} variant="top" className="card-top-img" />
      <Card.Body>
        <Card.Title className="card-title">
          {title}
        </Card.Title>
        <article className="row around-xs middle-xs">
          <Card.Text className="col-xs-7 col-sm-9 card-text">
            {text}
          </Card.Text>
          <Card.Img
            src={iconImage}
            className="col-xs-3 col-sm-2 card-icon-img"
          />
        </article>
      </Card.Body>
    </Card>
  </>
);

CardType.propTypes = {
  headerImage: PropTypes.string.isRequired,
  iconImage: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default CardType;
