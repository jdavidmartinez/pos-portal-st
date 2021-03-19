import "../../../assets/css/features.css";     

export default function Box ( { imagen, alt, title, description } ) {
  return(
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
  );
}