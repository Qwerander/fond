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

  @media (max-width: 920px) {
    grid-row: 1 / 3; 
  }
  @media (max-width: 490px) {
    grid-row: 2 / 3; 
    grid-column: 1 / 2; 
  }
`;
