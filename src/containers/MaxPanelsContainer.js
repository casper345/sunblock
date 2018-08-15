import React from 'react'
import { Container } from 'unstated'

class MaxPanelsContainer extends Container {
  state = {
    maxPanels: 0,
    panels: 0,
    panelArray: [],
    averageMonthlyBill: 0,
  }

  increment = () => {
    this.setState({
      maxPanels: this.state.maxPanels + 1,
      panelArray: [...this.state.panelArray, '']
    })
  }
  decrement = () => {
    var newPanelArray = [...this.state.panelArray]
    newPanelArray.pop(),
    this.setState({
      maxPanels: this.state.maxPanels - 1,
      panelArray: newPanelArray
    })
  }
}

export default MaxPanelsContainer
