import AboutUs from '../layouts/AboutUs';
import Header from '../layouts/Header';
import Features from '../layouts/Features';
import Services from '../layouts/Services';
import Companies from '../layouts/Companies';
import Bulletin from '../layouts/Bulletin';

import '../../assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
