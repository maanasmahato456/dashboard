import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Sales from './pages/Sales/Sales';
import Analytics from './pages/Analytics/Analytics';
import Users from './pages/Users/Users';
import ProductForm from './pages/Products/ProductForm';
//import LoginModal from './components/Modals/LoginModal';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/*'>
          <Route path='' index element={<Products />} />
          <Route path='add' element={<ProductForm />} />
          <Route path='update/:id' element={<ProductForm />} />
        </Route>
        <Route path='/users' element={<Users />} />
        <Route path='/sales' element={<Sales />} />
        <Route path='/analytics' element={<Analytics />} />
      </Routes>
    </div>

  )
}

export default App;