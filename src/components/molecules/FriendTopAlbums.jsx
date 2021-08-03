import React from "react";
import Styled from "styled-components";

import { Card, MiniTopCategory } from  "@atoms";

const StyledDiv = Styled.div`
    display: flex;
    background-color: ${props => props.theme.colors.white};
    flex-direction: column;
    min-width: max-content;
    justify-content: center;
    border-radius: 12px;
    filter: drop-shadow(0 4px 4px rgba(0,0,0,0.3));
    padding: 10px;
    margin: 0.6em 0.3em;
`;

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
`;

function FriendTopAlbums() {
    return (
        <Card>
            <StyledTitle>Your Friend's Top Albums</StyledTitle>
            <StyledOuterDiv>
                <MiniTopCategory username="#Username" text="#Album Title" artist="#Artist" />
                <MiniTopCategory username="#Username" text="#Album Title" artist="#Artist" />
                <MiniTopCategory username="#Username" text="#Album Title" artist="#Artist" />
            </StyledOuterDiv>
        </Card>
    );
}

export default FriendTopAlbums;