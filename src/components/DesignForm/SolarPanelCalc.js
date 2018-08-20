import React from 'react'
import styled from 'styled-components'
import { Subscribe } from 'unstated'

import MaxPanelsContainer from '../../containers/MaxPanelsContainer'

import Color from '../../constants/Color'

import { H2, P } from '../../components/StyledHeading'
import Slider from '../../components/Slider'
import HorizontalLine from '../../components/HorizontalLine'
import PanelCart from '../../components/PanelCart'

const Zone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4%;
  .peakPower {
    padding: 3%;
    align-items: center;
    background-color: ${Color.secondaryColor};
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
const PanelCartZone = styled.div`
  width: 400px;

`

const SolarPanelCalc = () => {
  return(
    <Zone>
      <Subscribe to={[MaxPanelsContainer]}>
        {container => (
          <div>
            <Row>
              <PanelCartZone>
                <PanelCart />
              </PanelCartZone>
              <Column>
                <P>For your energy usage of ${container.state.averageMonthlyBill} per month, we recommend</P>
                <H2>{container.state.maxPanels}</H2>
                <P>You can adjust the amount of panels up or down, to a maximum of {container.state.maxPanels}.</P>
                <Slider name={'panelSlider'}/>
                <a href="">Why are {container.state.maxPanels} panels recommended?</a>
                <H2>Your cart of {container.state.panelArray.length} panels</H2>
              </Column>
            </Row>
            <Row className="dataRow">
                <Column>
                  <P>A Sunblock system size of {container.state.panelArray.length} panels will</P>
                  <P>Pay for itself every month (cover monthly payment + loan fees)</P>
                  <P>Offset 100% of your CPS power bill</P>
                  <P>Even earn you a $15 monthly credit</P>
                </Column>
                <Column className="peakPower">
                  <P>Did you know? Your Sunblock will generate</P>
                  <H2>8.5kw</H2>
                  <HorizontalLine color={'grey'} width={100}/>
                  <P>of peak power</P>
                </Column>
            </Row>
          </div>
        )}
      </Subscribe>
    </Zone>
  )

}

export default SolarPanelCalc;
