import styled from 'styled-components';

export const FooterLogoStl = styled.div`
  position: relative;
  width: 62px;
  height: 62px;
  border-radius: 100%;
  border: 1px solid var(--black);
  overflow: hidden; /* чтобы обрезать SVG, если оно выходит за границы div */
  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--link);
    opacity: 0.22;
  }

  > img {
    max-width: 100%; /* чтобы SVG полностью заполнило доступное пространство внутри div */
    height: auto; /* чтобы сохранить пропорции SVG */
  }

`;
