/* Bulletin layout-component */

import './bulletin.css';

const Bulletin = () => (
  <>
    <section>
      <div className="row center-xs">
        <h2 className="col-xs-12 h2-titles bulletin-title">Boletín</h2>
        <div className="row bulletin">
          <div className="col-xs-12 col-lg-4">
            <h2 className="bulletin-h2">Ingresa</h2>
            <h2 className="bulletin-h2">Tu correo:</h2>
            <p>Para estar informado sobre todos nuestros servicios.</p>
          </div>
          <div className="col-xs-12">
            <div className="row middle-xs">
              <input
                type="email"
                placeholder="Escribe tu correo"
                className="col-xs-12 col-md-7 col-lg-8 bulletin-input"
              />
              <div
                className="col-xs-offset-4 col-xs-8 col-md-offset-0 col-md-4 col-lg-offset-0 col-lg-3 bulletin-button"
              >
                Enviar
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Bulletin;
