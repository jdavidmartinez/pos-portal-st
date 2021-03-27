/* Box UI-component */

import PropTypes from 'prop-types';

import '../../layouts/Features/features.css';

const Box = ({
  alt, description, image, title
}) => (
  <>
    <div className="features-card">
      <div className="features-card-top-image">
        <img src={image} alt={alt} />
      </div>
      <h3 className="features-card-title">{title}</h3>
      <p className="features-card-text">{description}</p>
    </div>
  </>
)

Box.propTypes = {
  alt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Box;
