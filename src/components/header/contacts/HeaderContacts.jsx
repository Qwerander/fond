import { HeaderContactsStl } from './headerContacts.styled';

export const HeaderContacts = () => {
  return (
    <HeaderContactsStl>
      <p>Контакты:</p>
      <div>
        <a href='tel:+123456789'>+1 234 567 89</a>
        <a href='tel:+987654321'>+9 876 543 21</a>
      </div>
    </HeaderContactsStl>
  );
};
