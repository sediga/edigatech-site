import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import RecruiterPage from './RecruiterPage'; // import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recruiters" element={<RecruiterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
