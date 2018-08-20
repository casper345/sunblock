import React from 'react'
import styled from 'styled-components'
import Color from '../constants/Color'

import CowImage from '../assets/images/cow.png'
import CarImage from '../assets/images/car.png'
import TreeImage from '../assets/images/tree.png'

import { H4 } from '../components/StyledHeading'

const Zone = styled.div`
  display: flex;
  flex-direction: row;
`
const Column = styled.div`
  width: 30%;
  margin: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${Color.grey};
  border-radius: 10px;
  text-align: center;
  img {
    max-width: 30%;
  }
`

const Infographic = () =>
  <Zone>
    <Column>
      <img src={CowImage} alt="Cow"/>
      <H4>Adding</H4>
      <H4>200</H4>
      <H4>new trees</H4>
    </Column>
    <Column>
      <img src={TreeImage} alt="Cow"/>
      <H4>Adding</H4>
      <H4>200</H4>
      <H4>new trees</H4>
    </Column>
    <Column>
      <img src={CarImage} alt="Cow"/>
      <H4>Adding</H4>
      <H4>200</H4>
      <H4>new trees</H4>
    </Column>
  </Zone>

export default Infographic
