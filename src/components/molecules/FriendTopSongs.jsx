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

const NoFriends = Styled.p`
    font-size: ${props => props.theme.fontSizes.medium}
    font-color: ${props => props.theme.colors.black}
    text-align: center;
`;

function FriendTopSongs({ friends }) {
    return (
        <Card>
            <StyledTitle>Your Friends Top Songs</StyledTitle>
            <StyledOuterDiv>
                {
                    friends.length > 0
                    ? friends.slice(0, 3).map(({ username, spotifyData }, i) => {
                        const isTopSong = spotifyData.topSongs && spotifyData.topSongs.length > 0;
                        const topSong = isTopSong ? spotifyData.topSongs[0] : null;
                        return isTopSong
                            ? <MiniTopCategory
                                key={i}
                                username={username}
                                text={isTopSong ? topSong.name : "#Title"}
                                artist={isTopSong ? topSong.artist : "#Artist" }
                                album_picture={isTopSong ? topSong.image : undefined}
                            />
                            : null;
                    })
                    : <NoFriends>You have not added any friends yet.</NoFriends>
                }
            </StyledOuterDiv>
        </Card>
    );
}

export default FriendTopSongs;