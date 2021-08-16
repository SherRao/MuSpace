import React from "react";
import Styled from "styled-components";

import {MiniTopCategory} from  "@atoms";

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
    width: auto;
    height: auto;
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
    align-items: flex-start;
`;

function TopSongs({ spotifyData }) {
    return (
        <StyledDiv>
            <StyledText>Your Top Songs</StyledText>
            <StyledOuterDiv>
                {
                    spotifyData && spotifyData.topSongs && spotifyData.topSongs.length > 0
                        ? spotifyData.topSongs.slice(0, 3).map((song, i) =>
                            <MiniTopCategory
                                key={i}
                                text={song.name}
                                artist={song.artist}
                                album_picture={song.image}
                                link={song.link}
                            />)
                        : null
                }
            </StyledOuterDiv>
        </StyledDiv>
    );
}

export default TopSongs;