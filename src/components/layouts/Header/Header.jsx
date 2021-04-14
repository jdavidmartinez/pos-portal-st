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
        <div className="col-xs-4 col-sm-6 col-lg-4 header-content">
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
            Comienza calificando tu HV, nuestros especialistas
            te entregarán un informe sin costo con el porcentaje de
            visibilidad de este, frente a las empresas.
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
        <div className="col-xs-9 col-sm-6 col-lg-8">
          <img src={woman} alt="empleapp woman" className="header-woman" />
        </div>
      </div>

      <div className="row end-xs header-social-networks">
        <SocialNetworks className="col-xs-2" />
      </div>
    </header>

    <header className="header-mobile">
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
        <div className="col-xs-12 header-content">
          <p className="header-content-title">
            Creamos y Evaluamos
          </p>
          <p className="header-content-title">
            tu
            <strong className="header-content-title-strong"> Hoja de Vida</strong>
          </p>
        </div>
        <img src={woman} alt="empleapp woman" className="header-woman" />
        <div className="row">
          <p className="col-xs-12 header-content-text">
            Envía tu CV, nuestros especialistas te entregarán sin costo una calificación
            inicial con retroalimentación del estado en el que se encuentra tu formato frente
            a las empresas y que tanta visibilidad tendrá para la elección de un cargo.
          </p>
          <a
            href="https://"
            target="_blank"
            rel="noopener noreferrer"
            className="col-xs-offset-2 col-xs-6 header-hv-button"
          >
            ¡Empieza Ahora!
          </a>
        </div>
      </div>
    </header>
  </>
);

export default Header;
