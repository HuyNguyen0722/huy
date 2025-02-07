import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Admin, Homes, Login, Shop, Products, User } from './pages';


function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<Shop />} />
          <Route path='/admin'>
            <Route index element={<Admin />} />
            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/user" element={<User />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
