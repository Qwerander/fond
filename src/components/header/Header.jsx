import { HeaderStl } from './header.styled';
import { HeaderContacts } from './contacts/HeaderContacts';
import { HeaderLogo } from './logo/HeaderLogo';
import { HeaderSocial } from './social/HeaderSocial';
import { HeaderTitle } from './title/HeaderTitle';
import { Layout } from '../layout/Layout';

export const Header = () => {
  return (
    <HeaderStl>
      <Layout>
        <div className='content'>
          <HeaderTitle />
          <HeaderLogo />
          <HeaderContacts />
          <HeaderSocial />
        </div>
      </Layout>
    </HeaderStl>
  );
};
