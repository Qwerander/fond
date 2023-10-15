import { Layout } from '../layout/Layout';
import { FooterStl } from './footer.styled';
import { FooterContacts } from './footerContacts/FooterContacts';
import { FooterLogo } from './footerLogo/FooterLogo';
import { FooterNav } from './footerNav/FooterNav';
import { FooterTitle } from './footerTitle/FooterTitle';
// import stripe from '../../assets/img/stripe.png';

export const Footer = () => {
  return (
    <FooterStl>
      {/* <img className='stripe' src={stripe} alt='Ленточка' /> */}
      <Layout>
        <div className='content'>
          <div className='left'>
            <FooterLogo />
            <FooterTitle />
          </div>
          <div className='right'>
            <FooterNav />
            <FooterContacts />
          </div>
        </div>
        <span className='year'>2023 г.</span>
      </Layout>
    </FooterStl>
  );
};
