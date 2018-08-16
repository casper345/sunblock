import React from 'react'
import styled from 'styled-components'

import Color from '../constants/Color'

const Zone = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 2px solid;
  -moz-border-image: -moz-linear-gradient(to left, #F2C94C 0%,#F2C94C 25%,#F2C94C 50%,#F2994A 75%,#F2994A 100%);
  -webkit-border-image: -webkit-linear-gradient(to left, #F2C94C 0%,#F2C94C 25%,#F2C94C 50%,#F2994A 75%,#F2994A 100%);
  border-image: linear-gradient(to left, #F2C94C 0%,#F2C94C 25%,#F2C94C 50%,#F2994A 75%,#F2994A 100%);
  border-image-slice: 1;
`;
const Icon = styled.img`
  width: 25px;
  height: 25px;
  margin: 15px;
  margin-bottom: 0px;
`;
const EmailText = styled.p`
  font-size: .8rem;
  letter-spacing: 3px;
`;
const CopyrightText = styled.p`
  font-size: .5rem;
  color: rgb(113,113,106);
`;

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
  <SocialMedia />
  <EmailText>info@gosmartsolar.com</EmailText>
  <CopyrightText>&copy; 2018 Go Smart Solar, San Antonio TX</CopyrightText>
</Zone>

export default Footer;
