import React from "react";
import Styled from "styled-components";

import { Card, LeaderBoardLabel, LeaderBoardStat } from "@atoms"; 
import { Firebase } from "@functions";
import { DefaultProfilePic } from "@assets";

const StyledInnerDiv = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    width: 100%;
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

const NoFriends = Styled.p`
    font-size: ${props => props.theme.fontSizes.medium}
    font-color: ${props => props.theme.colors.black}
    text-align: center;
    margin-left: 0.6em;
`;

function LeaderBoard({ friends }){
    // const [profilePic, setProfilePic ] = React.useState(null);
    // const user = Firebase.auth.currentUser;
    
    // React.useEffect(() => {
    //     if(!profilePic)
    //         getProfilePic();

    // }, []);

    // async function getProfilePic() {
    //     const x = await Firebase.db.collection("users").doc(user.uid).get("profile_picture");
    //     setProfilePic(x);

    // }
    let profilePic = DefaultProfilePic;

    return (
        <Card>
            <StyledTitle>Leaderboard</StyledTitle>
            <StyledInnerDiv>
                <LeaderBoardLabel text="Top Listening Hours:"/>
                <StyledInnerDiv>
                    {
                        friends.length > 0
                        ? friends.slice(0, 3).map(({ username, spotifyData }, i) => {
                            const isTopArtist = spotifyData.topArtists && spotifyData.topArtists.length > 0;
                            const topArtist = isTopArtist ? spotifyData.topArtists[0] : null;
                            return <LeaderBoardStat
                                key={i}
                                number={i+1}
                                username={username}
                                hours="..."
                                href="/"
                                src={isTopArtist ? topArtist.image : undefined} // change to profile pic
                            />
                        })
                        : <NoFriends>You have not added any friends yet.</NoFriends>
                    }
                </StyledInnerDiv>
                <LeaderBoardLabel text="Number of Unique Artists:"/>
                <StyledInnerDiv>
                    {
                        friends.length > 0
                        ? friends.slice(0, 3).map(({ username, spotifyData }, i) => {
                            const isTopArtist = spotifyData.topArtists && spotifyData.topArtists.length > 0;
                            const topArtist = isTopArtist ? spotifyData.topArtists[0] : null;
                            return <LeaderBoardStat
                                key={i}
                                number={i+1}
                                username={username}
                                hours="..."
                                href="/"
                                src={isTopArtist ? topArtist.image : undefined} // change to profile pic
                            />
                        })
                        : <NoFriends>You have not added any friends yet.</NoFriends>
                    }
                </StyledInnerDiv>
            </StyledInnerDiv>
        </Card>
    );
}

export default LeaderBoard;