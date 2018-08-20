import React, { Component } from 'react'
import styled from 'styled-components'
import Color from '../constants/Color'

import DesignForm from '../components/DesignForm/index'

import HorizontalLine from '../components/HorizontalLine'
import { H1, P } from '../components/StyledHeading'

const Zone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2%;
  padding-bottom: 5%;
  background-color: ${Color.white};
`;
const Heading = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (max-width: 700px){
    width: 80%;
  }
`

class DesignScreen extends Component {

  render(){
    return(
      <Zone>
        <Heading>
          <H1>Design Your Solar</H1>
          <HorizontalLine />
          <P>
            We want to make sure you are given the best option for this. If we find out that solar will not be a good invesement on your end, we will notify you.
          </P>
        </Heading>
        <DesignForm />
      </Zone>
    );
  }
}

export default DesignScreen
