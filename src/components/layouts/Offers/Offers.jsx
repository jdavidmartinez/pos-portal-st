import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Offers.css';

import image1 from '../../../assets/img/companies/parquesoft.png';
import image2 from '../../../assets/img/companies/camara-comercio.png';

const Offers = () => (
  <section>
    <div>
      <h1>CAROUSEL</h1>
      <Carousel>
        <Carousel.Item>
          <img src={image1} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image2} alt="" />
        </Carousel.Item>
      </Carousel>
    </div>
  </section>
);
export default Offers;
