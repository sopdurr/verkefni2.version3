import './App.css';
import styled from 'styled-components';
import { Header, Input } from './components';

const StyledFooter = styled.footer`
  color: palevioletred;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const text = 'Copyright © 2021 siggi Inc. All Rights Reserved.';

const App = () => {
  return (
    <div>
      <Header text='Input App v.3' />
      <Input />
      <StyledFooter>{text}</StyledFooter>
    </div>
  );
};

export default App;
