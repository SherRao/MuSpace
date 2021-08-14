import React from "react";
import Styled from "styled-components";

import {MiniTopCategory} from  "@atoms";

const StyledDiv = Styled.div`
    display: flex;
    background-color: ${props => props.theme.colors.white};
    flex-direction: column;
    min-width: max-content;
    justify-content: space-evenly;
    border-radius: 12px;
    filter: drop-shadow(0 4px 4px rgba(0,0,0,0.3));
    padding: 10px;
    margin: 0 0.3em 0.6em 0.3em;
`;

const StyledText = Styled.p`
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

function TopArtists({ spotifyData }) {
    return (
        <StyledDiv>
            <StyledText>Your Top Artists</StyledText>
            <StyledOuterDiv>
                {console.log(spotifyData)}
                {
                    spotifyData && spotifyData.topArtists && spotifyData.topArtists.length > 0
                        ? spotifyData.topArtists.slice(0, 3).map((artist, i) => 
                            <MiniTopCategory
                                key={i}
                                text={artist.name}
                                album_picture={artist.image}
                            />)
                        : null
                }
            </StyledOuterDiv>
        </StyledDiv>
    );
}

export default TopArtists;