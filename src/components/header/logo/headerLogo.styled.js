import styled from 'styled-components';

export const HeaderLogoStl = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  border: 1px solid black;
  overflow: hidden; /* чтобы обрезать SVG, если оно выходит за границы div */

  > img {
    max-width: 100%; /* чтобы SVG полностью заполнило доступное пространство внутри div */
    height: auto; /* чтобы сохранить пропорции SVG */
  }
`;
