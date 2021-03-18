
import hero from "../../assets/img/img_1_all.png";
import logo from "../../assets/logos/P1-10.png";

import "../../assets/css/header.css";

const Header = () => {
  return (
    <header>
      <section className="header">
        <div className="bar-header">
          <img src={logo} alt="logo" className="logo-header" />
          <button className="main-button">Ingresar</button>
        </div>
      </section>

      <section className ="content-header">
        <div>
          <h1 className="cv-text">Creamos y Evaluamos tu Hoja de Vida</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <button className="main-button">Enviar HV</button>
        </div>
        <img src={hero} alt="hero" className="hero" />
      </section>
    </header>
  );
};

export default Header;
