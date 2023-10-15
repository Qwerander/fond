import { MenuStl } from './menu.styled';

export const Menu = ({ column = false, gap, align }) => {
  return (
    <MenuStl column={column} gap={gap} align={align}>
      <a href='/'>О фонде</a>
      <a href='/'>Новости</a>
      <a href='/'>Программы фонда</a>
      <a href='/'>Документы</a>
      <a href='/'>Пожертвовать</a>
      <a href='/'>Герои Z</a>
      <a href='/'>Контакты</a>
    </MenuStl>
  );
};
