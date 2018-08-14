import React, { Component } from 'react'
import styled from 'styled-components'
import { Provider } from 'unstated'

import Color from '../constants/Color'

import DesignForm from '../components/DesignForm/index'

import Card from '../components/Card'

const Zone = styled.div`
  height: 100vh;
  display: flex;
  padding-top: 5%;
  flex-direction: column;
  align-items: center;
  background: #F2994A;
  background: -webkit-linear-gradient(to bottom, #F2C94C, #F2994A);
  background: linear-gradient(to bottom, #F2C94C, #F2994A);
`;

class DesignScreen extends Component {

  render(){
    return(
      <Zone>
        <Card
          title={"Design Your Solar"}
          subtitle={"We want to make sure you are given the best option for this. If we find out that solar will not be a good invesement on your end, we will notify you."}
          >
          <DesignForm />
        </Card>
      </Zone>
    );
  }
}

export default DesignScreen
