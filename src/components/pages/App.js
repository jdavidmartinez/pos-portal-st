import AboutUs from '../layouts/AboutUs';
import Header from '../layouts/Header';
import Caracteristicas from '../layouts/Caracteristicas';
import Servicios from '../layouts/Servicios';
import Empresas from  '../layouts/Empresas';
import Boletin from '../layouts/Boletin'

import '../../assets/css/App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <Caracteristicas />
      <Servicios />
      <Empresas />
      <Boletin />
    </div>
  );
};

export default App;