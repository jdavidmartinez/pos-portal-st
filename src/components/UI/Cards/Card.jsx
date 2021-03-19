import { Card } from 'react-bootstrap';

import '../../../assets/css/card.css';
// import servicio1 from "../../../assets/img/servicio1.png";
import P_Laboral from '../../../assets/img/P_Laboral.svg';

const cardType = (props) => (
  <Card
    style={{
      width: '31rem',
      backgroundColor: '#f2f2f2',
      border: '1px solid #eee',
      boxShadow: '0 2px 15px #ccc',
      borderRadius: '36px'
    }}
  >
    <Card.Img variant="top" src={props.headerImage} style={{ width: '100%' }} />
    <Card.Body>
      <div
        style={{
          padding: '30px 0 0 25px',
          color: '#760543',
          fontWeight: 'bold'
        }}
      >
        <Card.Title>{props.title}</Card.Title>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '20px 25px 30px 25px ',
          boxSizing: 'border-box'
        }}
      >
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, quis nullam
          hendrerit orci at penatibus potenti, cursus condimentum porta risus
          morbi sollicitudin. Auctor himenaeos fames egestas commodo non
          ligula tempor class, feugiat cum dignissim arcu bibendum est
          convallis facilisis
        </Card.Text>
        <Card.Img
          src={P_Laboral}
          style={{ width: '20%', paddingLeft: '40px' }}
          className="icon-image"
        />
      </div>
    </Card.Body>
  </Card>
);
export default cardType;
