import React, { Component } from 'react'
import styled from 'styled-components'

import Color from '../../constants/Color'

import Header from './Header'
import Process from './Process'
import BlockCards from './BlockCards'

import { H2 } from '../../components/StyledHeading'

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
  a {
    width: 190px;
    margin: 3%;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 12px;
    border-radius: 2px;
    border: 1px solid  ${Color.primaryColor};
    background-color:  ${Color.primaryColor};
    color: white;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    &:hover{
      color:  ${Color.primaryColor};
      border: 1px solid  ${Color.primaryColor};
      background-color: white;
    }
  }
  .secondaryButton {
    border: 1px solid  ${Color.secondaryColor};
    background-color:  ${Color.secondaryColor};
    &:hover {
      color:  ${Color.secondaryColor};
      border: 1px solid  ${Color.secondaryColor};
    }
  }
  @media(max-width: 500px){
    flex-direction: column;
  }
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;


class HomeScreen extends Component {
  render(){
    return(
      <Zone>
        <Header />
        <BlockCards />
        <Process />
        <ButtonZone>
          <a href="/how-gosmartsolar-sunblock-works">See How it Works</a>
          <a href="/design-your-solar" className="secondaryButton">Design Solar for You</a>
        </ButtonZone>
        <Section>
          <H2>Half of US homes don't work for traditional solar.*</H2>
          <H2>We are here to fix that.</H2>
        </Section>
      </Zone>
    );
  }
}

export default HomeScreen
