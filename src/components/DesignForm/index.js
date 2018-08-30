import React, { Component } from 'react'
import styled from 'styled-components'
import { Subscribe } from 'unstated'

import CarImage from '../../assets/images/car.png'
import TreeImage from '../../assets/images/tree.png'
import Co2Image from '../../assets/images/co2.png'

import MaxPanelsContainer from '../../containers/MaxPanelsContainer'

import Color from '../../constants/Color'

import { H4, P } from '../StyledHeading'
import Card from '../Card'
import Button from '../Button'
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
    flex-direction: row;
  }
  .secondSection {
    display: flex;
    flex-direction: row;
  }
`
const DataCard = styled.div`
  width: 200px;
  height: 100px;
  margin: 1%;
  padding: 1%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid ${Color.grey};
  border-radius: 10px;
  img {
    max-width: 40px;
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
  <Card>
    <Row>
      <DataCard>
        <img src={TreeImage} alt='trees by Deemak Daksina from the Noun Project' />
        {convertedNumber(tree)} trees planted
      </DataCard>
      <DataCard>
        <img src={CarImage} alt='Car by Jens Tärning from the Noun Project' />
        {convertedNumber(carMileDriven)} miles driven
      </DataCard>
      <DataCard>
        <img src={Co2Image} alt='molecule by Abir Alward from the Noun Project' />
        {co2} CO2 metric tons
      </DataCard>
    </Row>
  </Card>
)}

const CostComponent = props => {
  const { grossCost, cpseRebate, finalCost, investmentTaxCredit, acceleratedDepreciation, buyerType } = props.data.state;
  return(
  <Card>
    <Row>
      <div className="costRow">
        <H4>Gross // COMBAK: ost</H4>
        <P>${ convertedNumber(grossCost) }</P>
      </div>
    </Row>
    <HorizontalLine width={100}/>
    <Row>
      <div className="costRow">
        <H4>CPSE Rebate</H4>
        <P>${ convertedNumber(cpseRebate) }</P>
      </div>
    </Row>
    <HorizontalLine width={100}/>
    <TypeSelection />
    { buyerType !== 'nonprofit' &&
    <Row>
      <div className="costRow">
        <H4>Investment Tax Credit</H4>
        <P>${convertedNumber(investmentTaxCredit)}</P>
      </div>
    </Row>
    }
    {
      buyerType === 'commercial' &&
      <Row>
        <div className="costRow">
          <H4>Accelerated Depreciation</H4>
          <P>${convertedNumber(acceleratedDepreciation)}</P>
        </div>
      </Row>
    }
    <Row>
      <div className="costRow">
        <H4>Final Cost</H4>
        <P>${convertedNumber(finalCost)}</P>
      </div>
    </Row>
  </Card>
)}

const DataComponent = props => {
  const { annualSavings, averageMonthlyCredit, percentOffset, paybackYears, iRR, lifetimeRevenue } = props.data.state;
  return(
  <Card>
    <Row>
      <DataCard>
        <H4>Annual Savings</H4>
        <P>${convertedNumber(annualSavings)}</P>
      </DataCard>
      <DataCard>
        <H4>Average Monthly Credit</H4>
        <P>${convertedNumber(averageMonthlyCredit)}</P>
      </DataCard>
      <DataCard>
        <H4>Percent of Bill Offset</H4>
         <P>{percentOffset}%</P>
      </DataCard>
    </Row>
    <Row>
      <DataCard>
        <H4>Payback Years</H4>
        <P>{paybackYears} yrs</P>
      </DataCard>
      <DataCard>
        <H4>IRR</H4>
        <P>{iRR}%</P>
      </DataCard>
      <DataCard>
        <H4>Lifetime revenue</H4>
        <P>${convertedNumber(lifetimeRevenue)}</P>
      </DataCard>
    </Row>
  </Card>
)}

class DesignForm extends Component {
  render(){
    return(
      <Subscribe to={[MaxPanelsContainer]}>
        {container => (
        <Zone>
          <div className="firstSection">
           <Card>
                  <div>
                    How much was your CPS bill last month?
                    <Slider name={'monthlyBillSlider'}/>
                     last month bill = ${container.state.lastMonthBill}
                  </div>
           </Card>
           <Card>
                 <div>
                   Number of Panels
                   <Slider name={'panelSlider'}/>
                   Max number of panels you can purchase = {container.state.maxPanels}* <br />
                   <P>*Based on monthly estimate, cannot go over 120% electricity usage</P>
                 </div>
           </Card>
           <Card className='panelCart'>
             <PanelCart />
           </Card>
          </div>

          <div className="secondSection">
            <DataComponent data={container}/>
            <CostComponent data={container}/>
          </div>
          <EnviromentComponent data={container}/>
          <ContactForm />
        </Zone>
        )}
      </Subscribe>
    )
  }
}

export default DesignForm
