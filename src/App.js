// import { Routes, Route, Outlet, Link } from "react-router-dom";

import './App.scss';
import { Featured } from './components/Featured';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Info } from './components/Info';
import { Map } from './components/Map';
import { RecentlyFunded } from './components/RecentlyFunded';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes> */}
      <Header />
      <Hero />
      <Info />
      <Featured />
      <RecentlyFunded />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
