import React from 'react'
import styled from 'styled-components'

import Color from '../constants/Color'

const Zone = styled.div`
  max-width: 900px;
  margin: 1%;
  padding: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 1px 1px 1px grey;
  background-color: white;
  }
  @media(max-width: 700px){
    width: 90%;
  }
  @media(max-width: 500px){
    width: 100%;
    margin: 0%;
    box-shadow: 0px 0px 0px 0px grey;
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Card = ({ title, subtitle, children }) =>
<Zone>
  <Content>
    {children}
  </Content>
</Zone>

export default Card
