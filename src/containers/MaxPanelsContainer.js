import { Container } from 'unstated'

import Formula from '../constants/Formula'

class MaxPanelsContainer extends Container {
  state = {
    lastMonth: new Date().getMonth() - 1,
    panelArray: [''],
    lastMonthBill: 200,

    averageMonthlyBill: 200,
    maxPanels: 20,

    annualSavings: 1913,
    averageMonthlyCredit: 159.47,
    percentOffset: 80,
    paybackYears: 8,
    iRR: 10.33,
    lifetimeRevenue: 47842,

    grossCost: 32832,
    cpseRebate: 8703.97,
    netBenefits: 24128,
    finalCost: 16889.62,

    tree: 10100,
    carMileDriven: 956841,
    co2: 11.1,
  }

  sliderChange = (event, value) => {
    const bill = value;
    this.setState({
      lastMonthBill: Math.round(value),
    })
  }

  sliderPanelChange = (event, value) => {
    const panelArrayLength = this.state.panelArray.length;
    const panelValue = value;

    let normalizer = Formula.MONTH_NORMALIZER[this.state.lastMonth];
    let AvgInput = (this.state.lastMonthBill)/normalizer;

    let sumMonthNormalizer = Formula.MONTH_NORMALIZER.reduce((total,num) => total + num);
    let AnnualCost = AvgInput * sumMonthNormalizer;

    let AnnualProduction = panelValue * Formula.ANNUAL_PER_PANEL_PRODUCTION;


    let newAnnualSavings = AnnualProduction * Formula.CREDIT_RATE;
    let newAverageMonthlyCredit = newAnnualSavings/12;

    let newPercentOffset = (newAnnualSavings/AnnualCost) * 100;
    let newLifetimeRevenue = newAnnualSavings * 25;

    let newGrossCost = 360 * panelValue * Formula.GROSS_COST;
    let newCpseRebate = panelValue * Formula.PANEL_PTC * Formula.INVERTER_EFFICEINCY * Formula.CPSE_REBATE;
    let newFinalCost = newGrossCost - newCpseRebate;
    let newPaybackYears = newFinalCost/newAnnualSavings;
    let newIRR = ((1/newPaybackYears) - 0.01) * 100;

    let newTree = AnnualProduction * 25 * .019;
    let newCarMileDriven = AnnualProduction * 25 * 1.8;
    let newCo2 = this.state.co2;

    let newPanelArray = []
    for(var i = 0; i < panelValue; i++){
      newPanelArray = [...newPanelArray, '']
    }

    if(panelValue > panelArrayLength)
    {
      this.setState({
        panelArray: newPanelArray,

        annualSavings: Math.round(newAnnualSavings),
        averageMonthlyCredit: Math.round(newAverageMonthlyCredit),
        percentOffset: Math.round(newPercentOffset),
        paybackYears: Math.round(newPaybackYears),
        iRR: Math.round(newIRR),
        lifetimeRevenue: Math.round(newLifetimeRevenue),

        grossCost: Math.round(newGrossCost),
        cpseRebate: Math.round(newCpseRebate),
        finalCost: Math.round(newFinalCost),

        tree: Math.round(newTree),
        carMileDriven: Math.round(newCarMileDriven),
        co2: Math.round(newCo2),

      })
    }
    else{
      this.setState({
        panelArray: newPanelArray,

        annualSavings: Math.round(newAnnualSavings),
        averageMonthlyCredit: Math.round(newAverageMonthlyCredit),
        percentOffset: Math.round(newPercentOffset),
        paybackYears: Math.round(newPaybackYears),
        iRR: Math.round(newIRR),
        lifetimeRevenue: Math.round(newLifetimeRevenue),

        grossCost: Math.round(newGrossCost),
        cpseRebate: Math.round(newCpseRebate),
        finalCost: Math.round(newFinalCost),

        tree: Math.round(newTree),
        carMileDriven: Math.round(newCarMileDriven),
        co2: Math.round(newCo2),
      })
    }
  }
}

export default MaxPanelsContainer
