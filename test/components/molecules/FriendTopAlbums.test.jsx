import React from "react";
import Styled from "styled-components";

import { Card, MiniTopCategory } from  "@atoms";

const StyledTitle = Styled.p`
    font-family: "Roboto";
    font-size: ${props => props.theme.fontSizes.mediumLarge};
    color: ${props => props.theme.colors.black};
    flex: 1;
    margin: 0 auto;
    text-align: top;
    text-align: left;
    font-weight: bold;
`;

const StyledOuterDiv = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 0.2em;
    min-width: max-content;
`;

function FriendTopAlbums() {
    return (
        <Card>
            <StyledTitle>Your Friends Top Albums</StyledTitle>
            <StyledOuterDiv>
                <MiniTopCategory username="#Username" text="#Album Title" artist="#Artist" />
                <MiniTopCategory username="#Username" text="#Album Title" artist="#Artist" />
                <MiniTopCategory username="#Username" text="#Album Title" artist="#Artist" />
            </StyledOuterDiv>
        </Card>
    );
}

export default FriendTopAlbums;