import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import LogoIcon from '../assets/images/logo.png';

const Zone = styled.div`
  width: 100vw;
  position: fixed;
  z-index: 99999;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  border-bottom: 2px solid;
  -moz-border-image: -moz-linear-gradient(to left, #F2C94C 0%,#F2C94C 25%,#F2C94C 50%,#F2994A 75%,#F2994A 100%);
  -webkit-border-image: -webkit-linear-gradient(to left, #F2C94C 0%,#F2C94C 25%,#F2C94C 50%,#F2994A 75%,#F2994A 100%);
  border-image: linear-gradient(to left, #F2C94C 0%,#F2C94C 25%,#F2C94C 50%,#F2994A 75%,#F2994A 100%);
  border-image-slice: 1;
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
  <Zone>
    <Logo
      src={LogoIcon}
    />
    <List>
      <ListItem><StyledLink to ="/">Home</StyledLink></ListItem>
      <ListItem><StyledLink to ="/how-gosmartsolar-sunblock-works">How it Works</StyledLink></ListItem>
      <ListItem><StyledLink to="/design-your-solar">Design Yours</StyledLink></ListItem>
      <ListItem><StyledLink to="/blog">Blog</StyledLink></ListItem>
      <ListItem><StyledLink to="/faq">FAQ</StyledLink></ListItem>
    </List>
  </Zone>

export default NavigationBar;
