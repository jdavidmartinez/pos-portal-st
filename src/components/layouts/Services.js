import Card from "../IU/Cards/Card";

import "../../assets/css/services.css";
import {  Container, Row, Col } from "react-bootstrap";

const Services = () => {
  return (
    <div>
      <h1>Quienes Somos</h1>
     <div style={{display:"flex", justifyContent:"space-around" }}>
       <Card />
       <Card />
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
