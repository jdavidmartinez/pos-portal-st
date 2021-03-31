/* CompaniesBrandsCard UI-component */

import PropTypes from 'prop-types';

const CompaniesBrandsCard = ({
  alt,
  atlanticsoft,
  avtIngenieria,
  camaraComercio,
  fondoEmprender,
  hotelMeson,
  marquezFajardo,
  mirusSmart,
  parqueSoft
}) => (
  <>
    <section className="row companies-brands-card">
      <div className="col-xs-12 col-md-offset-8 col-md-5 companies-brands-card-title">
        <p>Empresas aliadas</p>
      </div>
      <div className="row around-xs middle-xs">
        <img
          src={fondoEmprender}
          alt={alt}
          className="col-xs-6 col-md-3"
        />
        <img
          src={camaraComercio}
          alt={alt}
          className="col-xs-6 col-md-3"
        />
        <img
          src={mirusSmart}
          alt={alt}
          className="col-xs-6 col-md-3"
        />
        <img
          src={parqueSoft}
          alt={alt}
          className="col-xs-6 col-md-3"
        />
      </div>
      <div className="col-xs-12 col-md-offset-5 col-md-8 companies-brands-card-title">
        <p>Empresas con las que hemos trabajado</p>
      </div>
      <div className="row around-xs middle-xs">
        <img
          src={avtIngenieria}
          alt={alt}
          className="col-xs-6 col-md-3"
        />
        <img
          src={hotelMeson}
          alt={alt}
          className="col-xs-6 col-md-3"
        />
        <img
          src={marquezFajardo}
          alt={alt}
          className="col-xs-6 col-md-3"
        />
        <img
          src={atlanticsoft}
          alt={alt}
          className="col-xs-6 col-md-3"
        />
      </div>
    </section>
  </>
);

CompaniesBrandsCard.propTypes = {
  alt: PropTypes.string.isRequired,
  atlanticsoft: PropTypes.string.isRequired,
  avtIngenieria: PropTypes.string.isRequired,
  camaraComercio: PropTypes.string.isRequired,
  fondoEmprender: PropTypes.string.isRequired,
  hotelMeson: PropTypes.string.isRequired,
  marquezFajardo: PropTypes.string.isRequired,
  mirusSmart: PropTypes.string.isRequired,
  parqueSoft: PropTypes.string.isRequired
};

export default CompaniesBrandsCard;
