import React from 'react'
import styled from 'styled-components'
import { Subscribe } from 'unstated'
import HomeImage from '../assets/images/home.png'
import ApartmentImage from '../assets/images/apartment.png'
import CommercialImage from '../assets/images/commercial.png'

import Color from '../constants/Color'

import MaxPanelsContainer from '../containers/MaxPanelsContainer'

import { H2, H4, P } from './StyledHeading'

const Zone = styled.div`
  display: flex;
  flex-direction: column;
  .buildingZone {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    @media(max-width: 500px){
      flex-direction: column;
    }
    .columnZone {
      max-width: 250px;
      padding: 3%;
      margin:  2%;
      cursor: pointer;
      border: 2px solid;
      -moz-border-image: -moz-linear-gradient(to left, #F2C94C 0%,#F2C94C 25%,#F2C94C 50%,#F2994A 75%,#F2994A 100%);
      -webkit-border-image: -webkit-linear-gradient(to left, #F2C94C 0%,#F2C94C 25%,#F2C94C 50%,#F2994A 75%,#F2994A 100%);
      border-image: linear-gradient(to left, #F2C94C 0%,#F2C94C 25%,#F2C94C 50%,#F2994A 75%,#F2994A 100%);
      border-image-slice: 1;
    }
  }
  img {
    width: 80%;
    height: 80%;
    @media(max-width: 500px){
      width: 30%;
    }
  }
`

const BuildingSelection = () => {
  return(
    <Subscribe to={[MaxPanelsContainer]}>
      {container => (
        <Zone>
          <H2>I'm considering solar for...</H2>
          <div className="buildingZone">
            <div className="columnZone">
              <img src={HomeImage} />
              <P>A Home</P>
            </div>
            <div className="columnZone">
              <img src={ApartmentImage} />
              <P>An Apartment</P>
            </div>
            <div className="columnZone">
              <img src={CommercialImage} />
              <P>A Commercial Building</P>
            </div>
          </div>
        </Zone>
      )}
    </Subscribe>
  )
}

export default BuildingSelection
