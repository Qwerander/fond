import { NavLink } from 'react-router-dom';
import { MenuStl } from './menu.styled';

export const Menu = ({ column = false, gap, align }) => {
  return (
    <MenuStl column={column} gap={gap} align={align}>
      <NavLink to='/'>О фонде</NavLink>
      <NavLink to='/news'>Новости</NavLink>
      <NavLink to='/programs'>Программы фонда</NavLink>
      <NavLink to='/documents'>Документы</NavLink>
      <NavLink to='/donate'>Пожертвовать</NavLink>
      <NavLink to='/heroes'>Герои Z</NavLink>
      <NavLink to='contacts'>Контакты</NavLink>
    </MenuStl>
  );
};
