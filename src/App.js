import { Header } from './components/header/Header';
import { Side } from './components//sidenav/SideNav';
import { Homepage } from './views/Homepage';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Header />
        <div className="mt-3 flex">
          <Side />
          <Route path="/" element={<Homepage />} />
        </div>
      </Routes>
    </>
  );
};
