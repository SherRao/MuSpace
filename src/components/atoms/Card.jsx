import React from 'react'
import Styled from 'styled-components'

const StyledDiv = Styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.white};
  border-radius: 12px;
  filter: drop-shadow(0 4px 4px rgba(0,0,0,0.3));
  padding: 10px;
  margin: 0.6em 0.3em;
`;

const Card = (props) => (
  <StyledDiv style={props.style}>
    {props.children}
  </StyledDiv>
)
export default Card;