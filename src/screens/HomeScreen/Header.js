import React from 'react'
import styled from 'styled-components'

import HeroImage from '../../assets/images/heroImage3.jpg'

import Color from '../../constants/Color'

import { H1, H3, P } from '../../components/StyledHeading'
import HorizontalLine from '../../components/HorizontalLine'

const Zone = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
`
const ImageBackground = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  background-image: url(${HeroImage});
  background-color: ${Color.grey};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
const Section = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media(max-width: 500px){
    padding-top: 10%;
  }
`
const Card = styled.div`
  width: 20%;
  max-width: 150px;
  min-width: 80px;
  margin: 0;
  padding: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  background-color: white;
  @media(max-width: 500px){
    width: 90%;
    max-width: 300px;
  }
`
const Row = styled.div`
  width: 80%;
  max-width: 750px;
  margin: -70px 0 0 0;
  z-index: 500;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media(max-width: 500px){
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
  }
`
const Icon = styled.img`
  width: 20%;
  height: 20%;
  margin: 10px;
`;

const Header = () =>
  <Zone>
    <ImageBackground>
      <Section>
        <H1>Solar for everyone. <br />On every block.</H1>
        <HorizontalLine margin={2}/>
        <H3>Nothing on Your Roof. <br /> Energy without the Worry.</H3>
      </Section>
    </ImageBackground>
    <Row>
      <Card>
        <Icon src={require('../../assets/images/instagram.png')} alt="Instagram Link"/>
        <P>Lower operating expenses equals higher profits and returns for your partners. Put solar to work for you and your shareholders.</P>
      </Card>
      <Card>
        <Icon src={require('../../assets/images/instagram.png')} alt="Instagram Link"/>
        <P>Lower operating expenses equals higher profits and returns for your partners. Put solar to work for you and your shareholders.</P>
      </Card>
      <Card>
        <Icon src={require('../../assets/images/instagram.png')} alt="Instagram Link"/>
        <P>Lower operating expenses equals higher profits and returns for your partners. Put solar to work for you and your shareholders.</P>
      </Card>
      <Card>
        <Icon src={require('../../assets/images/instagram.png')} alt="Instagram Link"/>
        <P>Lower operating expenses equals higher profits and returns for your partners. Put solar to work for you and your shareholders.</P>
      </Card>
    </Row>
  </Zone>

export default Header;
