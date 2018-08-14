import React, { Component } from 'react'
import styled from 'styled-components'
import { Provider } from 'unstated'

import Color from '../../constants/Color'

import SolarPanelCalc from './SolarPanelCalc'

import { H2, P } from '../../components/StyledHeading'
import Button from '../../components/Button'

const Zone = styled.div`
`;
const Section = styled.div`
  margin-bottom: 4%;
  .validCpsCustomerButtonZone {
    margin: 1rem;
    display: flex;
    justify-content: space-around;
    @media(max-width: 600px) {
      flex-direction: column;
      align-items: center;
    }
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
  background-color: ${Color.grey};
  @media(max-width: 600px) {
    flex-direction: column;
  }
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const ModalZone = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  section{
    position:fixed;
    z-index: 9999;
    width: 50%;
    height: auto;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    padding: 20px;
    background: white;
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Modal = ({ handleClose, modalVisible, children}) => {
  return(
    modalVisible &&
    <ModalZone>
      <section>
        <Content>
          {children}
          <Button onClick={handleClose}>submit</Button>
          <Button onClick={handleClose}>close</Button>
        </Content>
      </section>
    </ModalZone>
  )
}

function CPSCustomerWarning(props){
  const isCustomer = props.isCPSCustomer == null || props.isCPSCustomer
  return !isCustomer && <div>Sorry you have to be a CPS Customer for Sunblock. But check out Go Smart Solar app</div>
}

class DesignForm extends Component {
  constructor(){
    super();
    this.state = {
      thirdSectionEnabled: true,
      BuildingType: '',
      isCpsCustomer: null,
      hasCPSAccess: null,
      AvgMonthlyBill: 0,
      modalVisible: false,
    } ;
    this._handleIsCPSCustomer = this._handleIsCPSCustomer.bind(this);
    this._handleHasCPSAccess = this._handleHasCPSAccess.bind(this);
    this._handleModalClose = this._handleModalClose.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  _handleIsCPSCustomer(event){
    let buttonId = event.target.id
    let requirementFulfilled = (buttonId == 'IS_CUSTOMER') ? true : false
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

  _handleModalClose(){
    this.setState({
      modalVisible: false,
      thirdSectionEnabled: true,
    })
  }

  _handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: Number(value)});
  }

  render(){
    const AvgMonthlyBill = this.state.AvgMonthlyBill;
    const isCpsCustomer = this.state.isCpsCustomer;
    const hasCPSAccess = this.state.hasCPSAccess;
    const thirdSectionEnabled = this.state.thirdSectionEnabled;

    return(
      <Zone>
        <Section>
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
         </Section>

         <Section>
           <H2>Let's find out how much solar energy you need</H2>
           <ButtonZone>
             <Column>
               <P>YES, I can access the CPS portal</P>
               <Button
                 id={'HAS_ACCESS'}
                 onClick={this._handleHasCPSAccess}>Get your usage</Button>
             </Column>
             <Column>
               <P>NO, I can't get to CPS online</P>
               <Button
                 id={'NO_ACCESS'}
                 onClick={this._handleHasCPSAccess}>Provide an estimate</Button>
             </Column>
           </ButtonZone>
           <div className="monthlyAverage">
             Your Estimate Monthly Average is ${AvgMonthlyBill}
           </div>
           {(() => {
                switch(hasCPSAccess) {
                  case 'HAS_ACCESS':
                    return <Modal
                    modalVisible={this.state.modalVisible}
                    handleClose={this._handleModalClose}
                    ><h3>Upload Your CPS file here</h3></Modal>;
                  case 'NO_ACCESS':
                    return <Modal modalVisible={this.state.modalVisible}
                    handleClose={this._handleModalClose}><h3>What was your estimated energy bill last month?</h3><input name="AvgMonthlyBill" type="number" onChange={this._handleChange} defaultValue={this.state.AvgMonthlyBill}/></Modal>;
                  default:
                    return null;
                }
            })()}
         </Section>

         <Section>
           { thirdSectionEnabled &&
             <div>
               <H2>Customize Your Sunblock</H2>
                 <SolarPanelCalc
                   AvgMonthlyBill={AvgMonthlyBill}
                   isCpsCustomer={isCpsCustomer}
                 />
             </div> }
         </Section>

      </Zone>
    )
  }
}

export default DesignForm
