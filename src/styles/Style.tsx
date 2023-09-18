import styled from 'styled-components';
import './App.module.scss';

const LogoTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  padding: 8px 0;
`;
const HeaderTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: bold;
  padding: 8px 0;
`;

const Button = styled.button`
  width: 100%;
  background: #f5f5f5;
  color: #c4c4c4;
  border: 1px solid #c4c4c4;
  &:hover {
    background: #3a00e5;
    border-color: #3a00e5;
    color: #fff;
  }
`;

export { LogoTitle, Button, HeaderTitle };
