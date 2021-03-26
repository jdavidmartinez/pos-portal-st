/* AboutUs layout-component */

import './about-us.css';

const AboutUs = () => (
  <>
    <section className="row">
      <h2 className="col-xs-12 h2-titles about-us-title">¿Quiénes somos?</h2>
      <div className="col-xs-12 about-us">
        <div className="col-xs-4">
          <p className="about-us-text">
            EmpleApp es una empresa que Conecta perfiles potenciales de una manera rapida,
            ágil y efectiva, enfocando su metodología en las personas, potencializando el
            perfil laboral e incrementando la visibilidad ante los reclutadores y buscadores
            de empleo y facilita para las empresas la consecución de personal idóneo en menor
            tiempo, mediante una plataforma web la cual permite agilizar y optimizar los procesos
            de perfilación y reclutamiento impactando a mayor número de personas y empresas.
          </p>
          <p className="about-us-text">
            Dicha metodología se realiza mediante un ecosistema que potencializa el perfil laboral
            de los candidatos, acompaña, capacita, entrega información de valor para facilitar la
            toma de decisiones y apoya en la fidelización del recurso humano, realizando un proceso
            de selección de talento humano centrado en las personas. Los servicios ofertados por la
            unidad productiva son los siguientes:
          </p>
        </div>
      </div>
    </section>
  </>
);

export default AboutUs;
