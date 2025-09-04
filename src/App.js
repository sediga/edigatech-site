// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SiteLayout from './SiteLayout';

import LandingPage from './LandingPage';
import ProductsPage from './ProductsPage';
import RecruiterPage from './RecruitersPage';
import ConsultingPage from './ConsultingPage';

// (Optional) keep these if you have them:
// import ProductsPage from './ProductsPage';
// import ConsultingPage from './ConsultingPage';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* shared header/footer lives here */}
        <Route element={<SiteLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/recruiters" element={<RecruiterPage />} />
          <Route path="/products" element={<ProductsPage />} /> 
          <Route path="/consulting" element={<ConsultingPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
