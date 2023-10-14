import styled from 'styled-components';

export const HeaderContactsStl = styled.div`
  display: flex;

  height: 100%;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > p {
    font-size: 16px;
    margin-bottom: 24px;
    text-align: center;
  }

  .tel {
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: flex-start;
    justify-content: space-evenly;
    > a {
        font-weight: 600;
    }
  }

  /* @media (max-width: 650px) {
    .tel {
      flex-direction: row;
      gap: 24px;
      align-items: center;
    }
  } */
  @media (max-width: 490px) {
    grid-row: 2/3;
    grid-column: 2/3;
      flex-direction: column;
  }
`;
