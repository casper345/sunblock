import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter, Route } from 'react-router-dom'

// TODO: shouldnt need index
import HomeScreen from './screens/HomeScreen/index'
import DesignScreen from './screens/DesignScreen'
import ContactScreen from './screens/ContactScreen'

import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'

const Container = styled.div``;

const Main = styled.div`
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
            <Route exact path="/contact-us" component={ContactScreen} />
          </Main>
          <Footer />
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
