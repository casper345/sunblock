import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import LogoIcon from '../assets/images/logo.png';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width:700px){
    flex-direction: column;
    justify-content: center;
  }
`;
const Logo = styled.img`
  width: 80px;
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
  @media (max-width: 700px){
    justify-content: center;
  }
`;
const ListItem = styled.div`
  padding: 25px;
`;
const StyledLink = styled(Link)`
  font-size: .7rem;
  font-weight: 200;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
`;

const NavigationBar = () =>
  <Container>
    <Logo
      src={LogoIcon}
    />
    <List>
      <ListItem><StyledLink to ="/">Home</StyledLink></ListItem>
      <ListItem><StyledLink to ="/how-it-works">How it Works</StyledLink></ListItem>
      <ListItem><StyledLink to="/design-your-solar">Design Yours</StyledLink></ListItem>
      <ListItem><StyledLink to="/blog">Blog</StyledLink></ListItem>
      <ListItem><StyledLink to="/faq">FAQ</StyledLink></ListItem>
      <ListItem><StyledLink to="/admin">Admin</StyledLink></ListItem>
    </List>
  </Container>

export default NavigationBar;
