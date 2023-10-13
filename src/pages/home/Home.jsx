import { HomeStl } from './home.styled';
import hero from '../../assets/img/hero.jpg';

export const Home = () => {
  return (
    <HomeStl>
      <img src={hero} alt='' />
    </HomeStl>
  );
};
