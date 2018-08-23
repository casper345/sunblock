import React from 'react'
import styled from 'styled-components'
import { Subscribe } from 'unstated'

import MaxPanelsContainer from '../../containers/MaxPanelsContainer'

import Color from '../../constants/Color'

import { H2, P } from '../../components/StyledHeading'
import Slider from '../../components/Slider'
import HorizontalLine from '../../components/HorizontalLine'
import PanelCart from '../../components/PanelCart'
import Infographic from '../../components/Infographic'

const Zone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4%;
  .peakPower {
    width: 20%;
    padding: 2%;
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
  .infoData {
    width: 50%;
  }
  .sliderColumn {
    padding: 5%;
  }
`;
const PanelCartZone = styled.div`
  width: 400px;

`

const SolarPanelCalc = () => {
  return(
    <Zone>
      <Subscribe to={[MaxPanelsContainer]}>
        {container => (
            <Row>
              <PanelCartZone>
                <PanelCart />
              </PanelCartZone>
              <Column className={"sliderColumn"}>
                <H2>{container.state.maxPanels}</H2>
                <Slider name={'panelSlider'}/>
                <H2>Your cart of {container.state.panelArray.length} panels</H2>
              </Column>
            </Row>
        )}
      </Subscribe>
    </Zone>
  )

}

export default SolarPanelCalc;
