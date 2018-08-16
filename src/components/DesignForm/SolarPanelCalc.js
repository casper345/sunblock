import React from 'react'
import styled from 'styled-components'
import { Subscribe } from 'unstated'

import MaxPanelsContainer from '../../containers/MaxPanelsContainer'

import Color from '../../constants/Color'

import { H2, P } from '../../components/StyledHeading'
import EnhancedSlider from '../../components/Slider'
import Button from '../../components/Button'

const Zone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .peakPower {
    padding: 3%;
    align-items: center;
    background-color: ${Color.grey};
  }
  .buttonZone {
    flex-direction: row;
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
`;

const SolarPanelCalc = () => {
  return(
    <Zone>
      <Subscribe to={[MaxPanelsContainer]}>
        {container => (
        <Row>
          <EnhancedSlider />
            <Column>
              <P>For your energy usage of ${container.state.averageMonthlyBill} per month, we recommend</P>
              <H2>{container.state.maxPanels}</H2>
              <P>You can adjust the amount of panels up or down, to a maximum of {container.state.maxPanels}.</P>
              <a href="">Why are 20 panels recommended?</a>
              <H2>Your cart of {container.state.panelArray.length} panels</H2>
              <Row className='buttonZone'>
                <Button onClick={container.increment}>Add</Button>
                <Button onClick={container.decrement}>Delete</Button>
              </Row>
            </Column>
        </Row>
        )}
      </Subscribe>

      <Row className="dataRow">
        <Column>
          <P>A Sunblock system size of [maxPanels] panels will</P>
          <P>Pay for itself every month (cover monthly payment + loan fees) Learn More</P>
          <P>Offset 100% of your CPS power bill Learn More</P>
          <P>Even earn you a $15 monthly credit Learn More</P>
        </Column>
        <Column className="peakPower">
          <P>Did you know? Your Sunblock will generate</P>
          <H2>8.5kw</H2>
          <P>of peak power</P>
        </Column>
      </Row>
    </Zone>
  )

}

export default SolarPanelCalc;
