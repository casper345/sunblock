import React, { Component } from 'react'
import styled from 'styled-components'
import HeroImage from '../../assets/images/solar2.jpg'
import Color from '../../constants/Color'
import Header from './Header'
import Process from './Process'
import BlockCards from './BlockCards'
import { H1, H3 } from '../../components/StyledHeading'

const Zone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${Color.lightBlue};
  .callToAction {
    width: 100vw;
    height: 400px;
    color: white;
    background-image: url(${HeroImage});
    background-color: ${Color.grey};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .overlay {
      background:rgb(59,89,152,0.85);
      overflow: hidden;
      height: 100%;
      z-index: 2;
    }
    .section {
      width: 60%;
      margin-top: 8%;
      margin-left: 5%;
      .subtitle {
        margin: 2% 0;
        font-weight: 300;
        line-height: 1.5rem;
      }
    }
  }
`
const ButtonZone = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 3%;
  a {
    width: 190px;
    margin: 3%;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 12px;
    border-radius: 2px;
    border: 1px solid  ${Color.primaryColor};
    background-color:  ${Color.primaryColor};
    color: white;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    &:hover{
      color:  ${Color.primaryColor};
      border: 1px solid  ${Color.primaryColor};
      background-color: transparent;
    }
  }
  .secondaryButton {
    border: 1px solid  ${Color.secondaryColor};
    background-color:  ${Color.secondaryColor};
    &:hover {
      color:  ${Color.secondaryColor};
      border: 1px solid  ${Color.secondaryColor};
    }
  }
  @media(max-width: 500px){
    flex-direction: column;
  }
`

class HomeScreen extends Component {
  render(){
    return(
      <Zone>
        <Header />
        <BlockCards />
        <Process />
        <div className="callToAction">
          <div className="overlay">
          <div className="section">
            <H1>Why choose Us and SunBank?</H1>
            <H3 className="subtitle">After years of experience and more than 500,00 people powered with the help of our solar panels, we think the choice is really obvious here!</H3>
            <ButtonZone>
              <a href="/how-gosmartsolar-sunblock-works" className="secondaryButton">See How it Works</a>
              <a href="/design-your-solar" className="secondaryButton">Design Solar for You</a>
            </ButtonZone>
          </div>
          </div>
        </div>
      </Zone>
    );
  }
}

export default HomeScreen
