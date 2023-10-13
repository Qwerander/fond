import { HeaderStl } from './header.styled';
import { HeaderContacts } from './contacts/HeaderContacts';
import { HeaderLogo } from './logo/HeaderLogo';
import { HeaderSocial } from './social/HeaderSocial';
import { HeaderTitle } from './title/HeaderTitle';

export const Header = () => {
  return (
    <HeaderStl>
      <HeaderTitle />
      <HeaderLogo />
      <HeaderContacts />
      <HeaderSocial />
    </HeaderStl>
  );
};
