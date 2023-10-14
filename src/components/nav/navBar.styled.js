import styled from 'styled-components';

export const NavStl = styled.div`
padding: 24px;
  background-color: #3B8E45;
  .nav {
    margin: 0 auto;
    display: flex;
    gap: 36px;
    align-items: center;
    justify-content: center;
    > a  {
     color: #FFCA3A;
     transition: color 0.3s ease-in-out;
     &:hover {
       color: #FFDF7E;
     }
   }
  }
`;
