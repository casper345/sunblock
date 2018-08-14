import React, { Component } from 'react'
import styled from 'styled-components'

import SolarPanelCalc from '../components/DesignForm/SolarPanelCalcAdmin'

const Zone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
`;

class DesignScreen extends Component {

  render(){
    return(
      <Zone>
        <SolarPanelCalc />
      </Zone>
    );
  }
}

export default DesignScreen;
