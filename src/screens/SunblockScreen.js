import React, { Component } from 'react'
import styled from 'styled-components'

import Card from '../components/Card'
import Box from '../components/Box'
import { H1, H2, H3 } from '../components/StyledHeading'

const Zone = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5%;
  padding-bottom: 5%;
  text-align: center;
`;
const Section = styled.div`
  padding: 4% 0;
  .boxZone {
    display: flex;
    flex-direction: row;
  }
`


class SunblockScreen extends Component {
  render(){
    return(
      <Zone>
        <h1>Watch This Video to See!</h1>
        <video src={'https://www.youtube.com/watch?v=xGKwn1oVy-4'} />
        <Section>
          <H2>Sunblock is a better investment than rooftop solar</H2>
          <H3>Setting up SunBlock is easy. A quick 3 Step Process that can get your investment started!</H3>
          <div className="boxZone">
            <Box
              icon={require('../assets/images/instagram.png')}
              title={'Easy To Use'}
              content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
            />
            <Box
              icon={require('../assets/images/instagram.png')}
              title={'Easy To Use'}
              content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
            />
            <Box
              icon={require('../assets/images/instagram.png')}
              title={'Easy To Use'}
              content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
            />
            <Box
              icon={require('../assets/images/instagram.png')}
              title={'Easy To Use'}
              content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
            />
          </div>
        </Section>
      </Zone>
    )
  }
}

export default SunblockScreen
