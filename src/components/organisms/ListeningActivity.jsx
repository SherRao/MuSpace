import React from "react";
import Styled from "styled-components";

import { Card, TextButton } from "@atoms"; 
import { ListeningActivityCard } from "@molecules";

const StyledInnerDiv = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    width: 100%;
`;

const StyledTitle = Styled.p`
    font-size: ${props => props.theme.fontSizes.mediumLarge};
    color: ${props => props.theme.colors.black};
    margin: 0 auto;
    font-weight: bold;
`;

const NoFriends = Styled.p`
    font-size: ${props => props.theme.fontSizes.medium}
    font-color: ${props => props.theme.colors.black}
    text-align: center;
`;

function ListeningActivity({ friends }){
    return (
        <Card style={{ minWidth: "max-content", maxWidth: "100%" }}>
            <StyledTitle>Friend Listening Activity</StyledTitle>
            <StyledInnerDiv>
                {
                    friends && friends.length > 0
                    ? friends.slice(0, 4).map(({ username, spotifyData }, i) => {
                        const isRecentSong = spotifyData.recentSongs && spotifyData.recentSongs.length > 0;
                        const recentSong = isRecentSong ? spotifyData.recentSongs[0] : null;
                        return isRecentSong
                            ? <ListeningActivityCard
                                key={i}
                                username={username}
                                title={recentSong.title}
                                artist={recentSong.artist}
                                picture_url={recentSong.image}
                            />
                            : <ListeningActivityCard
                                key={i}
                                username={username}
                            />;
                    })
                    : <NoFriends>You have not added any friends yet.</NoFriends>
                }
                <TextButton text="See More" style={{ width: "100%", marginTop: "0.4rem" }} onClick={notImplemented}/>
            </StyledInnerDiv>
        </Card>
    );
}

function notImplemented(){
    alert("This feature has not been implemented yet!");
}

export default ListeningActivity;