import React from 'react'
import styled from 'styled-components'
import { Subscribe } from 'unstated'
import HomeImage from '../assets/images/home.png'
import ApartmentImage from '../assets/images/apartment.png'
import CommercialImage from '../assets/images/commercial.png'

import MaxPanelsContainer from '../containers/MaxPanelsContainer'

import { H4 } from './StyledHeading'

const Zone = styled.div`
  margin: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  .inputZone {
    flex-direction: column;
  }
  label {
  }
  img {
    width: 25%;
    height: 25%;
  }
`

const BuildingSelection = () => {
  return(
    <Subscribe to={[MaxPanelsContainer]}>
      {container => (
        <Zone>
          <div className="inputZone">
            <H4>I'm considering solar for...</H4>
            <label>
              <input
                type="radio"
                value="home" checked={container.state.buildingType === "home"}
                onChange={container.buildingChange}
              />
                A Home
            </label>
            <br />
            <label>
              <input
                type="radio"
                value="apartment" checked={container.state.buildingType === "apartment"}
                onChange={container.buildingChange}
              />
              An Apartment
            </label>
            <br />
            <label>
              <input
                type="radio"
                value="commercial" checked={container.state.buildingType === "commercial"}
                onChange={container.buildingChange}
              />
              A Commercial Building
            </label>
          </div>
          {(() => {
            switch(container.state.buildingType) {
              case 'home':
                return <img src={HomeImage} />;
              case 'apartment':
                return <img src={ApartmentImage} />;
              case 'commercial':
                return <img src={CommercialImage} />;
              default:
                return <img src={HomeImage} />;
            }
          })()}
        </Zone>
      )}
    </Subscribe>
  )
}

export default BuildingSelection
