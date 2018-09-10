import React from 'react'
import styled from 'styled-components'

import city from '../../assets/images/city.png'

import { H4, P } from '../../components/StyledHeading'

const Process = () =>
<Zone>
  <Section>
    <CityImage src={city} />
    <ContentZone>
      <H4>1. Nothing on Your Roof</H4>
      <br/>
      <P>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore madna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulimaco lavoris nisi ut aliquip ex ea commuodo consequat</P>
    </ContentZone>
  </Section>
</Zone>

const Zone = styled.div`
  width: 80%;
  max-width: 750px;
  @media(max-width: 700px){
    width: 90%;
  }
`;
const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media(max-width: 600px){
    flex-wrap: wrap;
  }
`;
const ContentZone = styled.div`
  flex-direction: column;
  max-width: 600px;
  min-width: 300px;
`;
const CityImage = styled.img`
  max-width: 300px;
`;

export default Process;
