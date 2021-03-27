/* Header layout-component */

import './header.css';

import SocialNetworks from '../../UI/SocialNetworks/SocialNetworks';

import logo from '../../../assets/logos/empleapp-header-logo.png';
import woman from '../../../assets/img/woman.png';

const Header = () => (
  <>
    <header className="header">
      <div className="row between-xs header-top-bar">
        <img src={logo} alt="empleapp logo" className="header-logo" />
        <a
          href="https://"
          target="_blank"
          rel="noopener noreferrer"
          className="header-ingress-button"
        >
          Ingresar
        </a>
      </div>

      <div className="row between-xs header-info">
        <div className="col-xs-4 header-content">
          <p className="header-content-title">
            Creamos
          </p>
          <p className="header-content-title">
            y Evaluamos
          </p>
          <p className="header-content-title">
            tu
            <strong className="header-content-title-strong"> Hoja de Vida</strong>
          </p>
          <p className="header-content-text">
            Envía tu CV, nuestros especialistas te entregarán sin costo una calificación
            inicial con retroalimentación del estado en el que se encuentra tu formato frente
            a las empresas y que tanta visibilidad tendrá para la elección de un cargo.
          </p>
          <a
            href="https://"
            target="_blank"
            rel="noopener noreferrer"
            className="header-hv-button"
          >
            ¡Empieza Ahora!
          </a>
        </div>
        <div className="col-xs-5">
          <img src={woman} alt="empleapp woman" className="header-woman" />
        </div>
      </div>

      <div className="row end-xs header-social-networks">
        <SocialNetworks className="col-xs-2" />
      </div>
    </header>
  </>
);

export default Header;
