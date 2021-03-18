import { Card } from "react-bootstrap";

import "../../../assets/css/card.css";
import servicio1 from "../../../assets/img/servicio1.png";
import P_Laboral from "../../../assets/img/P_Laboral.svg";

const cardType = () => {
  return (
    <Card
      style={{
        width: "31rem",
        backgroundColor: "#ece6e8",
        border: "1px solid #eee",
        boxShadow: "0 2px 15px #ccc",
        borderRadius:"36px"
      }}
    >
      <Card.Img variant="top" src={servicio1} style={{width:"100%"}} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, quis nullam
          hendrerit orci at penatibus potenti, cursus condimentum porta risus
          morbi sollicitudin. Auctor himenaeos fames egestas commodo non ligula
          tempor class, feugiat cum dignissim arcu bibendum est convallis
          facilisis
        </Card.Text>
        <Card.Img variant="top" src={P_Laboral} style={{width:"50%"}} className="icon-image" />
      </Card.Body>
    </Card>
  );
};
export default cardType;
