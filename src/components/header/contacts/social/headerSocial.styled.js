import styled from 'styled-components';

export const HeaderSocialStl = styled.div`
  > svg {
    transition: fill 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      fill: var(--gray);
    }
  }
`;
