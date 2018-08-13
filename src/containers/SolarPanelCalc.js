import React from 'react'
import styled from 'styled-components'

import SolarPanelImage from '../assets/images/solar.png'

import { P } from '../components/StyledHeading'
import Button from '../components/Button'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .solarImage{
    max-width: 50px;
    max-height: 50px;
  }
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5%;
`;
const Number = styled.h2`
  margin: 0;
`;

const SolarPanelCalc = ({ AvgMonthlyBill }) => {
  const MaxProductionAllowed = 120;
  const CreditRate = .09;
  const PerPanelProduction = 46.63;
  const MaxPanels = Math.floor((AvgMonthlyBill * (MaxProductionAllowed/100))/(CreditRate * PerPanelProduction));
  return(
    <Container>
      <Row>
        <img className="solarImage"  src={SolarPanelImage} alt="Solar Panel"/>
        <Column>
          <P>For your energy usage of ${AvgMonthlyBill} per month, we recommend</P>
          <Number>{MaxPanels}</Number>
          <P>You can adjust the amount of panels up or down, to a maximum of 20.</P>
        </Column>
      </Row>

      <Row>
        <Column>
          <P>A Sunblock system size of {MaxPanels} panels will</P>
          <P>Pay for itself every month (cover monthly payment + loan fees) Learn More</P>
          <P>Offset 100% of your CPS power bill Learn More</P>
          <P>Even earn you a $15 monthly credit Learn More</P>
        </Column>
        <Column>
          <P>Did you know? Your Sunblock will generate</P>
          <Number>8.5kw</Number>
        </Column>
      </Row>
      <Button>Order your panels now</Button>
    </Container>
  )

}

export default SolarPanelCalc;
