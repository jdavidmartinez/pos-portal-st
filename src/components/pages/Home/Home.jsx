/* Home page-component */

import './home.css';

import AboutUs from '../../layouts/AboutUs/AboutUs';
import Bulletin from '../../layouts/Bulletin/Bulletin';
import Companies from '../../layouts/Companies/Companies';
import Features from '../../layouts/Features/Features';
import Footer from '../../layouts/Footer/Footer';
import Header from '../../layouts/Header/Header';
import Services from '../../layouts/Services/Services';
import WhatsAppButton from '../../UI/WhatsAppButton';

const Home = () => (
  <div className="container-fluid home">
    <Header />
    <AboutUs />
    <Features />
    <Services />
    <Companies />
    <Bulletin />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Home;
