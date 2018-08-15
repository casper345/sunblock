import React from 'react'
import Slider from '@material-ui/lab/Slider'
import {  Subscribe } from 'unstated'

import MaxPanelsContainer from '../containers/MaxPanelsContainer'

import SolarPanelImage from '../assets/images/solar.png'

const EnhancedSlider = () => {
  return(
    <Subscribe to={[MaxPanelsContainer]}>
      {container => (
        <div>
          {
            container.state.panelArray.map((panel, index) => <img className="solarImage"  src={SolarPanelImage} alt="Solar Panel"/>)
          }
          <button onClick={container.increment}>+</button>
          <button onClick={container.decrement}>-</button>
        </div>
      )}
    </Subscribe>
  )
}


export default EnhancedSlider
