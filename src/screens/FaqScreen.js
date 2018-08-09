import React, { Component } from 'react'
import styled from 'styled-components'

import { H1, H4, P } from '../components/StyledHeading'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const List = styled.ol`
  width: 70%;
`;
const ListItem = styled.li`
  margin-bottom: 7%;
`;

class FaqScreen extends Component {
  render(){
    return(
      <Container>
        <H1>FAQ</H1>
        <List>
          <ListItem>
            <H4>What do we do when we must do what we need to do?</H4>
            <P>Question and Answers are the only ones that decide the Answers to our Questions. Who will solve these so that they can be solved</P>
          </ListItem>
          <ListItem>
            <H4>What do we do when we must do what we need to do?</H4>
            <P>Question and Answers are the only ones that decide the Answers to our Questions. Who will solve these so that they can be solved</P>
          </ListItem>
          <ListItem>
            <H4>What do we do when we must do what we need to do?</H4>
            <P>Question and Answers are the only ones that decide the Answers to our Questions. Who will solve these so that they can be solved</P>
          </ListItem>
          <ListItem>
            <H4>What do we do when we must do what we need to do?</H4>
            <P>Question and Answers are the only ones that decide the Answers to our Questions. Who will solve these so that they can be solved</P>
          </ListItem>
          <ListItem>
            <H4>What do we do when we must do what we need to do?</H4>
            <P>Question and Answers are the only ones that decide the Answers to our Questions. Who will solve these so that they can be solved</P>
          </ListItem>
        </List>
      </Container>
    );
  }
}

export default FaqScreen
