import { HeaderLogoStl } from './headerLogo.styled';
import { ReactComponent as Logo } from '../../../assets/img/logo.svg';
import logo from '../../../assets/img/logo.svg';

export const HeaderLogo = () => {
  return (
    <HeaderLogoStl>
      <a href="/"><img src={logo} alt='логотип' /></a>
    
    </HeaderLogoStl>
  );
};
