/* Bulletin layout-component */

import './bulletin.css';

const Bulletin = () => (
  <>
    <section>
      <div className="row center-xs">
        <h2 className="col-xs-12 h2-titles bulletin-title">Boletín</h2>
        <div className="row bulletin">
          <div className="col-xs-4">
            <h2 className="bulletin-h2">Ingresa</h2>
            <h2 className="bulletin-h2">Tu correo:</h2>
            <p>Para estar informado sobre todos nuestros servicios.</p>
          </div>
          <div className="col-xs-12">
            <div className="row middle-xs">
              <input type="email" placeholder="Escribe tu correo" className="col-xs-8 bulletin-input" />
              <div className="col-xs-3 bulletin-button">Enviar</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Bulletin;
