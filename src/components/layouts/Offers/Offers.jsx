/* Offers Layaout-component */
import VerticalCarousel from '../../UI/VerticalCarousel/VerticalCarousel'
import data from '../../Data/data.json';

import './offers.css';

const Offers = () => (
  <>
    <section>
      <div className="offers">
        <div className="row">
          <h2 className="col-lg-12 offers-title h2-titles">Ofertas de Empleo</h2>
        </div>
        <div className="row">
          <div className="col-lg-12 offer-carousel">
            <VerticalCarousel data={data.slides} />
          </div>
        </div>
      </div>
    </section>
  </>
);
export default Offers;
