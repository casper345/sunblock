import React, { Component } from 'react'
import styled from 'styled-components'

import Header from './Header'
import Process from './Process'

import { H2 } from '../../components/StyledHeading'
import Button from '../../components/Button'

// TODO: spacing between city images and steps, general sapcing relation
class HomeScreen extends Component {
  render(){
    return(
      <Container>
        <Header />
        <ButtonContainer>
          <Button>See How It Works</Button>
          <Button>Design Solar For You</Button>
        </ButtonContainer>
        <Section>
          <H2>Half of US homes don't work for traditional solar.*</H2>
          <H2>We are here to fix that.</H2>
        </Section>
        <Process />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 3%;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default HomeScreen;