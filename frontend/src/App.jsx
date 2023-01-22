import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Sales from './pages/Sales/Sales';
import Users from './pages/Users/Users';
import AddForm from './pages/Products/Forms/AddForm';
import UpdateForm from './pages/Products/Forms/UpdateForm';

//import LoginModal from './components/Modals/LoginModal';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/*'>
          <Route path='' index element={<Products />} />
          <Route path='add' element={<AddForm />} />
          <Route path='update/:id' element={<UpdateForm />} />
        </Route>
        <Route path='/users' element={<Users />} />
        <Route path='/sales' element={<Sales />} />
      </Routes>
    </div>

  )
}

export default App;