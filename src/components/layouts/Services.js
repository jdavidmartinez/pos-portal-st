

import imgServ1 from "../../assets/img/servicio1.png";
import pLaboral  from "../../assets/img/P_Laboral.svg";


import "../../assets/css/services.css";

const Services = () => {
  return (
    <section className="services" >
      <section className="services">
        <h1 className="services-title">Servicios</h1>
      </section>

      <section className="box1">
        <img src={imgServ1} alt="Perfil Laboral" className="img-service" />
        <h2>Perfil Laboral:</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, quis nullam
          hendrerit orci at penatibus potenti, cursus condimentum porta risus
          morbi sollicitudin. Auctor himenaeos fames egestas commodo non ligula
          tempor class, feugiat cum dignissim arcu bibendum est convallis
          facilisis
        </p>
        <img src={pLaboral} className="img-icon"/>
      </section>
      </section>
  );
};

export default Services;
