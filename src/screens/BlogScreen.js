import React, { Component } from 'react'
import styled from 'styled-components'

import { H1 } from '../components/StyledHeading'

class ContactScreen extends Component {
  render(){
    return(
      <Zone>
        <H1>Contact Us</H1>
      </Zone>
    );
  }
}

const Zone = styled.div`
  display: flex;
  justify-content: center;
`;

export default ContactScreen;
