import styled from 'styled-components'
import Color from '../constants/Color'

const Button = styled.button`
  width: 190px;
  margin: 2%;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid ${({color}) => color};
  border-radius: 2px;
  background-color: ${({color}) => color};
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  &:hover{
    color: ${({color}) => color};
    border: 1px solid ${({color}) => color};
    background-color: transparent;
  }
`;

Button.defaultProps = {
  color: Color.primaryColor,
}

export default Button;
