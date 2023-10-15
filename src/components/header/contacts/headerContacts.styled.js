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
    gap: 6px;  
    .phone {
      display: flex;
      align-items: center;
      font-size: 16px;
      font-weight: 600;
      color: var(--black);
      transition: color 0.3s ease-in-out;
      > svg {
        margin-right: 4px;
        transition: fill 0.3s ease-in-out;
        fill: var(--black);
      }
      &:hover {
        > svg {
          fill: var(--link);
        }
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
