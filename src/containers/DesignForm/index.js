import React, { Component } from 'react'
import styled from 'styled-components'

import Color from '../../constants/Color'

import SolarPanelCalc from '../../containers/SolarPanelCalc'

import { H2, P } from '../../components/StyledHeading'
import Button from '../../components/Button'
import Modal from '../../components/Modal'

const Container = styled.div`
  width: 80%;
  margin-top: 5%;
  @media(max-width: 600px) {
    width: 90%;
  }
`;
const Section = styled.div`
  margin-bottom: 8%;
`;
const ButtonContainer = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-top: 2%;
  padding-bottom: 2%;
  background-color: ${Color.lightGrey};
  @media(max-width: 600px) {
    flex-direction: column;
  }
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

function CPSCustomerWarning(props){
  if(!props.warn){
    return null;
  }
  return(
    <div>
      Sorry you have to be a CPS Customer for Sunblock. But check out Go Smart Solar app
    </div>
  )
}

class DesignForm extends Component {
  constructor(){
    super();
    this.state = {
      secondSectionEnabled: false,
      thirdSectionEnabled: false,
      BuildingType: '',
      isCpsCustomer: null,
      hasCPSAccess: null,
      AvgMonthlyBill: 0,
      modalVisible: false,
    } ;
    this._handleIsCPSCustomer = this._handleIsCPSCustomer.bind(this);
    this._handleHasCPSAccess = this._handleHasCPSAccess.bind(this);
    this._handleModalClose = this._handleModalClose.bind(this);
  }

  _handleIsCPSCustomer(event){
    let buttonId = event.target.id
    let requirementFulfilled = (buttonId == 'IS_CUSTOMER') ? true : false
    if(!requirementFulfilled){
      alert('Sorry you have to be a CPS Customer for Sunblock')
    }
    this.setState({
      isCpsCustomer: requirementFulfilled,
      secondSectionEnabled: true,
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
    })
  }

  render(){
    const isCpsCustomer = this.state.isCpsCustomer;
    const hasCPSAccess = this.state.hasCPSAccess;
    const thirdSectionEnabled = this.state.thirdSectionEnabled;

    return(
      <Container>
        <Section>
         <H2>1. Will Sunblock work for you?</H2>
         <P>The only requirement is that you are an active CPS Customer (ths San Antonio power utility). It doesn't matter if you rent or own a home, apartment, or commercial property.</P>
         <Button id={'IS_CUSTOMER'}
           onClick={this._handleIsCPSCustomer}>Yes, I am a CPS customer</Button>
         <Button
           id={'NOT_CUSTOMER'}
           onClick={this._handleIsCPSCustomer}>No, I am not a CPS customer</Button>
         </Section>

         <Section>
           <H2>2. Let's find out how much solar energy you need</H2>
           <ButtonContainer>
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
           </ButtonContainer>
           {(() => {
                switch(hasCPSAccess) {
                  case 'HAS_ACCESS':
                    return <Modal
                    modalVisible={this.state.modalVisible}
                    handleClose={this._handleModalClose}
                    ><p>HAS_ACCESS</p></Modal>;
                  case 'NO_ACCESS':
                    return <Modal modalVisible={this.state.modalVisible}
                    handleClose={this._handleModalClose}><p>NO_ACCESS</p></Modal>;
                  default:
                    return null;
                }
            })()}
         </Section>

         <Section>
           {
             thirdSectionEnabled &&
             <div>
               <H2>3. Customize Your Sunblock</H2>
               <SolarPanelCalc />
             </div>
           }
         </Section>

      </Container>
    )
  }
}

export default DesignForm
