import logo from '../../../assets/img/logo.jpg';
import { FooterLogoStl } from './footerLogo.styled';

export const FooterLogo = () => {
  return (
    <FooterLogoStl>
      <a href="/"><img src={logo} alt='логотип' /></a>
      
    </FooterLogoStl>
  );
};
