import React, { Component } from 'react';

class SolarPanelCalc extends Component {
  render(){
    return(
      <div>
        <div>
          <h1>Admin</h1>
          <p>Input Go Smart Solar will be changing on the backend</p>
          <label>
            Production of 1 panel (kwh):
            <input></input>
          </label>
          <label>
            $ credit per kwh:
            <input></input>
          </label>
          <label>
            Max Production Allowed (percentage):
            <input></input>
          </label>
        </div>

        <div>
          <h1>Customer</h1>
          <p>Input that the customer will be inputting and changing</p>
          <label>
            Average Monthly Bill:
            <input></input>
          </label>
        </div>

        <h4>[MaxPanels]# of panels you should purchase for a [MaxProductionAllowed] percentage save</h4>
      </div>
    )
  }

}

export default SolarPanelCalc;
