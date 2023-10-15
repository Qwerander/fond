import styled from 'styled-components';

export const FooterStl = styled.footer`
  padding: 24px 96px 48px 0;
  background-color: var(--accent);
  position: relative;

  /* .stripe {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100px);
  } */

  .content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .left {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .right {
      display: flex;
      gap: 24px;
      margin: 0 auto;
    }
  }

  @media (max-width: 768px) {
    .content {
      flex-direction: column;
      gap: 24px;
      .right {
        margin-right: 0;
      }
    }
  }
  @media (max-width: 490px) {
    padding-right: 0;
  }
  @media (max-width: 350px) {
    .content {
      .right {
        margin-left: 0;
        gap: 6px;
      }
    }
  }
`;
