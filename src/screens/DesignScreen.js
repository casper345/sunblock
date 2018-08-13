import React, { Component } from 'react'
import styled from 'styled-components'

import Color from '../constants/Color'

import DesignForm from '../containers/DesignForm/index'

import { H2 } from '../components/StyledHeading'
import Card from '../components/Card'

const Container = styled.div`
  height: 100vh;
  display: flex;
  padding-top: 5%;
  flex-direction: column;
  align-items: center;
  background-color: ${Color.grey};
`;

class DesignScreen extends Component {

  render(){
    return(
      <Container>
        <Card>
          <H2>DESIGN YOUR SOLAR BLOCK</H2>
          <DesignForm />
        </Card>
      </Container>
    );
  }
}

export default DesignScreen
