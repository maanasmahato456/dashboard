import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Sales from './pages/Sales';
import Analytics from './pages/Analytics';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/sales' element={<Sales />} />
      <Route path='/analytics' element={<Analytics />} />
    </Routes>
  )
}

export default App;