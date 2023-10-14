import styled from 'styled-components';

export const HeaderTitleStl = styled.div`
  
  > h1 {
    font-size: 24px;
  }

  > span {
    font-size: 12px;
    align-self: flex-start;
  }

  @media (max-width: 490px) {
    grid-row: 1/2;
    grid-column: 1/3;
  }
`;
