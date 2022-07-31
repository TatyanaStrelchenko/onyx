import { Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { FeaturedLoanPrograms } from './pages/FeaturedLoanPrograms';
import { Services } from './pages/Services';
import { Equity } from './pages/Equity';
import { Partners } from './pages/Partners';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/loan-programs" element={<FeaturedLoanPrograms />} />
        <Route path="/services" element={<Services />} />
        <Route path="/equity" element={<Equity />} />
        <Route path="/partners" element={<Partners />} />
      </Routes>
    </div>
  );
}

export default App;
