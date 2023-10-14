import { useResize } from '../../hooks/useRessize';
import { Layout } from '../layout/Layout';
import { Menu } from './menu/Menu';
import { MobileMenu } from './mobileMenu/MobileMenu';
import { NavStl } from './navBar.styled';

export const NavBar = () => {
  const resize920 = useResize(920);

  return (
    <NavStl>
      <Layout>{resize920 ? <Menu /> : <MobileMenu />}</Layout>
    </NavStl>
  );
};
