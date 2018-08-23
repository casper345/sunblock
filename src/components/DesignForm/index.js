import React, { Component } from 'react'
import styled from 'styled-components'
import { Subscribe } from 'unstated'

import MaxPanelsContainer from '../../containers/MaxPanelsContainer'

import Color from '../../constants/Color'

import SolarPanelCalc from './SolarPanelCalc'

import { H2, P } from '../StyledHeading'
import Card from '../Card'
import Button from '../Button'
import Slider from '../Slider'
import PanelCart from '../PanelCart'

const Zone = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const EnviromentComponent = () =>
  <div></div>
const CostComponent = () =>
  <div></div>
const DataComponent = () =>
  <div></div>

class DesignForm extends Component {
  render(){
    return(
      <Zone>
        <Row>
          <Column>
         <Card>
            <Subscribe to={[MaxPanelsContainer]}>
              {container => (
                <div>
                  How much was your CPS bill last month?
                  <Slider name={'monthlyBillSlider'}/>
                   last month bill = ${container.state.averageMonthlyBill}
                </div>
              )}
            </Subscribe>
         </Card>
         <Card>
           <Subscribe to={[MaxPanelsContainer]}>
             {container => (
               <div>
                 Number of Panels
                 <Slider name={'panelSlider'}/>
                 Max number of panels you can purchase = {container.state.maxPanels}* <br />
                 *Based on monthly estimate
               </div>
             )}
           </Subscribe>
         </Card>
       </Column>
          <Card className='panelCart'>
            <PanelCart />
          </Card>
        </Row>
        <Button className="orderButton">Reserve your panels now</Button>
      </Zone>
    )
  }
}

export default DesignForm
