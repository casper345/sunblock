import React from 'react'
import styled from 'styled-components'
import { Subscribe } from 'unstated'
import NativeSelect from '@material-ui/core/NativeSelect';

import MaxPanelsContainer from '../containers/MaxPanelsContainer'

const Zone = styled.div`

`

const BuildingSelection = () => {
  return(
    <Subscribe to={[MaxPanelsContainer]}>
      {container => (
        <Zone>
          <NativeSelect
            value={container.state.buyerType}
            onChange={container.selectionChange}
            name="age"
          >
            <option value={'commercial'}>Commercial</option>
            <option value={'residential'}>Residential</option>
            <option value={'nonprofit'}>Non Profit</option>
          </NativeSelect>
        </Zone>
      )}
    </Subscribe>
  )
}

export default BuildingSelection
