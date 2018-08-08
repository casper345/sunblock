import styled from 'styled-components'
import Color from '../constants/Color'

const Button = styled.button`
  width: 190px;
  margin: .5rem;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid ${Color.primaryColor};
  background-color: ${Color.primaryColor};
  color: white;
  text-transform: uppercase;
  &:hover{
    color: ${Color.primaryColor};
    border: 1px solid ${Color.primaryColor};
    background-color: white;
  }
`;

export default Button;
