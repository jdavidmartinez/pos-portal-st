import { Col, Row } from 'react-bootstrap';

import '../../assets/css/about-us.css';

const AboutUs = () => (
  <Row className="justify-content-center">
    <Col xs={10}>
      <h1 className="about-us-title">Quienes somos</h1>
    </Col>
    <Col xs={10} className="img-bg">
      <div className="about-us-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, quis nullam
          hendrerit orci at penatibus potenti, cursus condimentum porta risus
          morbi sollicitudin.
        </p>
        <p>
          Auctor himenaeos fames egestas commodo non
          ligula tempor class, feugiat cum dignissim arcu bibendum est
          convallis facilisis.
        </p>
      </div>
    </Col>
  </Row>
);

export default AboutUs;
