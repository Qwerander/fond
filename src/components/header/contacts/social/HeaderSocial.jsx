import { HeaderSocialStl } from './headerSocial.styled';
import { ReactComponent as Telegram } from '../../../../assets/icons/telegram.svg';
import { ReactComponent as Vk } from '../../../../assets/icons/vk.svg';

export const HeaderSocial = () => {
  return (
    <HeaderSocialStl>
      <Telegram />
      <Vk />
    </HeaderSocialStl>
  );
};
