import { HeaderStl } from './header.styled';
import { HeaderContacts } from './contacts/HeaderContacts';
import { HeaderLogo } from './logo/HeaderLogo';
import { HeaderTitle } from './title/HeaderTitle';
import { Layout } from '../layout/Layout';
import { NavBar } from './nav/NavBar';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  // https://login.wmtransfer.com/GateKeeper.aspx?RID=8A3376EF-19B9-43ED-9EEB-B0CF00C057B0
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('login.wmtransfer.com/GateKeeper.aspx?RID=8A3376EF-19B9-43ED-9EEB-B0CF00C057B0')
  }
  return (
    <HeaderStl>
      <Layout>
        <div className='content'>
          <HeaderTitle />
          <HeaderLogo />
          <HeaderContacts />
          <a href='https://login.wmtransfer.com/GateKeeper.aspx?RID=8A3376EF-19B9-43ED-9EEB-B0CF00C057B0'>Вход</a>
        </div>
      </Layout>
      <NavBar />
    </HeaderStl>
  );
};
