import React from 'react'
import styled from 'styled-components'

import solar from '../../assets/images/solar.svg'

import Color from '../../constants/Color'
import { H4, P } from '../../components/StyledHeading'
import HorizontalLine from '../../components/HorizontalLine'

const Zone = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  .backgroundColor1 {
    background-image: linear-gradient(#77D5F8, #50C9F6);
  }
  .backgroundColor2 {
    background-image: linear-gradient(#50C9F6, #15B8F5);
  }
  .backgroundColor3 {
    background-image: linear-gradient(#15B8F5, #27ADDF);
  }
  .backgroundColor4 {
    background-image: linear-gradient(#27ADDF, #239CC9);
  }
`;
const Section = styled.div`
  width: 25%;
  padding: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  .title {
    margin: 5% 0;
    font-weight: 200;
    text-transform: uppercase;
  }
`;
const Icon = styled.img`
  max-width: 80px;
`;

const BlockCards = () =>
<Zone>
  <Section className="backgroundColor1">
    <Icon src={solar} />
    <HorizontalLine color={Color.white}/>
    <H4 className="title">Nothing on Your Roof</H4>
  </Section>
  <Section className="backgroundColor2">
    <Icon src={solar} />
    <HorizontalLine color={Color.white}/>
    <H4 className="title">Calculate My Savings</H4>
  </Section>
  <Section className="backgroundColor3">
    <Icon src={solar} />
    <HorizontalLine color={Color.white}/>
    <H4 className="title">Installations: How it Works?</H4>
  </Section>
  <Section className="backgroundColor4">
    <Icon src={solar} />
    <HorizontalLine color={Color.white}/>
    <H4 className="title">Smart Data w/ Up-to-date</H4>
  </Section>
</Zone>

export default BlockCards
