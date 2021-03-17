import logo from "../../assets/logos/P1-10.png";
import Hero from "../../assets/img/img_1_all.png";

import "../../assets/css/header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerSection">
        <img src={logo} className="Header-logo" alt="logo" />
        <button className="ingressButton">Ingresar</button>
      </div>
      <div>
        <p className="creamos">Creamos y Evaluamos tu Hoja de Vida</p>
        <img src={Hero} className="Hero" alt="Hero" />
      </div>
    </div>
  );
};

export default Header;
