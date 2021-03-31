/* AboutUs layout-component */

import './about-us.css';

const AboutUs = () => (
  <>
    <section>
      <div className="row">
        <h2 className="col-xs-12 h2-titles about-us-title">¿Quiénes somos?</h2>
      </div>

      <div className="row center-xs">
        <div className="row about-us">
          <div className="col-xs-12 col-sm-6 col-lg-5">
            <p className="about-us-text">
              EmpleApp es una empresa que Conecta perfiles potenciales de una manera rapida,
              ágil y efectiva, enfocando su metodología en las personas, potencializando el
              perfil laboral e incrementando la visibilidad ante los reclutadores/buscadores
              de empleo y facilita para las empresas la consecución de personal idóneo en menor
              tiempo.
            </p>
            <p className="about-us-text">
              Dicha metodología se realiza mediante un ecosistema que potencializa el perfil laboral
              de los candidatos, acompaña, capacita, entrega información de valor para facilitar la
              toma de decisiones y apoya en la fidelización del recurso humano, realizando un proceso
              de selección de talento humano centrado en las personas.
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default AboutUs;
