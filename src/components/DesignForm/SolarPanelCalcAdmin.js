import React, { Component } from 'react'
import styled from 'styled-components'

const Zone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AdminZone = styled.div`
  display: flex;
  flex-direction: column;
   align-items: center;
`;
const CustomerZone = styled.div`
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
      maxPanels: 0,
      isMonthly: false,
      isAverage: true,
    }
    this._handleAverage = this._handleAverage.bind(this);
    this._handleMonthly = this._handleMonthly.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleAverage(){
    this.setState({
      isMonthly: false,
      isAverage: true,
    });
  }

  _handleMonthly(){
    this.setState({
      isMonthly: true,
      isAverage: false,
    });
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
      maxPanels: calc,});
    console.log(calc);
  }

  render(){
    return(
      <form>
        <Zone>
        <AdminZone>
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
        </AdminZone>

        <CustomerZone>
          <h1>Customer</h1>
          <p>Input that the customer will be inputting and changing</p>

          {/* <button type="button"
            onClick={this._handleMonthly}
            >Calculate Monthly</button>
          <button type="button"
            onClick={this._handleAverage}
            >Calculate Average</button> */}
          <label>
            Average Monthly Bill ($):
            { this.state.isAverage &&
              <input
                name="AvgMonthlyBill"
                type="number"
                onChange={this._handleChange}
                defaultValue={this.state.AvgMonthlyBill}
              />
            }
            {/* { this.state.isMonthly &&
              <input
                name="AvgMonthlyBill"
                type="number"
                onChange={this._handleChange}
                defaultValue={this.state.AvgMonthlyBill}
              />
            } */}
          </label>
        </CustomerZone>

        <button type="button"
          onClick={this._handleSubmit}>Calc</button>

        <h4>{this.state.maxPanels}# of panels you should purchase for a {this.state.MaxProductionAllowed}% save</h4>
        </Zone>
      </form>
    )
  }

}

export default SolarPanelCalc;
