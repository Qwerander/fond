import { HeaderStl } from './header.styled';
import { HeaderContacts } from './contacts/HeaderContacts';
import { HeaderLogo } from './logo/HeaderLogo';
import { HeaderTitle } from './title/HeaderTitle';
import { Layout } from '../layout/Layout';
import { NavBar } from './nav/NavBar';

export const Header = () => {

  return (
    <HeaderStl>
      <Layout>
        <div className='content'>
          <HeaderTitle />
          <HeaderLogo />
          <HeaderContacts />
        </div>
      </Layout>
      <NavBar />
    </HeaderStl>
  );
};
