import React from 'react'
import styled from 'styled-components'

import { P } from './StyledHeading'

const Zone = styled.div``;

const SelectField = ({selections, images, title}) =>
<Zone>
  <P>{title}</P>
  <label>
    <input type="radio" value="option3" />
    Option 1
  </label>
  <label>
    <input type="radio" value="option3" />
    Option 1
  </label>
</Zone>

export default SelectField
