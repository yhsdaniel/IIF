import './css/style.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ListCart from './pages/container/ListCart';
import DetailProduct from './pages/DetailProduct';
import Periperal from './pages/IT-Periperal/Periperal';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`detail-product`} element={<DetailProduct />} />
          <Route path='Cart' element={<ListCart />} />
          <Route path='it-periperal' element={<Periperal />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;