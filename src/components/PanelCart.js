import React from 'react'
import styled from 'styled-components'
import { Subscribe } from 'unstated'

import PanelImage from '../assets/images/solar.png'

import MaxPanelsContainer from '../containers/MaxPanelsContainer'

const Zone = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  img {
    max-width: 30px;
    max-height: 30px;
  }
`

const PanelCart = () =>
<Zone>
  <Subscribe to={[MaxPanelsContainer]}>
    {container => (
      <div>
        {
          container.state.panelArray.map((panel, index) => <img key={index} className="solarImage"  src={PanelImage} alt="Solar Panel"/>)
        }
      </div>
    )}
  </Subscribe>
</Zone>

export default PanelCart
