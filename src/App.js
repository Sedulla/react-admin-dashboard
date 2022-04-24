import { Header } from './components/header/Header';
import { Side } from './components/sidenav/SideNav';
import { Homepage } from './views/homepage/Homepage';
import { Routes, Route } from 'react-router-dom';
import { UserList } from './views/user/userList/UserList';
import { SingleUser } from './views/user/singleUser/SingleUser';
import { NewUser } from './views/user/newUser/NewUser';
import { ProductList } from './views/product/productList/ProductList';
import { SingleProduct } from './views/product/singleProduct/SingleProduct';
import { NewProduct } from './views/product/newProduct/NewProduct';

export const App = () => {
  return (
    <>
      <Header />
      <div className="mt-3 flex">
        <Side />
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<SingleUser />} />
          <Route path="/user/new" element={<NewUser />} />

          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<SingleProduct />} />
          <Route path="/product/new" element={<NewProduct />} />
        </Routes>
      </div>
    </>
  );
};
