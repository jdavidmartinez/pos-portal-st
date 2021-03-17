import logo from '../../assets/logos/P1-10.png';
import Hero from '../../assets/img/img_1_all.png';


import '../../assets/css/header.css'

const Header = () => {
    return (
      <div className="header">
        <div>
            <img src={logo} className="Header-logo" alt="logo" />  
            <button className="ingressButton">Ingresar</button> 
        </div>
        
        <img src={Hero} className="Hero" alt="Hero" />

      
      </div>
    );
  };

  export default Header;