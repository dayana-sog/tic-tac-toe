import styled from 'styled-components';

export const Container = styled.div`
  
  .wrapper {
    border-radius: 10px;
    width: 550px;
    height: 550px;
    margin: 0 auto;
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);

    @media (max-width: 650px) {
      width: 350px;
      height: 350px;
      margin: 0 auto;
    }
  }

  
`;


