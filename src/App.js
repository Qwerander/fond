import { Outlet, useLocation } from 'react-router-dom';

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Home } from './pages/home/Home';
import { Layout } from './components/layout/Layout';
import { NavBar } from './components/nav/NavBar';

export const App = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      <NavBar />
     {pathname === '/' ? <Home /> : <Outlet />}
      <Footer />
    </>
  );
};
