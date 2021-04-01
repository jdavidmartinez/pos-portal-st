// import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './offers.css';

// import image1 from '../../../assets/img/companies/parquesoft.png';
// import image2 from '../../../assets/img/companies/camara-comercio.png';

const Offers = () => (
  <>
    <section>
      <div className="row center-xs offers">
        <div className="row center-xs offers-title">
          <h2 className="col-xs-12 offers-h2">Boletín</h2>
        </div>
        <div className="row center-xs offers-carousel-box">
          <div className="col-xs-6">
            <h2>carrusel</h2>
          </div>
          <div className="col-xs-6">
            <h2>emergente</h2>
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
