import React from 'react'
import styled from 'styled-components'

import { H4, P } from './StyledHeading'

const Zone = styled.div`
  width: 20%;
  margin: 2%;
  padding: 2%;
  background-color: white;
  box-shadow: 1px 1px 1px 1px grey;
  text-align: center;
  img {
    width: 25%;
    height: 25%;
  }
`

const Box = ({icon, title, content}) =>
<Zone>
  <img src={icon} alt="placeholder" />
  <H4>{title}</H4>
  <P>{content}</P>
</Zone>

export default Box
