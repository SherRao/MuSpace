import React from "react";
import Styled from "styled-components";

const StyledText = Styled.h1`
    font-family: "Roboto";
    font-size: ${props => props.theme.fontSizes.small};
    color: ${props => props.theme.colors.muSpacePurple};
    font-weight: bold;
    align: right;
    margin: 15px;

`;


function TestAtomComponent({ text }) {
    return (
        <StyledText>{text}</StyledText>
    );
}

export default TestAtomComponent;