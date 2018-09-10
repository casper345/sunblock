import React from 'react'
import styled from 'styled-components'

import HeroImage from '../../assets/images/carports.jpg'

import Color from '../../constants/Color'

import { H1, H3, H4, P } from '../../components/StyledHeading'
import HorizontalLine from '../../components/HorizontalLine'

const Zone = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ImageBackground = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: url(${HeroImage});
  background-color: ${Color.grey};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .overlay {
    background: rgba(0,0,0,0.55);
    overflow: hidden;
    height: 100%;
    z-index: 2;
  }
`
const Section = styled.div`
  padding: 2%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: ${Color.white};
  background-image: linear-gradient(${Color.secondaryColor}, ${Color.secondaryColor});
  .sunriseTitle {
    margin: 0 0 5px 0;
    font-weight: 200;
    letter-spacing: 5px;
    text-transform: uppercase;
  }
`

const Header = () =>
  <Zone>
    <ImageBackground>
      <div className="overlay">
        <Section>
          <h4 className="sunriseTitle">Sunbank</h4>
          <H1>Solar for everyone.<br /> On every block.</H1>
          <HorizontalLine width={100} margin={3} color={Color.white}/>
          <H3>Nothing on Your Roof. Energy without the Worry.</H3>
        </Section>
      </div>
    </ImageBackground>
  </Zone>

export default Header;
