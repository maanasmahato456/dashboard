import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Sales from './pages/Sales/Sales';
import Analytics from './pages/Analytics/Analytics';
import Users from './pages/Users/Users';
//import LoginModal from './components/Modals/LoginModal';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/users' element={<Users />} />
        <Route path='/sales' element={<Sales />} />
        <Route path='/analytics' element={<Analytics />} />
      </Routes>
    </div>

  )
}

export default App;