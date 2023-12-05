import { HomeStl } from './home.styled';
import hero from '../../assets/img/hero.jpg';
import { Button } from '../../components/shared/Button/Button';
import { Loader } from '../../components/shared/Loader/Loader';
import { Modal } from '../../components/shared/Modal/Modal';
import { useState } from 'react';

export const Home = () => {
  const [isOpen, onToggleModal] = useState(false);

  const handleSwitchModal = () => {
    onToggleModal((prev) => !prev);
  };

  return (
    <HomeStl>
      <img src={hero} alt='' />
      <Button primary onClick={handleSwitchModal}>Пожертвовать</Button>
      <Button className="clear">Clear</Button>
      <Button className="clearInverted">Clear Inverted</Button>
      <Button className="outline">Outline</Button>
      <Button className="background">Background</Button>
      <Button className="backgroundInverted">Background Inverted</Button>
      <Button className="square">Square</Button>
      <Modal isOpen={isOpen} onClose={onToggleModal}>
        <Loader />
      </Modal>
    </HomeStl>
  );
};
