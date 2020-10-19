import styled from 'styled-components';

export const Container = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  svg {
    width: 480px;
    height: 380px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  max-width: 300px;

  div {
    h1 {
      font-size: 50px;
      font-weight: 500;
      font-family: 'Josefin Sans';
      line-height: 62px;

      span {
        color: #3f69ff;
      }
    }

    p {
      font-size: 14px;
      font-family: Montserrat, Arial, Helvetica, sans-serif;
      line-height: 30px;
      text-align: left;
      color: rgba(0, 0, 0, 0.6);
      margin-top: 60px;
    }
  }
`;
