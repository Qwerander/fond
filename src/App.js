import { Outlet, useLocation } from 'react-router-dom';

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Home } from './pages/home/Home';
import { Layout } from './components/layout/Layout';

export const App = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      <Layout>{pathname === '/' ? <Home /> : <Outlet />}</Layout>
      <Footer />
    </>
  );
};
