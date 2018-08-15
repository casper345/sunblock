import React from 'react'
import styled from 'styled-components'
import { Subscribe } from 'unstated'

import MaxPanelsContainer from '../../containers/MaxPanelsContainer'

import SolarPanelImage from '../../assets/images/solar.png'

import Color from '../../constants/Color'
import Formula from '../../constants/Formula'

import EnhancedSlider from '../../components/Slider'
import { H2, P } from '../../components/StyledHeading'
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
  var maxPanels = Math.floor((AvgMonthlyBill * (MaxProductionAllowed/100))/(CreditRate * PerPanelProduction));
  return(
    <Zone>
      <Row>
        <Subscribe to={[MaxPanelsContainer]}>
          {container => (
          <Column>
            <P>For your energy usage of ${container.state.averageMonthlyBill} per month, we recommend</P>
            <Number>{container.state.maxPanels}</Number>
            <P>You can adjust the amount of panels up or down, to a maximum of {container.state.maxPanels}.</P>
            <EnhancedSlider />
            <H2>Your cart of {container.state.panelArray.length}</H2>
          </Column>
          )}
        </Subscribe>
      </Row>

      <Row className="dataRow">
        <Column>
          <P>A Sunblock system size of {maxPanels} panels will</P>
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
    </Zone>
  )

}

export default SolarPanelCalc;
