import React from 'react'
import styled from 'styled-components'
import city from '../../assets/images/city.png'
import { H2, P } from '../../components/StyledHeading'

const Zone = styled.div`
  width: 80%;
  max-width: 750px;
  margin: 5% 0;
  @media(max-width: 700px){
    width: 90%;
  }
`;
const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media(max-width: 600px){
    flex-wrap: wrap;
  }
`;
const ContentZone = styled.div`
  margin-left: 5%;
  flex-direction: column;
  max-width: 600px;
  min-width: 300px;
  #subtitle {
    margin-top: 3%;
    color: grey;
  }
`;
const CityImage = styled.img`
  max-width: 450px;
`;

const Process = () =>
<Zone>
  <Section>
    <CityImage src={city} />
    <ContentZone>
      <H2>Half of US homes don't work for traditional solar.*</H2>
      <H2>We are here to fix that.</H2>
      <P id='subtitle'>lorem ipsum dolor sit amet, consectetur adipiscing elitd tempor incididunt ut labore et dolore madna aliqua.</P>
    </ContentZone>
  </Section>
</Zone>

export default Process;
