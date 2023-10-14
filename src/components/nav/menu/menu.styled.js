import styled from 'styled-components';

export const MenuStl = styled.nav`
  margin: 0 auto;
  display: flex;
  gap: 36px;
  align-items: center;
  justify-content: center;
  background-color: #3b8e45;
  > a {
    color: #ffca3a;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: #ffdf7e;
    }
  }

  @media (max-width: 920px) {
    flex-direction: column;
    padding: 12px;
    gap: 24px;
  }
`;
