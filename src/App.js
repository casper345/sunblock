import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter, Route } from 'react-router-dom'

// TODO: shouldnt need index
import HomeScreen from './screens/HomeScreen/index'
import DesignScreen from './screens/DesignScreen'

import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'

const Container = styled.div`
`;

const Main = styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <NavigationBar />
          <Main>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/design-your-solar" component={DesignScreen} />
          </Main>
          <Footer />
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
