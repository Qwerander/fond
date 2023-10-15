import { HeaderContactsStl } from './headerContacts.styled';
import { HeaderSocial } from './social/HeaderSocial';

export const HeaderContacts = () => {
  return (
    <HeaderContactsStl>
      <div className='tel'>
        <a className='phone' href='tel:+123456789'>+1 234 567 89</a>
        <a a className='phone' href='tel:+987654321'>+9 876 543 21</a>
      </div>
      <HeaderSocial />
    </HeaderContactsStl>
  );
};
