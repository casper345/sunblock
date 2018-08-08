import React, { Component } from 'react'
import styled from 'styled-components'

import { H1 } from '../components/StyledHeading'

class HomeScreen extends Component {
  render(){
    return(
      <Container>
        <H1>Go Smart Solar</H1>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default HomeScreen;
