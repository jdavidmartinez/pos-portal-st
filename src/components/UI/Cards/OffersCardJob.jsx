/* OffersCardJob UI-component */
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

import portfolioImg from '../../../assets/icons/img/offer-job.png';

const OffersCardJob = (
  {
    offerIcon,
    tittleOffer,
    description,
    salary
  }
) => (
  <>
    <Card className="col-xs-12 col-sm-12 cardOffer">
      <Card.Img src={offerIcon} variant="rigth" className="offer-card-rigth-icon" />
      <Card.Body>
        <Card.Title>
          {tittleOffer}
        </Card.Title>
        <Card.Img src={portfolioImg} className="offer-card-portfolio-img" />
        <Card.Text>
          {description}
          {salary}
        </Card.Text>
      </Card.Body>
    </Card>
  </>
);

OffersCardJob.propTypes = {
  offerIcon: PropTypes.string.isRequired,
  tittleOffer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired
}
/* tittleOffer, comapanyOffer, salaryOffer, descriptionOffer, */
export default OffersCardJob;
