import { Header } from './components/header/Header';
import { Side } from './components//sidenav/SideNav';
import { Homepage } from './views/Homepage';

export const App = () => {
  return (
    <>
      <Header />
      <div className="mt-3 flex">
        <Side />
        <Homepage />
      </div>
    </>
  );
};
