import us from "../../assets/img/Cajon.png";

import "../../assets/css/about-us.css";
import { Container } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Container >
      <section className="about-us">
        <div>
          <h1>Quienes somos</h1>
        </div>
      </section>
      <section className="imgBackg">
        <div className="content-aboutus">
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit, quis nullam
            hendrerit orci at penatibus potenti, cursus condimentum porta risus
            morbi sollicitudin. Auctor himenaeos fames egestas commodo non
            ligula tempor class, feugiat cum dignissim arcu bibendum est
            convallis facilisis
          </p>
          
        </div>
      </section>
    </Container>
  );
};

export default AboutUs;
//<img src={us} alt="Quienes somos" />