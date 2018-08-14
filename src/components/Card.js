import React from 'react'
import styled from 'styled-components'

import Color from '../constants/Color'

const Container = styled.div`
  width: 80%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 2px 2px 2px grey;
  background-color: white;
  .header {
    width: 100%;
    padding: 4% 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: white;
    background-color: ${Color.primaryColor};
    .titleContainer {
      width: 70%;
    }
    h1 {
      margin: 0;
      margin-bottom: 3%;
      font-weight: 300;
      letter-spacing: 3px;
    }
    p {
      margin: 0;
      font-size: 14px;
      font-weight: 200;
      line-height: 20px;
    }
    @media(max-width: 500px){
      color: white;
      background: #F2994A;
      background: -webkit-linear-gradient(to bottom, #F2C94C, #F2994A);
      background: linear-gradient(to bottom, #F2C94C, #F2994A);
    }
  }
  @media(max-width: 700px){
    width: 90%;
  }
  @media(max-width: 500px){
    width: 100%;
  }
`
const Content = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
`

const Card = ({ title, subtitle, children }) =>
<Container>
  <div className={"header"}>
    <div className={"titleContainer"}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  </div>
  <Content>
    {children}
  </Content>
</Container>

export default Card
