import React, { Component } from 'react'
import styled from 'styled-components'
import { Subscribe } from 'unstated'

import MaxPanelsContainer from '../../containers/MaxPanelsContainer'

import Color from '../../constants/Color'

import SolarPanelCalc from './SolarPanelCalc'

import { H2, P } from '../StyledHeading'
import Button from '../Button'
import Modal from '../Modal'
import Card from '../Card'
import BuildingSelection from '../BuildingSelection'
import Slider from '../Slider'

const Zone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .validCpsCustomerButtonZone {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const ButtonZone = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-top: 2%;
  padding-bottom: 2%;
  @media(max-width: 500px) {
    flex-direction: column;
  }
  p {
    margin-bottom: 10px;
  }
  .buttonZoneColumn {
    margin: 3%;
    padding: 4%;
    background-color: ${Color.grey};
  }
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

function CPSCustomerWarning(props){
  const isCustomer = props.isCPSCustomer == null || props.isCPSCustomer
  return !isCustomer && <P>Sorry you have to be a CPS Customer for Sunblock. But check out <a href="https://app.gosmartsolar.com">Go Smart Solar App</a>. You can still play around on designing so you can see the advantages of Sunblock are!</P>
}

class DesignForm extends Component {
  constructor(){
    super();
    this.state = {
      thirdSectionEnabled: true,
      isCpsCustomer: null,
      hasCPSAccess: null,
      modalVisible: false,
      orderModalVisible: false,
    } ;
    this._handleIsCPSCustomer = this._handleIsCPSCustomer.bind(this);
    this._handleHasCPSAccess = this._handleHasCPSAccess.bind(this);
    this._handleModalClose = this._handleModalClose.bind(this);
    this._handleOrderModal = this._handleOrderModal.bind(this);
  }

  _handleIsCPSCustomer(event){
    let buttonId = event.target.id
    let requirementFulfilled = (buttonId === 'IS_CUSTOMER') ? true : false
    if(!requirementFulfilled){

    }
    this.setState({
      isCpsCustomer: requirementFulfilled,
    })
  }

  _handleHasCPSAccess(event){
    let buttonId = event.target.id
    this.setState({
      hasCPSAccess: buttonId,
      modalVisible: true,
    })
  }

  _handleOrderModal(){
    this.setState({
      orderModalVisible: true,
    })
  }

  _handleModalClose(){
    this.setState({
      modalVisible: false,
      orderModalVisible: false,
      thirdSectionEnabled: true,
    })
  }

  render(){
    const hasCPSAccess = this.state.hasCPSAccess;
    const thirdSectionEnabled = this.state.thirdSectionEnabled;

    return(
      <Zone>
          <Card>
            <H2>Will Sunblock work for you?</H2>
            <P>The only requirement is that you are an active CPS Customer (ths San Antonio power utility). It doesn't matter if you rent or own a home, apartment, or commercial property.</P>
            <div className="validCpsCustomerButtonZone">
              <Button id={'IS_CUSTOMER'}
                onClick={this._handleIsCPSCustomer}>Yes, I am a CPS customer</Button>
                <Button
                  id={'NOT_CUSTOMER'}
                  onClick={this._handleIsCPSCustomer}>No, I am not a CPS customer</Button>
                </div>
                <CPSCustomerWarning isCPSCustomer={this.state.isCpsCustomer} />
          </Card>
          <Card>
            <BuildingSelection />
          </Card>
         <Card>
           <H2>Let's find out how much solar energy you need</H2>
           <P>See if you have access to your CPS portal</P>
           <ButtonZone>
             <Column className="buttonZoneColumn">
               <P>YES, I can access the CPS portal</P>
               <Button
                 id={'HAS_ACCESS'}
                 onClick={this._handleHasCPSAccess}>Get your usage</Button>
             </Column>
             <Column className="buttonZoneColumn">
               <P>NO, I can't get to CPS online</P>
               <Button
                 id={'NO_ACCESS'}
                 onClick={this._handleHasCPSAccess}>Provide an estimate</Button>
             </Column>
           </ButtonZone>
           {(() => {
                switch(hasCPSAccess) {
                  case 'HAS_ACCESS':
                    return <Modal
                    modalVisible={this.state.modalVisible}
                    handleClose={this._handleModalClose}
                    ><h3>Upload Your CPS file here</h3></Modal>;
                  case 'NO_ACCESS':
                    return (<Subscribe to={[MaxPanelsContainer]}>
                      {container => (
                        <div>
                        <Modal modalVisible={this.state.modalVisible}
                          handleClose={this._handleModalClose}>
                          <h3>What was your estimated energy bill last month?</h3>
                          <label name="avgMonthlyBill">Average Monthly Bill $:</label>
                          <input name="avgMonthlyBill" type="number" onChange={container.setAverageMonthlyBill} defaultValue={container.state.averageMonthlyBill}/></Modal>
                         </div>
                      )}
                  </Subscribe>
                  );
                  default:
                    return null;
                }
            })()}
            <Subscribe to={[MaxPanelsContainer]}>
              {container => (
                <div>
                  Adjust your monthly estimate of ${container.state.averageMonthlyBill} with the slider
                  <Slider name={'monthlyBillSlider'}/>
                  <Button
                    onClick={container.calcMaxPanels}>Calculate your Sunblock!</Button>
                </div>
              )}
            </Subscribe>
         </Card>

           { thirdSectionEnabled &&
             <Card>
               <div>
                   <H2>Customize Your Sunblock</H2>
                     <SolarPanelCalc />
                   <Button className="orderButton"
                     onClick={this._handleOrderModal}>Order your panels now</Button>
                   <Modal modalVisible={this.state.orderModalVisible}
                     handleClose={this._handleModalClose}>
                     <H2>Order Your Panels Right now!</H2>
                       <P>Complete the information to Get Started</P>
                       <Row>
                       <label>First Name:</label>
                       <input name="name" type="text" />
                       </Row>
                       <Row>
                       <label>Last Name:</label>
                       <input name="name" type="text" />
                       </Row>
                       <Row>
                       <label>Email:</label>
                       <input name="name" type="text" />
                       </Row>
                       <Row>
                         <Button>Down Payment Plan</Button>
                         <Button>Finacing Plan</Button>
                         <Button>Schedule a Call</Button>
                       </Row>
                  </Modal>
                </div>
              </Card>
           }

      </Zone>
    )
  }
}

export default DesignForm
