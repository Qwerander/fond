import { FooterSocialStl } from './footerSocial.styled';
import { ReactComponent as Telegram } from '../../../../assets/icons/telegram.svg';
import { ReactComponent as Vk } from '../../../../assets/icons/vk.svg';

export const FooterSocial = () => {
  return (
    <FooterSocialStl>
      <Telegram />
      <Vk />
    </FooterSocialStl>
  );
};
