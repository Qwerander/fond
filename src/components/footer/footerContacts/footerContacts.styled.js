import styled from 'styled-components';

export const FooterContactsStl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-left: 24px;
  border-left: 1px solid var(--black);
  /* height: 100%;
  align-items: center;
  justify-content: space-between; */
  width: 100%;

  .tel {
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: flex-start;
    justify-content: flex-start;
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

  @media (max-width: 420px) {
    padding-left: 12px;
  }

  @media (max-width: 390px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;
