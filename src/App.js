import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'unstated'

// TODO: shouldnt need index
import HomeScreen from './screens/HomeScreen/index'
import SunblockScreen from './screens/SunblockScreen'
import DesignScreen from './screens/DesignScreen'
import FaqScreen from './screens/FaqScreen'

import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'

const Zone = styled.div`
`;

const Main = styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
`;

class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <Zone>
            <NavigationBar />
            <Main>
              <Route exact path="/" component={HomeScreen} />
              <Route exact path="/how-gosmartsolar-sunblock-works" component={SunblockScreen} />
              <Route exact path="/design-your-solar" component={DesignScreen} />
              <Route exact path="/faq" component={FaqScreen} />
            </Main>
            <Footer />
          </Zone>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
