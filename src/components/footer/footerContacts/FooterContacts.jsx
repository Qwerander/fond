import { FooterContactsStl } from './footerContacts.styled';
import { FooterSocial } from './social/FooterSocial';
import { ReactComponent as Call } from '../../../assets/icons/call.svg';

export const FooterContacts = () => {
  return (
    <FooterContactsStl>
      <div className='tel'>
        <a className='phone' href='tel:+123456789'>
          <Call /> 8-234-567-89-12
        </a>
        <a a className='phone' href='tel:+987654321'>
          <Call /> 8-876-543-21-12
        </a>
      </div>
      <FooterSocial />
    </FooterContactsStl>
  );
};
