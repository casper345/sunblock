import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import DesignScreen from './screens/DesignScreen';
import ContactScreen from './screens/ContactScreen';

import NavigationBar from './components/NavigationBar';

const Container = styled.div`

`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <NavigationBar />
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/design-your-solar" component={DesignScreen} />
          <Route exact path="/contact-us" component={ContactScreen} />
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
