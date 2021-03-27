/* Companies layout-component */

import './companies.css';

import CompaniesBrandsCard from '../../UI/Cards/CompaniesBrandsCard';
import CompaniesCard from '../../UI/Cards/CompaniesCard';

import atlanticsoftLogo from '../../../assets/img/companies/atlanticsoft.png';
import avtIngenieriaLogo from '../../../assets/img/companies/avt-ingenieria.png';
import camaraComercioLogo from '../../../assets/img/companies/camara-comercio.png';
import companiesImg from '../../../assets/img/companies.png';
import fondoEmprenderLogo from '../../../assets/img/companies/fondo-emprender.png';
import marquezFajardoLogo from '../../../assets/img/companies/marquez-fajardo.png';
import hotelMesonLogo from '../../../assets/img/companies/hotel-meson.png';
import mirusSmartLogo from '../../../assets/img/companies/mirus-smart.png';
import parqueSoftLogo from '../../../assets/img/companies/parquesoft.png';

const Companies = () => (
  <section className="row around-xs companies">
    <div className="col-xs-5">
      <CompaniesBrandsCard
        fondoEmprender={fondoEmprenderLogo}
        camaraComercio={camaraComercioLogo}
        mirusSmart={mirusSmartLogo}
        parqueSoft={parqueSoftLogo}
        avtIngenieria={avtIngenieriaLogo}
        hotelMeson={hotelMesonLogo}
        marquezFajardo={marquezFajardoLogo}
        atlanticsoft={atlanticsoftLogo}
      />
    </div>
    <div className="col-xs-5">
      <CompaniesCard headerImage={companiesImg} />
    </div>
  </section>
);

export default Companies;
