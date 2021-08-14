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

function FriendTopSongs({ friends }) {
    return (
        <Card>
            <StyledTitle>Your Friends Top Songs</StyledTitle>
            <StyledOuterDiv>
                {friends.slice(0, 3).map(({ username, spotifyData }, i) =>
                    <MiniTopCategory
                        key={i}
                        username={username}
                        text={spotifyData.topSongs && spotifyData.topSongs.length > 0 ? spotifyData.topSongs[0].name : "#Title"}
                        artist={spotifyData.topSongs && spotifyData.topSongs.length > 0 ? spotifyData.topSongs[0].artist : "#Artist" }
                        album_picture={spotifyData.topSongs && spotifyData.topSongs.length > 0 ? spotifyData.topSongs[0].image : "null"}
                    />
                )}
            </StyledOuterDiv>
        </Card>
    );
}

export default FriendTopSongs;