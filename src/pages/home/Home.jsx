import { HomeStl } from './home.styled';
import hero from '../../assets/img/hero.jpg';
import { Button } from '../../components/shared/Button/Button';

export const Home = () => {
  return (
    <HomeStl>
      <img src={hero} alt='' />
      <Button>Кнопка</Button>
    </HomeStl>
  );
};
