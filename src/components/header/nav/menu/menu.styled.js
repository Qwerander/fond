import styled from 'styled-components';

export const MenuStl = styled.nav`
  margin: 0 auto;
  display: flex;
  gap: ${({ gap }) => (gap ? gap : '36px')};
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  align-items: ${({ align }) => ( align ? align : 'center')};
  justify-content: center;
  background-color: var(--accent);
  > a {
    color: var(--link);
    transition: color 0.3s ease-in-out;
    &:hover {
      color: var(--link-hover);
    }
  }
  
  .active {
    color: var(--link-hover);
    &:hover {
      color: var(--link);
    }
  }

  @media (max-width: 920px) {
    flex-direction: column;
    padding: 12px;
    gap: ${({ gap }) => (gap ? gap : '24px')};
  }
`;
