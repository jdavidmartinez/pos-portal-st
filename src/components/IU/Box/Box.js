import "../../../assets/css/features.css";     

export default function Box ( { imagen, alt, titleCard, description } ) {
  return(
    <>
    <div className="container">
      <div className="myImage">
        <img src={imagen} alt={alt} />
      </div>
      <h3>{titleCard}</h3>
      <p>
        {description}
      </p>
    </div>
    </>
  );
}