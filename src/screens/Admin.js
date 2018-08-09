import React, { Component } from 'react'
import styled from 'styled-components'

import SolarPanelCalc from '../containers/SolarPanelCalc'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
`;

class DesignScreen extends Component {

  render(){
    return(
      <Container>
        <SolarPanelCalc />
      </Container>
    );
  }
}

export default DesignScreen;
