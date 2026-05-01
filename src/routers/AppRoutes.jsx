import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import WeatherApp from '../Weather/Weather';
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Portfolio" element={<App />} />
        <Route path="/Portfolio/weather" element={<WeatherApp />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;