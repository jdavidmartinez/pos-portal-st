/* OffersCardJob UI-component */
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

import portfolioImg from '../../../../assets/icons/img/offer-job.png';

import './category-card.css';

const CategoryCard = (
  {
    companie,
    description,
    offerIcon,
    offerVactNumber,
    cost,
    tittleOffer
  }
) => (
  <>
    <Card className="row responsive-card-offers">
      <Card.Body className="col-xs-10">
        <div className="row">
          <Card.Img src={portfolioImg} className="col-xs-2 responsive-offers-card-portfolio-img" />
          <Card.Title className="col-xs-10 responsive-offers-card-title">
            {tittleOffer}
          </Card.Title>
        </div>
        <div className="row">
          <Card.Text className="col-xs-12 responsive-offers-card-tex">
            {companie}
            -
            {cost}
          </Card.Text>
        </div>
        <div className="row">
          <Card.Text className="col-xs-10 responsive-offers-card-tex">
            {description}
          </Card.Text>
          <Card.Text className="col-xs-2 responsive-offers-card-tex">{offerVactNumber}</Card.Text>
        </div>
      </Card.Body>
      <input placeholder="Cantidad" />
      <button>OK</button> { /* eslint-disable-line */ }
      <div className="col-xs-12 responsive-buttom-img-section">
        <Card.Img src={offerIcon} className="col-xs-12 responsive-offers-card-buttom-icon" />
      </div>
    </Card>
  </>
);

CategoryCard.propTypes = {
  offerIcon: PropTypes.string.isRequired,
  tittleOffer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  offerVactNumber: PropTypes.string.isRequired,
  companie: PropTypes.string.isRequired
}
export default CategoryCard;
