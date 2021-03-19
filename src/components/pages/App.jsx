import AboutUs from '../layouts/AboutUs';
import Bulletin from '../layouts/Bulletin';
import Companies from '../layouts/Companies';
import Features from '../layouts/Features';
import Header from '../layouts/Header';
import Services from '../layouts/Services';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/App.css';

const App = () => (
  <div className="App">
    <Header />
    <AboutUs />
    <Features />
    <Services />
    <Companies />
    <Bulletin />
  </div>
);

export default App;
