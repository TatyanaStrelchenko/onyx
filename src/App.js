import { Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { FeaturedLoanPrograms } from './pages/FeaturedLoanPrograms';
import { Services } from './pages/Services';
import { Equity } from './pages/Equity';
import { Debt } from './pages/Debt';
import { Investment } from './pages/Investment';
import { Advisory } from './pages/Advisory';
import { Partners } from './pages/Partners';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/loan-programs" element={<FeaturedLoanPrograms />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/equity" element={<Equity />} />
        <Route path="/services/debt" element={<Debt />} />
        <Route path="/services/investment" element={<Investment />} />
        <Route path="/services/advisory" element={<Advisory />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </div>
  );
}

export default App;
