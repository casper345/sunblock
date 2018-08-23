import { Container } from 'unstated'

import Formula from '../constants/Formula'

class MaxPanelsContainer extends Container {
  state = {
    averageMonthlyBill: 250,
    panels: 1,
    panelArray: [''],

    maxPanels: 20,
    
    annualSavings: 0,
    averageMonthlyCredit: 0,
    percentOffset: 0,
    paybackYears: 0,
    iRR: 0,
    lifetimeRevenue: 0,

    grossCost: 0,
    cpseRebate: 0,
    netBenefits: 0,
    finalCost: 0,

    tree: 0,
    carMileDriven: 0,
    co2: 0,
  }

  sliderChange = (event, value) => {
    const bill = value;
    const MaxProductionAllowed = Formula.MAX_PRODUCTION_ALLOWED;
    const CreditRate = Formula.CREDIT_RATE;
    const PerPanelProduction = Formula.ANNUAL_PER_PANEL_PRODUCTION;
    var maxPanelsCalc = Math.floor((bill * (MaxProductionAllowed))/(CreditRate * PerPanelProduction));
    this.setState({
      averageMonthlyBill: Math.round(value),
      maxPanels: maxPanelsCalc,
    })
  }

  sliderPanelChange = (event, value) => {
    const panelArrayLength = this.state.panelArray.length;

    let newAnnualSavings = this.state.annualSavings + 100;
    let newAverageMonthlyCredit = this.state.averageMonthlyCredit + 100;
    let newPercentOffset = this.state.percentOffset + 100;
    let newPaybackYears = this.state.paybackYears + 100;
    let newIRR = this.state.iRR + 100;
    let newLifetimeRevenue = this.state.lifetimeRevenue + 100;

    let newGrossCost = this.state.grossCost + 100;
    let newCpseRebate = this.state.cpseRebate + 100;
    let newNetBenefits = this.state.netBenefits + 100;
    let newFinalCost = this.state.finalCost + 100;

    let newTree = this.state.tree + 100;
    let newCarMileDriven = this.state.carMileDriven + 100;
    let newCo2 = this.state.co2 + 100;


    if(value > panelArrayLength)
    {
      this.setState({
        panelArray: [...this.state.panelArray, ''],

        annualSavings: newAnnualSavings,
        averageMonthlyCredit: newAverageMonthlyCredit,
        percentOffset: newPercentOffset,
        paybackYears: newPaybackYears,
        iRR: newIRR,
        lifetimeRevenue: newLifetimeRevenue,

        grossCost: newGrossCost,
        cpseRebate: newCpseRebate,
        netBenefits: newNetBenefits,
        finalCost: newFinalCost,

        tree: newTree,
        carMileDriven: newCarMileDriven,
        co2: newCo2,

      })
    }
    else{
      var newPanelArray = [...this.state.panelArray]
      newPanelArray.pop();
      this.setState({
        panels: newPanelArray.length,
        panelArray: newPanelArray,

        annualSavings: newAnnualSavings,
        averageMonthlyCredit: newAverageMonthlyCredit,
        percentOffset: newPercentOffset,
        paybackYears: newPaybackYears,
        iRR: newIRR,
        lifetimeRevenue: newLifetimeRevenue,

        grossCost: newGrossCost,
        cpseRebate: newCpseRebate,
        netBenefits: newNetBenefits,
        finalCost: newFinalCost,

        tree: newTree,
        carMileDriven: newCarMileDriven,
        co2: newCo2,
      })
    }
  }
}

export default MaxPanelsContainer
