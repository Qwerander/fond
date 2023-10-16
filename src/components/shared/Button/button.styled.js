import styled from 'styled-components';

export const ButtonStl = styled.button`
    cursor: pointer;
    color: var(--accent);
    padding: 6px 15px;

  .clear {
    padding: 0;
    border: none;
    background: none;
    outline: none;
  }

  .clearInverted {
    padding: 0;
    border: none;
    background: none;
    outline: none;
    color: var(--inverted-primary-color);
  }

  .outline {
    border: 1px solid var(--primary-color);
    color: var(--primary-color);
    background: none;
  }

  .background {
    background: var(--bg-color);
    color: var(--primary-color);
    border: none;
  }

  .backgroundInverted {
    background: var(--inverted-bg-color);
    color: var(--inverted-primary-color);
    border: none;
  }

  .square {
    padding: 0;
  }

  .square.size_m {
    width: var(--font-line-m);
    height: var(--font-line-m);
  }

  .square.size_l {
    width: var(--font-line-l);
    height: var(--font-line-l);
  }

  .square.size_xl {
    width: var(--font-line-xl);
    height: var(--font-line-xl);
  }

  .size_m {
    font: var(--font-m);
  }

  .size_l {
    font: var(--font-l);
  }

  .size_xl {
    font: var(--font-xl);
  }
`;
