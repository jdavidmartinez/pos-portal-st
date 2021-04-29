/* Home page-component */

import './home.css';

import AboutUs from '../../layouts/AboutUs/AboutUs';
import Bulletin from '../../layouts/Bulletin/Bulletin';
import Companies from '../../layouts/Companies/Companies';
import Features from '../../layouts/Features/Features';
import Footer from '../../layouts/Footer/Footer';
import Header from '../../layouts/Header/Header';
import Services from '../../layouts/Services/Services';
import WhatsAppButton from '../../UI/WhatsAppButton/WhatsAppButton';
import Offers from '../../layouts/Offers/Offers';
import ResponsiveOffers from '../../layouts/ResponsiveOffers/ResponsiveOffers';

const Home = () => (
  <div className="container-fluid home">
    <Header />
    <Offers />
    <AboutUs />
    <Features />
    <Services />
    <ResponsiveOffers />
    <Companies />
    <Bulletin />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Home;
