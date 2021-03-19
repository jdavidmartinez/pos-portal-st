import Card from "../IU/Cards/Card";

import imgServiceCard1 from "../../assets/img/imgServiceCard1.png";
import imgServiceCard2 from "../../assets/img/Talento_v1.png";
import "../../assets/css/services.css";
import {  Container, Row, Col } from "react-bootstrap";

const Services = () => {
  return (
    <div>
      <h1>Quienes Somos</h1>
     <div style={{display:"flex", justifyContent:"space-around" }}>
       <Card imgServiceCard1={imgServiceCard1} />
       <Card imgServiceCard2={imgServiceCard2} />
       
    </div> 
    <p>

    </p>
    <div style={{display:"flex", justifyContent:"space-around" }}>
       <Card />
       <Card />
    </div> 
    </div>
  );
};

export default Services;
