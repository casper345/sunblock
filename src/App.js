import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter, Route } from 'react-router-dom'

// TODO: shouldnt need index
import HomeScreen from './screens/HomeScreen/index'
import SunblockScreen from './screens/SunblockScreen'
import DesignScreen from './screens/DesignScreen'
import FaqScreen from './screens/FaqScreen'
import Admin from './screens/Admin'

import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'

const Container = styled.div`
`;

const Main = styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
  padding-top: 80px;
  @media (max-width:700px){
    padding-top: 140px;
  }
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <NavigationBar />
          <Main>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/how-gosmartsolar-sunblock-works" component={SunblockScreen} />
            <Route exact path="/design-your-solar" component={DesignScreen} />
            <Route exact path="/faq" component={FaqScreen} />
            <Route exact path="/admin" component={Admin} />
          </Main>
          <Footer />
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
