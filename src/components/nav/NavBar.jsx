import { Layout } from '../layout/Layout';
import { NavStl } from './navBar.styled';

export const NavBar = () => {
  return (
    <NavStl>
      <Layout>
        <nav className='nav'>
          <a href='/'>О фонде</a>
          <a href='/'>Новости</a>
          <a href='/'>Программы фонда</a>
          <a href='/'>Документы</a>
          <a href='/'>Пожертвовать</a>
          <a href='/'>Герои Z</a>
          <a href='/'>Контакты</a>
        </nav>
      </Layout>
    </NavStl>
  );
};
