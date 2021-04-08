/* OfferRigthCardJob UI-component */
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './offer-rigth-card-job.css'

const OfferRigthCardJob = (
  {
    tittleOffer,
    skillOffer
  }
) => (
  <>
    <Card className="offer-righ-card-job">
      <Card.Body className="offer-righ-card-body">
        <div className="">
          <Card.Title className="offer-righ-card-top-title">
            ¡Te estamos Buscando!
          </Card.Title>
        </div>
        <div>
          <Card.Title className="">
            Se busca
            {tittleOffer}
          </Card.Title>
        </div>
        <div className="offer-rigth-card-text">
          ¡Buscamos!
          {tittleOffer}
          en
          {skillOffer}
        </div>
      </Card.Body>
    </Card>
  </>

);

OfferRigthCardJob.propTypes = {
  tittleOffer: PropTypes.string.isRequired,
  skillOffer: PropTypes.string.isRequired

};

export default OfferRigthCardJob;
