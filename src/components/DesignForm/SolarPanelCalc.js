import React from 'react'
import styled from 'styled-components'
import { Subscribe } from 'unstated'

import SolarPanelImage from '../../assets/images/solar.png'

import Color from '../../constants/Color'
import Formula from '../../constants/Formula'

import EnhancedSlider from '../../components/Slider'
import { P } from '../../components/StyledHeading'
import Button from '../../components/Button'

const Zone = styled.div`
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
  const MaxProductionAllowed = Formula.MAX_PRODUCTION_ALLOWED;
  const CreditRate = Formula.CREDIT_RATE;
  const PerPanelProduction = Formula.PER_PANEL_PRODUCTION;
  var MaxPanels = Math.floor((AvgMonthlyBill * (MaxProductionAllowed/100))/(CreditRate * PerPanelProduction));
  var maxPanelArray = Array.apply(null, Array(MaxPanels));
  return(
    <Zone>
      <Row>
        <Column>
          <P>For your energy usage of ${AvgMonthlyBill} per month, we recommend</P>
          <Number>{MaxPanels}</Number>
          <P>You can adjust the amount of panels up or down, to a maximum of 20.</P>
          <EnhancedSlider />
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
    </Zone>
  )

}

export default SolarPanelCalc;
