import styled from 'styled-components'
import Color from '../constants/Color'

export const H1 = styled.h1`
  margin: 0;
  font-size: 48px;
  line-height: 1.25;
  font-weight: 300;
  @media (min-width: 43.75em) {
      ${'' /* font-size: 2.5em;
      line-height: 1.125; */}
  }
  @media (min-width: 56.25em) {
      ${'' /* font-size: 3em;
      line-height: 1.05; */}
  }
`;
export const H2 = styled.h2`;
  margin: 0;
  font-size: 1.625em;
  line-height: 1.15384615;
  font-weight: normal;
  @media (min-width: 43.75em) {
    ${'' /* font-size: 2em;
    line-height: 1.25; */}
  }
  @media (min-width: 56.25em) {
    ${'' /* font-size: 2.25em;
    line-height: 1.25; */}
  }
`;
export const H3 = styled.h3`
  margin: 0;
  font-size: 1.375em;
  line-height: 1.13636364;
  font-weight: normal;
  @media (min-width: 43.75em) {
    ${'' /* font-size: 1.5em;
    line-height: 1.25; */}
  }
  @media (min-width: 56.25em) {
    ${'' /* font-size: 1.75em;
    line-height: 1.25; */}
  }
`;
export const H4 = styled.h4`
  margin: 0;
font-size: 1.125em;
line-height: 1.11111111;
  @media (min-width: 43.75em) {
    ${'' /* line-height: 1.22222222; */}
  }
`;
export const P = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.25;
  @media (min-width: 43.75em) {
      ${'' /* font-size: 1.5em;
      line-height: 1.45833333; */}
    }
`;

P.defaultProps = {
  color: Color.primaryColor,
}
