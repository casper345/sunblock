import React, { Component } from 'react'
import styled from 'styled-components'
import { Subscribe } from 'unstated'

import MaxPanelsContainer from '../../containers/MaxPanelsContainer'

import Color from '../../constants/Color'

import { H4, P } from '../StyledHeading'
import Card from '../Card'
import Button from '../Button'
import Slider from '../Slider'
import PanelCart from '../PanelCart'
import HorizontalLine from '../HorizontalLine'

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
  height: 50px;
  margin: 3%;
  padding: 1%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${Color.grey};
  border-radius: 10px;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const EnviromentComponent = props => {
  const { tree, carMileDriven, co2 } = props.data.state;
  return(
  <Card>
    <Row>
      <DataCard>
        {tree} trees
      </DataCard>
      <DataCard>
        {carMileDriven} miles driven
      </DataCard>
      <DataCard>
        {co2} CO2
      </DataCard>
    </Row>
  </Card>
)}

const CostComponent = props => {
  const { grossCost, cpseRebate, netBenefits, finalCost } = props.data.state;
  return(
  <Card>
    <Row>
      <H4>Gross cost $</H4>
      <P>{ grossCost }</P>
    </Row>
    <HorizontalLine width={100}/>
    <Row>
      <H4>CPSE Rebate ($)</H4>
      <P>{ cpseRebate }</P>
    </Row>
    <HorizontalLine width={100}/>
    <Row>
      <H4>Net Benefits $</H4>
      <P>{ netBenefits }</P>
    </Row> {/* commercial? */}
    <HorizontalLine width={100}/>
    <Row>
      <H4>Final Cost</H4>
      <P>{ finalCost }</P>
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
        <P>${annualSavings}</P>
      </DataCard>
      <DataCard>
        <H4>Average Monthly Credit</H4>
        <P>${averageMonthlyCredit}</P>
      </DataCard>
      <DataCard>
        <H4>Percent of Bill Offset</H4>
         <P>{percentOffset}%</P>
      </DataCard>
    </Row>
    <Row>
      <DataCard>
        <H4>Payback Years</H4>
        <P>{paybackYears} years</P>
      </DataCard>
      <DataCard>
        <H4>IRR</H4>
        <P>{iRR}%</P>
      </DataCard>
      <DataCard>
        <H4>Lifetime revenue</H4>
        <P>${lifetimeRevenue}</P>
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
                     last month bill = ${container.state.averageMonthlyBill}
                  </div>
           </Card>
           <Card>
                 <div>
                   Number of Panels
                   <Slider name={'panelSlider'}/>
                   Max number of panels you can purchase = {container.state.maxPanels}* <br />
                   *Based on monthly estimate
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
          <Button className="orderButton">Reserve your panels now</Button>
        </Zone>
        )}
      </Subscribe>
    )
  }
}

export default DesignForm
