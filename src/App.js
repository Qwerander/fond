import { Outlet, useLocation } from 'react-router-dom';

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';


export const App = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      {pathname === '/' ? <></> : <Outlet />}
      <Footer />
    </>
  );
};
 