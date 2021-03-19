import '../../../assets/css/features.css';

const Box = ({
  imagen, alt, title, description
}) => (
  <>
    <div className="container">
      <div className="myImage">
        <img src={imagen} alt={alt} />
      </div>
      <h3>{title}</h3>
      <p>
        {description}
      </p>
    </div>
  </>
)

export default Box;
