import { Container } from 'unstated'

import Formula from '../constants/Formula'

class MaxPanelsContainer extends Container {
  state = {
    averageMonthlyBill: 250,
    maxPanels: 20,
    panels: 1,
    panelArray: [''],
  }

  sliderChange = (event, value) => {
    const bill = value;
    const MaxProductionAllowed = Formula.MAX_PRODUCTION_ALLOWED;
    const CreditRate = Formula.CREDIT_RATE;
    const PerPanelProduction = Formula.PER_PANEL_PRODUCTION;
    var maxPanelsCalc = Math.floor((bill * (MaxProductionAllowed/100))/(CreditRate * PerPanelProduction));
    this.setState({
      averageMonthlyBill: Math.round(value),
      maxPanels: maxPanelsCalc,
    })
  }

  sliderPanelChange = (event, value) => {
    if(value > this.state.panelArray.length)
    {
      this.setState({
        panelArray: [...this.state.panelArray, ''],
      })
    }
    else{
      var newPanelArray = [...this.state.panelArray]
      newPanelArray.pop();
      this.setState({
        panels: newPanelArray.length,
        panelArray: newPanelArray
      })
    }
  }
}

export default MaxPanelsContainer
