import img from '../../assets/img/home-hero.png';
import logo from '../../assets/logos/logo.svg';

import '../../assets/css/App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <img src={img} alt="" />
      </header>
    </div>
  );
};

export default App;
