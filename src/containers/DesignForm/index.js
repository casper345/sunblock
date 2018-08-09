import React, { Component } from 'react'
import styled from 'styled-components'

import Color from '../../constants/Color'

import { H3, H4, P } from '../../components/StyledHeading'
import Button from '../../components/Button'
import SelectField from '../../components/SelectField'

const Container = styled.div`
  width: 80%;
  margin-top: 5%;
  @media(max-width: 600px) {
    width: 90%;
  }
`;
const Section = styled.div`
`;
const ButtonContainer = styled.div`
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

class DesignForm extends Component {
  constructor(){
    super();
    this.state = {
      BuildingType: '',
      isCpsCustomer: null,
      hasCPSPortal: null,
      AvgMonthlyBill: 0,
      MaxPanels: 20,
      RequestedPanels: this.MaxPanels,
    } ;
    this._handleIsCPSCustomer = this._handleIsCPSCustomer.bind(this);
    this._handleIsNotCPSCustomer = this._handleIsNotCPSCustomer.bind(this);
    this._handleBuildingTypeSelection = this._handleBuildingTypeSelection.bind(this);
    this._handleCPSPortal = this._handleCPSPortal.bind(this);
  }

  _handleIsCPSCustomer(){
    this.setState({isCpsCustomer: true})
  }

  _handleIsNotCPSCustomer(){
    this.setState({
      isCpsCustomer: false,
      hasCPSPortal: false,
    })
  }

  _handleBuildingTypeSelection(){

  }

  _handleCPSPortal(){
    this.setState({hasCPSPortal: true})
  }


  render(){
    const isCpsCustomer = this.state.isCpsCustomer;
    const hasCPSPortal = this.state.hasCPSPortal;

    return(
      <Container>
         <H3>1. Will Sunblock work for you?</H3>
         <P>The only requirement is that you are an active CPS Customer (ths San Antonio power utility). It doesn't matter if you rent or own a home, apartment, or commercial property.</P>
         <Button onClick={this._handleIsCPSCustomer}>Yes, I am a CPS customer</Button>
         <Button onClick={this._handleIsNotCPSCustomer}>No, I am not a CPS customer</Button>

         <Section>
           <H3>2. Let's find out how much solar energy you need</H3>
           <SelectField
             selections=""
             images=""
             title="I'm considering solar for..."
           />
           <ButtonContainer>
             <Column>
               <P>YES, I can access the CPS portal</P>
               <Button>Get your usage</Button>
             </Column>
             <Column>
               <P>NO, I can't get to CPS online</P>
               <Button onClick={this._handleCPSPortal}>Provide an estimate</Button>
             </Column>
           </ButtonContainer>
         </Section>

         <Section>
           <H3>3. Customize Your Sunblock</H3>
           <Button>Request a demo</Button>
         </Section>

      </Container>
    )
  }
}

export default DesignForm
