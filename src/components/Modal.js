import React from 'react'
import styled from 'styled-components'
import { Subscribe } from 'unstated'

import MaxPanelsContainer from '../containers/MaxPanelsContainer'

import Color from '../constants/Color'

const Container = styled.div`
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  section{
    position:fixed;
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
const ModalButton = styled.button`
  position:fixed;
  height: auto;
  top: 15%;
  left: 95%;
  transform: translate(-50%,-50%);
  font-size: 16px;
  border: 1px solid ${Color.secondaryColor};
  border-radius: 50%;
  color: ${Color.secondaryColor};
`

const Modal = ({ handleClose, modalVisible, children}) => {
  return(
    modalVisible &&
    <Subscribe to={[MaxPanelsContainer]}>
      {container => (
        <Container>
          <section>
            <Content>
              {children}
              <ModalButton onClick={handleClose}>X</ModalButton>
            </Content>
          </section>
        </Container>
      )}
      </Subscribe>
  )
}

export default Modal
