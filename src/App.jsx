import './css/style.min.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Periperal from './pages/IT-Periperal/Periperal';
import Request from './pages/Request/Request';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='it-periperal' element={<Periperal />} />
          <Route path="/request" element={<Request />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;