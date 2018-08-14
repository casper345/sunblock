import React from 'react'
import styled from 'styled-components'

import Button from './Button'

const Container = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  section{
    position:fixed;
    z-index: 999999999;
    width: 50%;
    height: auto;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    padding: 20px;
    background: white;
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Modal = ({ handleClose, modalVisible, children}) => {
  return(
    modalVisible &&
    <Container>
      <section>
        <Content>
          {children}
          <Button onClick={handleClose}>close</Button>
        </Content>
      </section>
    </Container>
  )
}

export default Modal
