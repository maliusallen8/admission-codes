import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import TuitionFees from './pages/TuitionFees';
import ApplyNow from './pages/ApplyNow';
import Portal from './pages/Portal';
import RegistrationSuccess from './pages/RegistrationSuccess';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tuition" element={<TuitionFees />} />
          <Route path="/apply" element={<ApplyNow />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="/registration-success" element={<RegistrationSuccess />} />
        </Routes>
      </Layout>
    </Router>
  );
}
