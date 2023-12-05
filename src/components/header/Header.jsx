import { HeaderStl } from './header.styled';
import { HeaderContacts } from './contacts/HeaderContacts';
import { HeaderLogo } from './logo/HeaderLogo';
import { HeaderTitle } from './title/HeaderTitle';
import { Layout } from '../layout/Layout';
import { NavBar } from './nav/NavBar';
import { useNavigate } from 'react-router-dom';

// WebMoneyLoginButton.js


const WebMoneyLoginButton = () => {
  const navigate = useNavigate();

  const handleWebMoneyLogin = () => {
    // Здесь вы можете сформировать URL для перенаправления на сайт WebMoney.
    // Замените YOUR_REDIRECT_URL на фактический URL вашего приложения, куда WebMoney должен вернуть пользователя после аутентификации.
    const redirectUrl = 'https://login.wmtransfer.com/GateKeeper.aspx?RID=A94705CE-E5BB-41EF-B9B9-B0CF00CC5368';
  
    
    // Перенаправление на сайт WebMoney
    window.location.href = redirectUrl;
  };
  const btn = window.webmoney
        .widgets()
        .button.create({
          data: {
            amount: 500,
            purse: 'F381242476693',
            desc: 'Тестовый товар',
            paymentType: 'wm',
          },
          style: {
            theme: 'wm',
            showAmount: true,
            titleNum: 1,
            title: '',
            design: 'skeuomorph',
          },
          lang: 'ru',
        })
        .on('paymentComplete', function (data) {
          /* your code */
        })
        .mount('wm-widget');

  return 
};




export const Header = () => {

  return (
    <HeaderStl>
      <Layout>
        <div className='content'>
          <HeaderTitle />
          <HeaderLogo />
          <HeaderContacts />
         <WebMoneyLoginButton />
        </div>
      </Layout>
      <NavBar />
    </HeaderStl>
  );
};
