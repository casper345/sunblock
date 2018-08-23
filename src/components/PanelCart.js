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
    max-width: 20px;
    max-height: 20px;
  }
`

const PanelCart = () =>
<Zone>
  <Subscribe to={[MaxPanelsContainer]}>
    {container => (
      <div>
        Your cart has {container.state.panelArray.length} <br />
        {
          container.state.panelArray.map((panel, index) => <img key={index} className="solarImage"  src={PanelImage} alt="Solar Panel"/>)
        }
      </div>
    )}
  </Subscribe>
</Zone>

export default PanelCart
