import { ContactsStl } from './contacts.styled';
import { Layout } from '../../components/layout/Layout';

export const Contacts = () => {
  return (
    // <Layout>
      <ContactsStl>
        <h2>Контакты</h2>
        <p>Благотворительный фонд "Честь и достоинство"</p>
        <p>ИНН 1234567890</p>
        <p>КПП 123456789</p>
        <p>Юридический адрес: 450000, г. Уфа, ул. Первомайская, дом Х </p>
        <p>Фактический адрес: 450000, г. Уфа, ул. Первомайская, дом Х </p>

        <p>Адреса электронной почты:</p>

        <p>fond@example.ru – секретариат, обращения граждан и организаций.</p>

        <p>
          fond@example.ru – юридическая служба, вопросы заключения договоров
          пожертвования.
        </p>

        <p>Телефон:</p>
        <p>8 123 456 78 90 (круглосуточно)</p>
        <p>8 123 456 78 90 (пн-птн: 09:00 - 18:00)</p>
      </ContactsStl>
    // </Layout>
  );
};