import styled from 'styled-components';

export const HeaderStl = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  padding: 24px;
  justify-content: center;
  box-shadow: var(--shadow);
`;

export const NavBarStl = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
  .link {
    font-size: 24px;
    color: var(--link);
    transition: color 0.3s linear;
    &:hover {
        color: var(--link-hover)
    }
    &.active {
        color: var(--link-active);
    }
  }
`;

