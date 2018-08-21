import React from 'react'
import styled from 'styled-components'

const Zone = styled.div`
  width: 100%;
  padding-top: 20%;
  display: flex;
  flex-direction: colummn;
  align-items: center;
  justify-content: center;
`

const NotFoundScreen = () =>
<Zone>
  Sorry we cannot find your page!
</Zone>

export default NotFoundScreen
