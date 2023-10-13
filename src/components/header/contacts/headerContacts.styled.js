import styled from 'styled-components';

export const HeaderContactsStl = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: flex-start;
  justify-content: space-between;

  > p {
    font-size: 16px;
    margin-bottom: 24px;
    text-align: center;
  }

  > div {
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: flex-start;
    justify-content: space-between;
    > a {
        font-weight: 600;
    }
  }

`;
