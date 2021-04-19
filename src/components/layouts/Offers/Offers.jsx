/* Offers Layaout-component */
import VerticalCarousel from '../../UI/VerticalCarousel/VerticalCarousel'
import data from '../../UI/VerticalCarousel/data.json';

import './offers.css';

const Offers = () => (
  <>
    <section>
      <div className="offers">
        <div className="row center-xs offers-title">
          <h2 className="col-xs-12 col-lg-12 h2-titles">Ofertas de Empleo</h2>
        </div>
        <div className="row">
          <div className="col-xs-12 col-lg-12 center-xs offer-carousel">
            <VerticalCarousel data={data.slides} leadingText={data.leadingText} />
          </div>
        </div>
      </div>
    </section>
  </>
);
export default Offers;
/* <VerticalCarousel data={data.slides} leadingText={data.leadingText} /> */
