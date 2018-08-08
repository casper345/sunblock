import React from 'react'
import styled from 'styled-components'

import defaultImage from '../../assets/images/pokecenter.png'

import Color from '../../constants/Color'

import { H1, H3, P } from '../../components/StyledHeading'

const Header = () =>
  <Container>
    <Section>
      <H1>Solar for every home. On every block.</H1>
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
  </Container>

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2%;
  margin-bottom: 5%;
`;
const Section = styled.div`
  width: 90%;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2%;
  background-color: ${Color.lightGrey};
`;
const Column = styled.div`
  width: 20%;
  max-width: 150px;
  min-width: 80px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0;
`;
const Row = styled.div`
  width: 80%;
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
`;
const BoxImage = styled.img`
  max-width: 130px;
`;

export default Header;
