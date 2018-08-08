import React, { Component } from 'react'
import styled from 'styled-components'

import SolarPanelCalc from '../containers/SolarPanelCalc'

import { H2 } from '../components/StyledHeading'

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
        <H2>DESIGN YOUR SOLAR BLOCK</H2>
        <SolarPanelCalc />
      </Container>
    );
  }
}

export default DesignScreen;
