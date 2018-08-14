import React from 'react'
import styled from 'styled-components'

import SolarPanelImage from '../assets/images/solar.png'

import Color from '../constants/Color'

import { P } from '../components/StyledHeading'
import Button from '../components/Button'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .solarImage{
    max-width: 50px;
    max-height: 50px;
  }
  .peakPower {
    padding: 3%;
    align-items: center;
    background-color: ${Color.grey};
  }
  .orderButton {
    margin-top: 30px;
  }
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  .dynamicPanelsRow {
  }
`;
const Number = styled.h2`
  margin: 0;
`;

const SolarPanelCalc = ({ AvgMonthlyBill }) => {
  const MaxProductionAllowed = 120;
  const CreditRate = .09;
  const PerPanelProduction = 46.63;
  var MaxPanels = Math.floor((AvgMonthlyBill * (MaxProductionAllowed/100))/(CreditRate * PerPanelProduction));
  var maxPanelArray = Array.apply(null, Array(MaxPanels));
  return(
    <Container>
      <Row>
        {
          maxPanelArray.map((panel) =>
                <img className="solarImage"  src={SolarPanelImage} alt="Solar Panel"/>)
        }
        <Column>
          <P>For your energy usage of ${AvgMonthlyBill} per month, we recommend</P>
          <Number>{MaxPanels}</Number>
          <P>You can adjust the amount of panels up or down, to a maximum of 20.</P>
        </Column>
      </Row>

      <Row className="dataRow">
        <Column>
          <P>A Sunblock system size of {MaxPanels} panels will</P>
          <P>Pay for itself every month (cover monthly payment + loan fees) Learn More</P>
          <P>Offset 100% of your CPS power bill Learn More</P>
          <P>Even earn you a $15 monthly credit Learn More</P>
        </Column>
        <Column className="peakPower">
          <P>Did you know? Your Sunblock will generate</P>
          <Number>8.5kw</Number>
          <P>of peak power</P>
        </Column>
      </Row>
      <Button className="orderButton">Order your panels now</Button>
    </Container>
  )

}

export default SolarPanelCalc;
