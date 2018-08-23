import React, { Component } from 'react'
import styled from 'styled-components'

import cityImage from '../assets/images/city.png'

const Zone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;
  padding-bottom: 5%;
  text-align: center;
  img {
    max-width: 90%;
  }
`;

class SunblockScreen extends Component {
  render(){
    return(
      <Zone>
        <img src={cityImage} alt='Interactive City'/>
      </Zone>
    )
  }
}

export default SunblockScreen
