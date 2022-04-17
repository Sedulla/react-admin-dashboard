import { Header } from './components/Header';
import { Side } from './components/SideNav';
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
