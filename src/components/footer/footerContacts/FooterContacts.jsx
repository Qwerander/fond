import { FooterContactsStl } from './footerContacts.styled';
import { FooterSocial } from './social/FooterSocial';

export const FooterContacts = () => {
  return (
    <FooterContactsStl>
      <div className='tel'>
        <a className='phone' href='tel:+123456789'>
          8-234-567-89
        </a>
        <a a className='phone' href='tel:+987654321'>
          8-876-543-21
        </a>
      </div>

      <FooterSocial />
    </FooterContactsStl>
  );
};
