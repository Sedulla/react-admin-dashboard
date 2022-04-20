import { Header } from './components/header/Header';
import { Side } from './components//sidenav/SideNav';
import { Homepage } from './views/Homepage';
import { Routes, Route } from 'react-router-dom';
import { UserList } from './views/UserList';

export const App = () => {
  return (
    <>
      <Header />
      <div className="mt-3 flex">
        <Side />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </div>
    </>
  );
};
