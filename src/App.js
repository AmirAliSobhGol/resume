import React, { Component } from 'react';
import './App.css';
import { Header, Summary, Experience, Skills } from './sections';
import styled from 'styled-components';
import LetterBackground from './images/letter-background.jpg';

const AppContainer = styled.div`
  background-image: url(${LetterBackground});
  width: 100vw;
  height: 100vh;
  padding: 16px;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header />
        <Summary />
        <Experience />
        <Skills />
      </AppContainer>
    );
  }
}

export default App;
