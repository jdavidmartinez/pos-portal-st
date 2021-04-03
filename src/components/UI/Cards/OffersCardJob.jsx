/* OffersCardJob UI-component */
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

import portfolioImg from '../../../assets/icons/img/offer-job.png';

const OffersCardJob = (
  {
    offerIcon,
    tittleOffer,
    description,
    salary,
    offerVactNumber,
    companie,
    offerNumber
  }
) => (
  <>
    <Card className="row cardOffer">
      <Card.Body className="col-xs-9">
        <div className="row">
          <Card.Img src={portfolioImg} className="col-xs-2 offer-card-portfolio-img" />
          <Card.Title className="col-xs-7 offer-card-title">
            {tittleOffer}
          </Card.Title>
          <Card.Text className="col-xs-3">{offerVactNumber}</Card.Text>
        </div>
        <div className="row">
          <Card.Text className="col-xs-9">
            {companie}
          </Card.Text>
          <Card.Text className="col-xs-3">
            {salary}
          </Card.Text>
        </div>
        <div className="row">
          <Card.Text className="col-xs-9">
            {description}
          </Card.Text>
          <Card.Text className="col-xs-3">
            {offerNumber}
          </Card.Text>
        </div>
      </Card.Body>
      <Card.Img src={offerIcon} className="col-xs-3 offer-card-rigth-icon" />
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
/* tittleOffer, comapanyOffer, salaryOffer, descriptionOffer, */
export default OffersCardJob;
