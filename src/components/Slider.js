import React from 'react'
import styled from 'styled-components'
import { Subscribe } from 'unstated'

import MaxPanelsContainer from '../containers/MaxPanelsContainer'

import SolarPanelImage from '../assets/images/solar.png'

const Zone = styled.div`
  display: flex;
  flex-direction: column;
  .solarImage{
    max-width: 50px;
    max-height: 50px;
  }
`
const ImageZone = styled.div`
  width: 90%;
  max-width: 500px;
  min-width: 200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  img {

  }
`

const EnhancedSlider = () => {
  return(
    <Subscribe to={[MaxPanelsContainer]}>
      {container => (
        <Zone>
          <ImageZone>
            {
              container.state.panelArray.map((panel, index) => <img key={index} className="solarImage"  src={SolarPanelImage} alt="Solar Panel"/>)
            }
          </ImageZone>
        </Zone>
      )}
    </Subscribe>
  )
}


export default EnhancedSlider
