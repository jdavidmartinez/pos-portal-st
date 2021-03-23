import PropTypes from 'prop-types';

import '../../../assets/css/features.css';

const Box = ({
  alt, description, image, title
}) => (
  <>
    <div className="container">
      <div className="myImage">
        <img src={image} alt={alt} />
      </div>
      <h3 className="titleCard">{title}</h3>
      <p>
        {description}
      </p>
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
