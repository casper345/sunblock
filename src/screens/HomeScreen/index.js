import React, { Component } from 'react'
import styled from 'styled-components'

import Color from '../../constants/Color'

import Header from './Header'
import Process from './Process'

import { H2 } from '../../components/StyledHeading'
import Button from '../../components/Button'

const Zone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ButtonZone = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 3%;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// TODO: spacing between city images and steps, general sapcing relation
class HomeScreen extends Component {
  render(){
    return(
      <Zone>
        <Header />
        <ButtonZone>
          <Button>See How It Works</Button>
          <Button color={Color.secondaryColor}>Design Solar For You</Button>
        </ButtonZone>
        <Section>
          <H2>Half of US homes don't work for traditional solar.*</H2>
          <H2>We are here to fix that.</H2>
        </Section>
        <Process />
      </Zone>
    );
  }
}

export default HomeScreen;
