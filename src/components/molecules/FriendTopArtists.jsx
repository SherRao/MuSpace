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
    min-width: max-content;
`;

const NoFriends = Styled.p`
    font-size: ${props => props.theme.fontSizes.medium}
    font-color: ${props => props.theme.colors.black}
    text-align: center;
`;

function FriendTopArtists({ friends }) {
    return (
        <Card>
            <StyledTitle>Your Friends Top Artists</StyledTitle>
            <StyledOuterDiv>
                {
                    friends.length > 0
                    ? friends.slice(0, 3).map(({ username, spotifyData }, i) => {
                        const isTopArtist = spotifyData.topArtists && spotifyData.topArtists.length > 0;
                        const topArtist = isTopArtist ? spotifyData.topArtists[0] : null;
                        return <MiniTopCategory
                            key={i}
                            username={username}
                            text={isTopArtist ? topArtist.name : "#Title"}
                            artist={isTopArtist ? topArtist.artist : "#Artist" }
                            album_picture={isTopArtist ? topArtist.image : undefined}
                        />
                    })
                    : <NoFriends>You have not added any friends yet.</NoFriends>
                }
            </StyledOuterDiv>
        </Card>
    );
}

export default FriendTopArtists;