import React from 'react'
import styled from 'styled-components'

import city from '../../assets/images/city.png'

import Color from '../../constants/Color'
import { H4, P } from '../../components/StyledHeading'

const BlockCards = () =>
<Zone>
  <Section className="backgroundColor1">
    <CityImage src={city} />
      <H4>Nothing on Your Roof</H4>
      <P>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore madna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulimaco lavoris nisi ut aliquip ex ea commuodo consequat</P>
  </Section>
  <Section className="backgroundColor2">
    <CityImage src={city} />
      <H4>Nothing on Your Roof</H4>
      <P>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore madna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulimaco lavoris nisi ut aliquip ex ea commuodo consequat</P>
  </Section>
  <Section className="backgroundColor3">
    <CityImage src={city} />
      <H4>Nothing on Your Roof</H4>
      <P>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore madna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulimaco lavoris nisi ut aliquip ex ea commuodo consequat</P>
  </Section>
  <Section className="backgroundColor4">
    <CityImage src={city} />
      <H4>Nothing on Your Roof</H4>
      <P>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore madna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulimaco lavoris nisi ut aliquip ex ea commuodo consequat</P>
  </Section>
</Zone>

const Zone = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  .backgroundColor1 {
    background-image: linear-gradient(${Color.primaryColor}, ${Color.primaryColor2});
  }
  .backgroundColor2 {
    background-image: linear-gradient(${Color.secondaryColor}, ${Color.secondaryColor2});
  }
  .backgroundColor3 {
    background-image: linear-gradient(${Color.primaryColor}, ${Color.primaryColor2});
  }
  .backgroundColor4 {
    background-image: linear-gradient(${Color.secondaryColor}, ${Color.secondaryColor2});
  }
`;
const Section = styled.div`
  padding: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CityImage = styled.img`
  max-width: 100px;
`;

export default BlockCards;
