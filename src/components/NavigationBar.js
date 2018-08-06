import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import LogoIcon from '../assets/images/logo.png';

import Color from '../constants/Color';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${Color.lightGrey};
  @media (max-width:700px){
    flex-direction: column;
    justify-content: center;
  }
`;
const Logo = styled.img`
  width: 60px;
  height: 60px;
  margin: 0;
  padding: 10px;
  @media (max-width:700px){
    align-self: center;
  }
`;
const List = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  @media (max-width: 700px){
    justify-content: center;
  }
`;
const ListItem = styled.div`
  padding: 25px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const NavigationBar = () =>
  <Container>
    <Logo
      src={LogoIcon}
    />
    <List>
      <ListItem><StyledLink to ="/">Home</StyledLink></ListItem>
      <ListItem><StyledLink to="/">Design Your Solar</StyledLink></ListItem>
      <ListItem><StyledLink to="/contact-us">Contact Us</StyledLink></ListItem>
    </List>
  </Container>

export default NavigationBar;
