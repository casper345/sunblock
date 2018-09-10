import React, { Component } from 'react'
import styled from 'styled-components'
import Color from '../../constants/Color'

import Card from '../Card'
import InputField from '../InputField'

const FormZone = styled.form`
  display: flex;
  flex-direction: column;
  button {
    margin: 2%;
    padding-top: 10px;
    padding-bottom: 10px;
    border: 1px solid ${Color.primaryColor};
    border-radius: 2px;
    background-color: ${Color.primaryColor};
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    &:hover{
      color: ${Color.primaryColor};
      border: 1px solid ${Color.primaryColor};
      background-color: transparent;
    }
  }
`

class ContactForm extends Component {
  constructor(){
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      zip: '',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = evt => {
    let name = evt.target.name
    let value = evt.target.value
    this.setState({
      [name]: value,
    })
  }

  render(){
    return (
      <Card>
        Reserve Your Panels
        <FormZone>
          <InputField
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={this.handleChange}
            value={this.state.firstName}
          />
          <InputField
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={this.handleChange}
            value={this.state.lastName}
          />
          <InputField
            type="email"
            placeholder="user@email.com"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <InputField
            type="tel"
            name="phone"
            placeholder="(555)555-5555"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            onChange={this.handleChange}
            value={this.state.phone}
          />
          <InputField
            type="number"
            name="zip"
            placeholder="78205"
            onChange={this.handleChange}
            value={this.state.zip}
          />
          <button type="submit">Submit</button>
        </FormZone>
      </Card>
    )
  }
}

export default ContactForm
