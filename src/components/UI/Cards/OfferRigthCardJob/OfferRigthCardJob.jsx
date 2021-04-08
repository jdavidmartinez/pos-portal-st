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
        <div className="offer-rigth-card-main-info">
          <div className="row">
            <Card.Title className="col-xs-6">
              Se busca
              {tittleOffer}
            </Card.Title>
          </div>
          <div className="row offer-rigth-card-text">
            <Card.Text className="col-xs-10">
              ¡Buscamos!
              {tittleOffer}
              en
              {skillOffer}
            </Card.Text>
          </div>
          <div>
            <div className="row offer-rigth-card-skills">
              <Card.Text className="col-xs-6">
                Skils desables:
              </Card.Text>
              <Card.Text className="col-xs-6">
                Java(Springboot),Python
              </Card.Text>
            </div>
            <div className="row offer-rigth-card-skills">
              <Card.Text className="col-xs-6">
                Experiencia:
              </Card.Text>
              <Card.Text className="col-xs-6">
                3 años
              </Card.Text>
            </div>
          </div>
          <div className="row ubication">
            <Card.Text className="col-xs-4">
              Cali, Armenia, Medellin, Bogota
            </Card.Text>
            <Card.Text className="col-xs-8">
              Empleapp
            </Card.Text>
          </div>
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
