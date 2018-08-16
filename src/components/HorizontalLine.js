import styled from 'styled-components'
import Color from '../constants/Color'

const HorizontalLine = styled.div`
  margin: 4% 0;
  width: ${({width}) => width}%;
  border-bottom: 1px solid ${({color}) => color};
`;

HorizontalLine.defaultProps = {
  width: 20,
  color: Color.primaryColor,
}

export default HorizontalLine
