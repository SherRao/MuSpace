import React from "react";
import Styled from "styled-components";

const StyledText = Styled.p`
    font-family: "Roboto";
    font-size: ${props => props.theme.fontSizes.smallMedium};
    color: ${props => props.theme.colors.black};
    text-align: left;
    text-align: top;
    display: inline-flex;
    margin: 0.6em 0 0.2em 0;
`;

function LeaderBoardLabel({text}) {
    return (
        <StyledText>{text}</StyledText>
    );
}

export default LeaderBoardLabel;