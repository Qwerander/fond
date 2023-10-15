import styled from 'styled-components';

export const FooterSocialStl = styled.div`
  > svg {
    fill: var(--link);
    transition: fill 0.3s ease-in-out;
    cursor: pointer;


    &:hover {
      fill: var(--link-hover);
    }
  }
`;
