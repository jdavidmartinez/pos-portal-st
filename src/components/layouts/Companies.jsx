import { Col, Row } from 'react-bootstrap';

import CardCompanies from '../UI/Cards/CardCompanies';
import CardBrandsCompanies from '../UI/Cards/CardBrandsCompanies';
import companiesImg from '../../assets/img/companies.png';
import avtImg from '../../assets/img/avt_Ingenieria.png';
import mesonImg from '../../assets/img/hotel_meson.png';
import marquezImg from '../../assets/img/marquez_Fajardo.png';
import camaraComercioImg from '../../assets/img/camara_comercio_armenia.png';
import fondeEmprenderImg from '../../assets/img/fondo_emprender.png';
import mirusImg from '../../assets/img/miruss_mart_solutions.png';
import parqueSoftImg from '../../assets/img/PS_Corp.png';

import '../../assets/css/companies.css';

const Companies = () => (
  <section>
    <div style={{ display: 'block' }}>
      <Row className="CompanieCard">
        <Col xs={10} md={9} className="">
          <CardBrandsCompanies
            allyImage={camaraComercioImg}
            allyImageTwo={fondeEmprenderImg}
            allyImageThird={mirusImg}
            allyImageFour={parqueSoftImg}
            customImg={avtImg}
            customImgtwo={mesonImg}
            customImgThird={marquezImg}
          />
          <CardCompanies headerImage={companiesImg} />
        </Col>
      </Row>
    </div>
  </section>
);

export default Companies;
