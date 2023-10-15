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
    gap: 12px;
    .phone {
      font-weight: 600;
      font-size: 14px;
      color: var(--black);
      transition: color 0.3s ease-in-out;
      &:hover {
        color: var(--link);
      }
    }
  }

  @media (max-width: 350px) {
    padding-left: 12px;
  }
`;
