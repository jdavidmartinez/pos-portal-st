// import { Carousel } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import OffersCardJob from '../../UI/Cards/OffersCardJob';
import VerticalCarousel from '../../UI/VerticalCarousel/VerticalCarousel'
import data from '../../UI/VerticalCarousel/data.json';

import './offers.css';

// import offerIconImg from '../../../assets/icons/svg/offer-programmer-icon.svg'

const Offers = () => (
  <>
    <section>
      <div className="row center-xs offers">
        <div className="row center-xs offers-title">
          <h2 className="col-xs-12 offers-h2">Ofertas</h2>
        </div>
        <div className="row center-xs ">
          <div className="col-xs-12">
            <VerticalCarousel data={data.slides} leadingText={data.leadingText} />
          </div>
        </div>
      </div>
    </section>
  </>
);
export default Offers;
/* import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import OffersCardJob from '../../UI/Cards/OffersCardJob';

import './offers.css';

import offerIconImg from '../../../assets/icons/svg/offer-programmer-icon.svg'

const Offers = () => (
  <>
    <section>
      <div className="row center-xs offers">
        <div className="row center-xs offers-title">
          <h2 className="col-xs-12 offers-h2">Ofertas</h2>
        </div>
        <div className="row center-xs ">
          <div className="col-xs-12">
            <Carousel className="carousel vert slide">
              <Carousel.Item className="carousel-item">
                <OffersCardJob
                  companie="Perfiltic"
                  description="!BUSCAMOS¡ Profesor especializado en GO"
                  offerIcon={offerIconImg}
                  offerNumber="45"
                  offerVactNumber="Vact#52"
                  salary="$5.000.000"
                  tittleOffer="Desarrollador"
                />
              </Carousel.Item>
              <Carousel.Item className="carousel-item">
                <OffersCardJob
                  offerIcon={offerIconImg}
                  tittleOffer="Diseñador"
                  description="!BUSCAMOS¡ Diseñador especializado en React"
                  salary="$7.000.000"
                  offerVactNumber="Vact#52"
                  companie="Perfiltic"
                  offerNumber="46"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  </>
);
export default Offers; */
