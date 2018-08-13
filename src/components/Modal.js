import React from 'react'
import styled from 'styled-components'

import Button from './Button'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  section{
    position:fixed;
    background: white;
    width: 80%;
    height: auto;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }
`

const Modal = ({ handleClose, modalVisible, children}) => {
  return(
    modalVisible &&
    <Container>
      <section>
        {children}
        <Button onClick={handleClose}>close</Button>
      </section>
    </Container>
  )
}

export default Modal
