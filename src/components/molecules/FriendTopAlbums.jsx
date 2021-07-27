import React from "react";
import Styled from "styled-components";

import { AlbumCover, Card, MiniTopCategory, LeaderBoardLabel } from  "@atoms";

const StyledDiv = Styled.div`
    display: flex;
    background-color: ${props => props.theme.colors.white};
    flex-direction: column;
    width: min-content;
    justify-content: center;
    border-radius: 12px;
    filter: drop-shadow(0 4px 4px rgba(0,0,0,0.3));
    padding: 10px;
    margin: 0.6em 0.3em;
`;

const StyledText = Styled.p`
    font-family: "Roboto";
    font-size: ${props => props.theme.fontSizes.mediumMedium};
    color: ${props => props.theme.colors.black};
    flex: 1;
    margin: 0 auto;
    text-align: top;
    text-align: left;
    font-weight: bold;
`;

const StyledOuterDiv = Styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

function FriendTopAlbums() {
    return (
        <StyledDiv>
            <StyledText>Your Friend's Top Albums</StyledText>
            <StyledOuterDiv>
                <MiniTopCategory username = "#Username" text = "#Album Title" artist = "#Artist"></MiniTopCategory>
                <MiniTopCategory username = "#Username" text = "#Album Title" artist = "#Artist"></MiniTopCategory>
                <MiniTopCategory username = "#Username" text = "#Album Title" artist = "#Artist"></MiniTopCategory>
            </StyledOuterDiv>
        </StyledDiv>
    );
}

export default FriendTopAlbums;