import styled from 'styled-components'
import Color from '../constants/Color'

const HorizontalLine = styled.div`
  margin: ${({margin}) => margin}% 0;
  width: ${({width}) => width}%;
  border-bottom: 1px solid ${({color}) => color};
`;

HorizontalLine.defaultProps = {
  width: 20,
  margin: 4,
  color: Color.primaryColor,
}

export default HorizontalLine
