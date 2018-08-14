import React from 'react'
import Slider from '@material-ui/lab/Slider'
import {  Subscribe } from 'unstated'

import MaxPanelsContainer from '../containers/MaxPanelsContainer'

const EnhancedSlider = () => {
  return(
    <Subscribe to={[MaxPanelsContainer]}>
      {container => (
        <div>
          {container.state.MaxPanels}
          <button onClick={container.increment}>+</button>
          <button onClick={container.decrement}>-</button>
        </div>
      )}
    </Subscribe>
  )
}


export default EnhancedSlider
