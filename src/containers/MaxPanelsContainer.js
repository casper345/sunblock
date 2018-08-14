import React from 'react'
import { Container } from 'unstated'

class MaxPanelsContainer extends Container {
  state = {
    MaxPanels: 0,
    panels: 0,
    panelArray: [],
  }

  increment = () => {
    this.setState({
      MaxPanels: this.state.MaxPanels + 1,
      panelArray: [...this.state.panelArray, '']
    })
  }
  decrement = () => {
    var newPanelArray = [...this.state.panelArray]
    newPanelArray.pop(),
    this.setState({
      MaxPanels: this.state.MaxPanels - 1,
      panelArray: newPanelArray
    })
  }
}

export default MaxPanelsContainer
