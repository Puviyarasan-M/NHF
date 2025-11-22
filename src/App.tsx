
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import HospitalDetailPage from './pages/HospitalDetailPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hospital/:id" element={<HospitalDetailPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
