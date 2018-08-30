import React from 'react'
import styled from 'styled-components'
import { Subscribe } from 'unstated'

import PanelImage from '../assets/images/solar.png'

import MaxPanelsContainer from '../containers/MaxPanelsContainer'

const Zone = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  img {
    margin: 2px;
    max-width: 15px;
    max-height: 15px;
  }
`

const PanelCart = () =>
<Zone>
  <Subscribe to={[MaxPanelsContainer]}>
    {container => (
      <div>
        Your cart has {container.state.panelArray.length} panels<br />
        {
          container.state.panelArray.map((panel, index) => <img key={index} className="solarImage"  src={PanelImage} alt="Solar Panel"/>)
        }
      </div>
    )}
  </Subscribe>
</Zone>

export default PanelCart
