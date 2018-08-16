import React from 'react'
import styled from 'styled-components'

import defaultImage from '../../assets/images/pokecenter.png'

import Color from '../../constants/Color'

import { H1, H3, P } from '../../components/StyledHeading'

const Zone = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2%;
  margin-bottom: 5%;
`
const Section = styled.div`
  width: 90%;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2%;
  background-color: ${Color.grey};
  @media(max-width: 500px){
    padding-top: 10%;
  }
`
const Column = styled.div`
  width: 20%;
  max-width: 150px;
  min-width: 80px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0;
  @media(max-width: 500px){
    width: 80%;
    max-width: 300px;
  }
`
const Row = styled.div`
  width: 80%;
  max-width: 750px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  margin-top: -75px;
  @media(max-width: 500px){
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
  }
`
const BoxImage = styled.img`
  max-width: 130px;
  @media(max-width: 500px){
    max-width: 300px;
  }
`

const Header = () =>
  <Zone>
    <Section>
      <H1>Solar for everyone. On every block.</H1>
      <H3>NOTHING GOES ON YOUR ROOF. ENERGY WITHOUT THE WORRY</H3>
    </Section>
    <Row>
      <Column>
        <BoxImage src={defaultImage} />
        <P>Work for any home with any food</P>
      </Column>
      <Column>
        <BoxImage src={defaultImage} />
        <P>Even with lots of shade</P>
      </Column>
      <Column>
        <BoxImage src={defaultImage} />
        <P>Even Apartments and Rental homes</P>
      </Column>
      <Column>
        <BoxImage src={defaultImage} />
        <P>HOA & Historic Neighborhoods</P>
      </Column>
    </Row>
  </Zone>

export default Header;
