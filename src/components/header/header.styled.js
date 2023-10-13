import styled from 'styled-components';

export const HeaderStl = styled.header`
  position: sticky;
  top: 0;
  padding: 24px;
  box-shadow: var(--shadow);

  .content {
    text-align: center;
    display: flex;
    gap: 12px;
    justify-content: space-between;
    align-items: center;
  }
`;
