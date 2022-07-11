import './App.scss';
import Logo from './assets/image/logo.svg';

import { Featured } from './components/Featured';
import { Hero } from './components/Hero';
import { Info } from './components/Info';
import { Map } from './components/Map';
import { RecentlyFunded } from './components/RecentlyFunded';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="header-holder">
            <div className="logo">
              <img src={Logo} alt="img" />
            </div>
            <ul className="nav-menu">
              <li>ABOUT US</li>
              <li>LOAN PROGRAMS</li>
              <li>SERVICES</li>
              <li>PARTNERS</li>
              <li>CONTACT US</li>
            </ul>
            <button type="button" className="btn">
              Get Started
            </button>
          </div>
        </div>
      </header>
      <Hero />
      <Info />
      <Featured />
      <RecentlyFunded />
      <Map />
    </div>
  );
}

export default App;
