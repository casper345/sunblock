import React from 'react'
import styled from 'styled-components'
import { Subscribe } from 'unstated'

import MaxPanelsContainer from '../containers/MaxPanelsContainer'

import Slider from '@material-ui/lab/Slider'

const Zone = styled.div`
  display: flex;
  flex-direction: column;
  .solarImage{
    max-width: 50px;
    max-height: 50px;
  }
`

const EnhancedSlider = ({ name }) => {
  return(
    <Subscribe to={[MaxPanelsContainer]}>
      {container => (
        <Zone>
          {
            name === 'monthlyBillSlider' &&
            <Slider
              min={0}
              max={500}
              value={container.state.averageMonthlyBill} aria-labelledby="label" onChange={container.sliderChange} />
          }
          {
            name === 'panelSlider' &&
            <Slider
              min={0}
              max={500}
              value={container.state.panels} aria-labelledby="label" onChange={container.sliderPanelChange} />
          }
        </Zone>
      )}
    </Subscribe>
  )
}


export default EnhancedSlider
