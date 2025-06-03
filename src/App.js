import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import RecruiterPage from './RecruiterPage'; // import
import TrainingPage from './TrainingPage';
import FreelancingPage from './FreelancingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/recruiters" element={<RecruiterPage />} />
        <Route path="/freelancing" element={<FreelancingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
