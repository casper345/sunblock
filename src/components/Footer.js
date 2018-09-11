import React from 'react'
import styled from 'styled-components'
import Color from '../constants/Color'
import GssIcon from '../assets/images/logo.png'
import SunblockIcon from '../assets/images/logo.png'
import CpsIcon from '../assets/images/cps.png'
import { H2, H3 } from './StyledHeading'
import Button from './Button'

const Zone = styled.div`
  width: 100vw;
  padding: 6.5% 0 2% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${Color.white};
  background-image: linear-gradient(${Color.secondaryColor}, ${Color.secondaryColor2});
`
const TopSection = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Icon = styled.img`
  max-width: 25px;
`
const CopyrightText = styled.p`
  font-size: .8rem;
`
const LogoContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  img {
    max-width: 100px;
    margin-bottom: 1.5%;
  }
  .logoSubtitle {
    font-weight: 300;
  }
`
const SponserContainer = styled.div`
  display: flex;
  flex-direction: column;
  img {
    margin-top: 5%;
    padding: 2%;
    width: 150px;
    height: 80px;
    border-radius: 5px;
    background-color: ${Color.white};
  }
`
const MenuLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  a {
    margin-top: 10%;
    color: ${Color.white};
    text-decoration: none;
    &:hover {
      color: ${Color.black};
      cursor: pointer
    }
  }
`
const CalltoActionContainer = styled.div`
  width: 30%;
  .callToActionSubtitle {
    margin: 3.5% 0;
  }
`
const FooterContainer = styled.div`
  width: 90%;
  margin-top: 3%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const SocialMedia = () =>
  <div>
    <a href="https://www.facebook.com/">
      <Icon src={require('../assets/images/telegram.png')} alt="Facebook Link"/>
    </a>
    <a href="https://www.instagram.com/">
      <Icon src={require('../assets/images/instagram.png')} alt="Instagram Link"/>
    </a>
    <a href="https://www.linkedin.com/">
      <Icon src={require('../assets/images/linkedin.png')} alt="LinkedIn Link"/>
    </a>
  </div>
const Footer = () =>
  <Zone>
    <TopSection>
      <LogoContainer className="section">
        <img
          src={SunblockIcon}
        />
        <H3 className="logoSubtitle">We are an environmentally conscious renewable energy company that offers the most eco-friendly, cost efficent and high-energy generating products and solutiopns on the solar panels market!</H3>
      </LogoContainer>
      <SponserContainer className="section">
        <img src={CpsIcon} />
        <img src={GssIcon} />
      </SponserContainer>
      <MenuLinkContainer className="section">
        <a href="">Home</a>
        <a href="">How It Works</a>
        <a href="">Design Your Solar</a>
        <a href="">FAQ</a>
      </MenuLinkContainer>
      <CalltoActionContainer className="section">
        <H2>Sign up today to pay less for your energy</H2>
        <H3 className="callToActionSubtitle">Hurry while there are still spots to reserve for SunBank</H3>
        <Button>Get Started</Button>
      </CalltoActionContainer>
    </TopSection>
    <FooterContainer>
      <CopyrightText>&copy; 2018 Go Smart Solar - Privacy Policy</CopyrightText>
      <SocialMedia />
    </FooterContainer>
  </Zone>

export default Footer;
