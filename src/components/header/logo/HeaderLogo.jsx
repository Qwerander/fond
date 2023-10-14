import { HeaderLogoStl } from './headerLogo.styled';
import logo from '../../../assets/img/logo.jpg';

export const HeaderLogo = () => {
  return (
    <HeaderLogoStl>
      <a href="/"><img src={logo} alt='логотип' /></a>
    
    </HeaderLogoStl>
  );
};
