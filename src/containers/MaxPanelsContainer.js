import { Container } from 'unstated'

import Formula from '../constants/Formula'

class MaxPanelsContainer extends Container {
  state = {
    buildingType: 'home',
    maxPanels: 0,
    panels: 0,
    panelArray: [],
    averageMonthlyBill: 0,
  }

  buildingChange = (evt) => {
    this.setState({
      buildingType: evt.target.value
    })
  }

  setAverageMonthlyBill = (evt) => {
    var bill = evt.target.value
    this.setState({
      averageMonthlyBill: bill,
    })

  }

  calcMaxPanels = () => {
    const bill = this.state.averageMonthlyBill;
    const MaxProductionAllowed = Formula.MAX_PRODUCTION_ALLOWED;
    const CreditRate = Formula.CREDIT_RATE;
    const PerPanelProduction = Formula.PER_PANEL_PRODUCTION;
    var maxPanelsCalc = Math.floor((bill * (MaxProductionAllowed/100))/(CreditRate * PerPanelProduction));
    var arr = Array.apply(null, Array(maxPanelsCalc));
    this.setState({
      maxPanels: maxPanelsCalc,
      panelArray: arr,
    })
  }
  increment = () => {
    var newArrayLength = this.state.panelArray.length;
    this.setState({
      panels: newArrayLength,
      panelArray: [...this.state.panelArray, '']
    })
  }
  decrement = () => {
    var newPanelArray = [...this.state.panelArray]
    newPanelArray.pop();
    this.setState({
      panels: newPanelArray.length,
      panelArray: newPanelArray
    })
  }
}

export default MaxPanelsContainer
