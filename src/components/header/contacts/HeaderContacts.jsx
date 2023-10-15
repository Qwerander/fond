import { HeaderContactsStl } from './headerContacts.styled';
import { HeaderSocial } from './social/HeaderSocial';
import { ReactComponent as Call } from '../../../assets/icons/call.svg';

export const HeaderContacts = () => {
  return (
    <HeaderContactsStl>
      <div className='tel'>
        <a className='phone' href='tel:+123456789'>
          <Call />8-234-567-89
        </a>
        <a a className='phone' href='tel:+987654321'>
          <Call />8-876-543-21
        </a>
      </div>
      <HeaderSocial />
    </HeaderContactsStl>
  );
};
