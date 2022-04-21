import { Header } from './components/header/Header';
import { Side } from './components/sidenav/SideNav';
import { Homepage } from './views/homepage/Homepage';
import { Routes, Route } from 'react-router-dom';
import { UserList } from './views/userList/UserList';
import { SingleUser } from './views/singleUser/SingleUser';
import { NewUser } from './views/newUser/NewUser';
import { ProductList } from './views/product/productList/ProductList';

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
          <Route path="/product/:productId" element />
          <Route path="/product/new" element />
        </Routes>
      </div>
    </>
  );
};
