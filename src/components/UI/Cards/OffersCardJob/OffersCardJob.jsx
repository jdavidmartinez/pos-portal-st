/* OffersCardJob UI-component */
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

import portfolioImg from '../../../../assets/icons/img/offer-job.png';

import './offer-card-job.css';

const OffersCardJob = (
  {
    companie,
    description,
    offerIcon,
    offerNumber,
    offerVactNumber,
    salary,
    tittleOffer
  }
) => (
  <>
    <Card className="row cardOffer">
      <Card.Body className="col-xs-10">
        <div className="row">
          <Card.Img src={portfolioImg} className="col-xs-2 offer-card-portfolio-img" />
          <Card.Title className="col-xs-7 offer-card-title">
            {tittleOffer}
          </Card.Title>
          <Card.Text className="col-xs-3 offer-card-tex">{offerVactNumber}</Card.Text>
        </div>
        <div className="row">
          <Card.Text className="col-xs-9 offer-card-tex">
            {companie}
            -
            {salary}
          </Card.Text>
        </div>
        <div className="row">
          <Card.Text className="col-xs-9 offer-card-tex">
            {description}
          </Card.Text>
          <Card.Text className="col-xs-3 offer-card-tex">
            {offerNumber}
          </Card.Text>
        </div>
      </Card.Body>
      <Card.Img src={offerIcon} className="col-xs-2 offer-card-rigth-icon" />
    </Card>
  </>
);

OffersCardJob.propTypes = {
  offerIcon: PropTypes.string.isRequired,
  tittleOffer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  offerVactNumber: PropTypes.string.isRequired,
  companie: PropTypes.string.isRequired,
  offerNumber: PropTypes.string.isRequired
}
export default OffersCardJob;
