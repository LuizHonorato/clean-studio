import styled from 'styled-components';

export const Header = styled.header`
  height: 21px;
  position: relative;
  padding-top: 100px;
`;

export const HeaderContent = styled.div`
  max-width: 980px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    list-style: none;
  }

  ul li {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.5);
    font-family: 'Josefin Sans';
    font-weight: 500;
    margin-left: 40px;
  }

  ul li:first-child {
    margin: 0;
  }
`;
