import React, { Component } from 'react'
import styled from 'styled-components'

import Color from '../constants/Color'

import { H4, P } from '../components/StyledHeading'
import Card from '../components/Card'

const Zone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;
  padding-bottom: 5%;
  background-color: ${Color.grey}
`;
const List = styled.ol`
  width: 70%;
`;
const ListItem = styled.li`
  margin-bottom: 7%;
  list-style: none;
`;

class FaqScreen extends Component {
  render(){
    return(
      <Zone>
        <Card
          title={"FAQ"}
          >
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
        </Card>
      </Zone>
    );
  }
}

export default FaqScreen
