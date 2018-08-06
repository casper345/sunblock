import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
   align-items: center;
`;
const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
   align-items: center;
`;
const CustomerContainer = styled.div`
  display: flex;
  flex-direction: column;
   align-items: center;
`;


class SolarPanelCalc extends Component {
  constructor(){
    super();
    this.state = {
      AvgMonthlyBill: 200,
      MaxProductionAllowed: 120,
      CreditRate: .09,
      PerPanelProduction: 46.63,
      MaxPanels: 0,
    }
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(name);
    console.log(value);
    this.setState({[name]: Number(value)});
  }

  _handleSubmit(){
    let calc = (this.state.AvgMonthlyBill * (this.state.MaxProductionAllowed/100))/(this.state.CreditRate * this.state.PerPanelProduction);
    this.setState({
      MaxProductionAllowed: this.state.MaxProductionAllowed,
      MaxPanels: calc,});
    console.log(calc);
  }

  render(){
    return(
      <form>
        <Container>
        <AdminContainer>
          <h1>Admin</h1>
          <p>Input Go Smart Solar will be changing on the backend</p>
          <label>
            Production of 1 panel (kwh/month):
            <input
              name="PerPanelProduction"
              type="number"
              onChange={this._handleChange}
              defaultValue={this.state.PerPanelProduction}
            />
          </label>
          <label>
            Sunbloc Credt ($/kwh):
            <input
              name="CreditRate"
              type="number"
              onChange={this._handleChange}
              defaultValue={this.state.CreditRate}
            />
          </label>
          <label>
            Max Production Allowed (percentage):
            <input
              name="MaxProductionAllowed"
              type="number"
              onChange={this._handleChange}
              defaultValue={this.state.MaxProductionAllowed}
            />
          </label>
        </AdminContainer>

        <CustomerContainer>
          <h1>Customer</h1>
          <p>Input that the customer will be inputting and changing</p>
          <label>
            Average Monthly Bill ($):
            <input
              name="AvgMonthlyBill"
              type="number"
              onChange={this._handleChange}
              defaultValue={this.state.AvgMonthlyBill}
            />
          </label>
        </CustomerContainer>

        <button type="button"
          onClick={this._handleSubmit}>Calc</button>

        <h4>{this.state.MaxPanels}# of panels you should purchase for a {this.state.MaxProductionAllowed}% save</h4>
        </Container>
      </form>
    )
  }

}

export default SolarPanelCalc;
