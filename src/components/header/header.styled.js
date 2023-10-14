import styled from 'styled-components';

export const HeaderStl = styled.header`
  padding: 24px 0 0;
  box-shadow: var(--shadow);
  background-color: rgba(241, 241, 241, 1);

  .content {
    text-align: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    gap: 12px;
    align-items: center;
  }
  
  @media (max-width: 920px) {
    .content {
      grid-template-columns: 1fr 3fr;

    }
  }
  @media (max-width: 490px) {
    .content {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
