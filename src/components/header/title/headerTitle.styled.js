import styled from 'styled-components';

export const HeaderTitleStl = styled.div`
  
  > h1 {
    font-size: 24px;
    color: var(--black);
  }
  
  > h3 {
    color: var(--black);
  }
  
  > span {
    font-size: 12px;
    align-self: flex-start;
    color: var(--black);
  }

  @media (max-width: 490px) {
    grid-row: 2/3;
    grid-column: 1/3;
  }
`;
