// import { Carousel } from 'react-bootstrap';
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
            <OffersCardJob
              offerIcon={offerIconImg}
              tittleOffer="Desarrollador"
              description="!BUSCAMOS¡ Profesor especializado en GO"
              salary="$5.000.000"
              offerVactNumber="Vact#52"
              companie="Perfiltic"
              offerNumber="45"
            />
          </div>
        </div>
      </div>
    </section>
  </>
);
export default Offers;

/*  <div className="row center-xs">
        <h1>Ofertas</h1>
        <div className="col-xs-12">
          <Carousel className="carousel vert slide">
            <Carousel.Item className="carousel-item">
              <img src={image1} alt="" />
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
              <img src={image2} alt="" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div> */
