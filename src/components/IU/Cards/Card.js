import { Card } from "react-bootstrap";

import servicio1 from "../../../assets/img/servicio1.png";
import P_Laboral from "../../../assets/img/P_Laboral.svg";

const cardType = () => {
  return (
    <Card  style={{ width: "18rem" }}>
      <Card.Img variant="top" src={servicio1} />
      <Card.Body>
        
        <Card.ImgOverlay>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipiscing elit, quis nullam
            hendrerit orci at penatibus potenti, cursus condimentum porta risus
            morbi sollicitudin. Auctor himenaeos fames egestas commodo non
            ligula tempor class, feugiat cum dignissim arcu bibendum est
            convallis facilisis
          </Card.Text>
        </Card.ImgOverlay>
      </Card.Body>
    </Card>
  );
};
export default cardType;
