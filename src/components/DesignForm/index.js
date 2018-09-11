import React, { Component } from 'react'
import styled from 'styled-components'
import { Subscribe } from 'unstated'

import CarImage from '../../assets/images/car.png'
import TreeImage from '../../assets/images/tree.png'
import Co2Image from '../../assets/images/co2.png'

import MaxPanelsContainer from '../../containers/MaxPanelsContainer'

import Color from '../../constants/Color'

import { H1, H2, H3, H4, P } from '../StyledHeading'
import Card from '../Card'
import Slider from '../Slider'
import PanelCart from '../PanelCart'
import HorizontalLine from '../HorizontalLine'
import TypeSelection from '../TypeSelection'
import ContactForm from './ContactForm'

const Zone = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .firstSection {
    display: flex;
    flex-direction: column;
  }
  .secondSection {
    display: flex;
    flex-direction: column;
  }
`
const DataCard = styled.div`
  width: auto;
  min-height: 100px;
  margin: 1%;
  padding: 1%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  background-color: white;
  img {
    max-width: 60px;
  }
  .warning {
    color: red;
  }
  .enviroCard {
    width: 500px;
    padding: 4%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  .costRow {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

const convertedNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const EnviromentComponent = props => {
  const { tree, carMileDriven, co2 } = props.data.state;
  return(
    <DataCard>
      <div className="enviroCard">
      <div>
        <img src={TreeImage} alt='trees by Deemak Daksina from the Noun Project' />
        <H1>{convertedNumber(tree)}</H1>
        <H4>trees planted</H4>
      </div>
      <H2>=</H2>
      <div>
        <img src={CarImage} alt='Car by Jens Tärning from the Noun Project' />
        <H1>{convertedNumber(carMileDriven)}</H1>
        <H4>car miles offset</H4>
      </div>
      <H2>=</H2>
      <div>
        <img src={Co2Image} alt='molecule by Abir Alward from the Noun Project' />
        <H1>{co2}</H1>
        <H4>CO2 metric tons</H4>
      </div>
      </div>
    </DataCard>
)}

const CostComponent = props => {
  const { grossCost, cpseRebate, finalCost, investmentTaxCredit, acceleratedDepreciation } = props.data.state;
  return(
  <Card>
    <Row>
      <div className="costRow">
        <H3>Gross Cost</H3>
        <H3>${ convertedNumber(grossCost) }</H3>
      </div>
    </Row>
    <HorizontalLine color={Color.grey} width={100} margin={2}/>
    <Row>
      <div className="costRow">
        <H3>CPSE Rebate</H3>
        <H3>${ convertedNumber(cpseRebate) }</H3>
      </div>
    </Row>
    <HorizontalLine color={Color.grey} width={100} margin={2}/>
    <Row>
      <div className="costRow">
        <H3>Investment Tax Credit</H3>
        <H3>${convertedNumber(investmentTaxCredit)}</H3>
      </div>
    </Row>
    <HorizontalLine color={Color.grey} width={100} margin={2}/>
    <Row>
      <div className="costRow">
        <H3>Accelerated Depreciation</H3>
        <H3>${convertedNumber(acceleratedDepreciation)}</H3>
      </div>
    </Row>
    <HorizontalLine color={Color.grey} width={100} margin={2}/>
    <Row>
      <div className="costRow">
        <H3>Final Cost</H3>
        <H3>${convertedNumber(finalCost)}</H3>
      </div>
    </Row>
  </Card>
)}

const DataComponent = props => {
  const { annualSavings, averageMonthlyCredit, percentOffset, paybackYears, iRR, lifetimeRevenue } = props.data.state;
  return(
  <div>
    <Row>
      <DataCard>
        <H1>${convertedNumber(averageMonthlyCredit)}</H1>
        <H4>Average Monthly Credit</H4>
      </DataCard>
      <DataCard>
        <H1>{iRR}%</H1>
        <H4>IRR</H4>
      </DataCard>
    </Row>
    <Row>
      <DataCard>
        <H1>{paybackYears} yrs</H1>
        <H4>Payback Years</H4>
      </DataCard>
      <DataCard>
        <H1>${convertedNumber(lifetimeRevenue)}</H1>
        <H4>Lifetime revenue</H4>
      </DataCard>
    </Row>
  </div>
)}

class DesignForm extends Component {
  render(){
    return(
      <Subscribe to={[MaxPanelsContainer]}>
        {container => (
        <Zone>
          <Row>
          <div className="firstSection">
           <Card>
                  <div>
                    How much was your CPS bill last month? ${container.state.lastMonthBill}
                    <Slider name={'monthlyBillSlider'}/>
                  </div>
           </Card>
           <Card>
                 <div>
                   Want more or less panels?
                   <Slider name={'panelSlider'}/>
                 </div>
           </Card>
          </div>
          <div className="firstSection">
           <Card>
                  <div>
                    Your recommended solar installations size. This will cover {container.state.percentOffset}% of your usage
                  </div>
           </Card>
           <Card>
                 <div>
                   Number of solar PV Panels {container.state.panelArray.length}
                 </div>
           </Card>
          </div>
          </Row>
          <TypeSelection />
          <DataComponent data={container}/>
          <CostComponent data={container}/>
          <EnviromentComponent data={container}/>
          <ContactForm />
        </Zone>
        )}
      </Subscribe>
    )
  }
}

export default DesignForm
