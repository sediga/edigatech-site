import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import ProductsPage from './ProductsPage'; // import
import ConsultingPage from './ConsultingPage'; // import
import RecruitersPage from './RecruitersPage'; // import


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductsPage />} />
       <Route path="/consulting" element={<ConsultingPage />} />
       <Route path="/recruiters" element={<RecruitersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
