import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Offers.css';

import image1 from '../../../assets/img/companies/parquesoft.png';
import image2 from '../../../assets/img/companies/camara-comercio.png';

const Offers = () => (
  <>
    <section>
      <div className="row center-xs">
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
      </div>
    </section>
  </>
);
export default Offers;
