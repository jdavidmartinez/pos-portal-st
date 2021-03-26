/* Home page-component */

import AboutUs from '../../layouts/AboutUs/AboutUs';
// import Bulletin from '../layouts/Bulletin';
import Companies from '../../layouts/Companies/Companies';
import Features from '../../layouts/Features/Features';
import Header from '../../layouts/Header/Header';
import Services from '../../layouts/Services/Services';
//
// import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

const Home = () => (
  <div className="container-fluid home">
    <Header />
    <AboutUs />
    <Features />
    <Services />
    <Companies />
    {/* <Bulletin /> */}
  </div>
);

export default Home;
