import styled from 'styled-components';

export const HeaderContactsStl = styled.div`
  display: flex;

  height: 100%;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .tel {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    .phone {
      font-weight: 600;
      color: var(--black);
      transition: color 0.3s ease-in-out;
      &:hover {
        color: var(--link);
      }
    }
  }

  @media (max-width: 490px) {
    grid-row: 1/2;
    grid-column: 2/3;
    flex-direction: column;
  }
`;
