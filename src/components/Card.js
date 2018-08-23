import React from 'react'
import styled from 'styled-components'

const Zone = styled.div`
  min-width: 200px;
  margin: 1%;
  padding: 3%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  background-color: white;
  }
  @media(max-width: 700px){
    width: 90%;
  }
  @media(max-width: 500px){
    width: 100%;
    margin: 0%;
    box-shadow: 0px 0px 0px 0px grey;
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Card = ({ title, subtitle, children }) =>
<Zone>
  <Content>
    {children}
  </Content>
</Zone>

export default Card
