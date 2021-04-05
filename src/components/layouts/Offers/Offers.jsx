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
          <h2 className="col-xs-12 offers-h2">Ofertas de Empleo</h2>
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
