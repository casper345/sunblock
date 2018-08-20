import React, { Component } from 'react'
import styled from 'styled-components'

import FaqData from '../assets/faq'

import Color from '../constants/Color'

import { H1, H4, P } from '../components/StyledHeading'
import Card from '../components/Card'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Zone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;
  padding-bottom: 5%;
  background-color: ${Color.grey};
`;
const List = styled.ol`
  width: 70%;
`;

class FaqScreen extends Component {
  render(){
    return(
      <Zone>
        <Card>
          <H1>SunBlock FAQ</H1>
        <List>
          {
            FaqData.map((data) =>
            <div>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <H4>{data.question}</H4>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <P>
                  {data.answer}
                </P>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            </div>
            )
          }
        </List>
        </Card>
      </Zone>
    );
  }
}

export default FaqScreen
