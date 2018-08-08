import React from 'react'
import styled from 'styled-components'

import defaultImage from '../../assets/images/pokecenter.png'

import { H1, H3, H4 } from '../../components/StyledHeading'
import Row from '../../components/Row'
import Column from '../../components/Column'

const Header = () =>
  <Container>
    <Section>
      <H1>Solar for every home. On every block.</H1>
      <H3>NOTHING GOES ON YOUR ROOF. ENERGY WITHOUT THE WORRY</H3>
    </Section>
    <Row>
      <Column>
        <BoxImage src={defaultImage} />
        <H4>Work for any home with any food</H4>
      </Column>
      <Column>
        <BoxImage src={defaultImage} />
        <H4>Work for any home with any food</H4>
      </Column>
      <Column>
        <BoxImage src={defaultImage} />
        <H4>Work for any home with any food</H4>
      </Column>
      <Column>
        <BoxImage src={defaultImage} />
        <H4>Work for any home with any food</H4>
      </Column>
    </Row>
  </Container>

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
  margin-bottom: 5%;
  background-image: url('../../assets/images/background.jpg');
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;
const BoxImage = styled.img`
  max-width: 100px;
`;

export default Header;
