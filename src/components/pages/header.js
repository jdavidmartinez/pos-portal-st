import logo from "../../assets/logos/P1-10.png";
import Hero from "../../assets/img/img_1_all.png";

import "../../assets/css/header.css";

const Header = () => {
  return (
    <header>
    <section className="header">
      <div className="headerSection">
        <img src={logo} className="Header-logo" alt="logo" />
        <button className="ingressButton">Ingresar</button>
      </div>
      </section>

      <div className ="header2">
        <h1 className="creamos">Creamos y Evaluamos tu Hoja de Vida</h1>
        <img src={Hero} className="Hero" alt="Hero" />
      </div>
      </header>
      );
  
};

export default Header;
