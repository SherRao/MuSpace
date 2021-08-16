import React from "react";
import Styled from "styled-components";

import { Card, LeaderBoardLabel, LeaderBoardStat } from "@atoms"; 
import { Firebase } from "@functions";

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
    let profile_picture = "https://firebasestorage.googleapis.com/v0/b/muspace.appspot.com/o/default_profile.jpg?alt=media&token=03e7bd33-eb4c-4299-b07c-5ec5102bdb3b";

    return (
        <Card>
            <StyledTitle>Leaderboard</StyledTitle>
            <StyledInnerDiv>
                <LeaderBoardLabel text="Top Listening Hours:"/>
                <StyledInnerDiv>
                    {
                        friends.length > 0
                            ? friends.slice(0, 3).map(({ username, profile_picture, spotifyData }, i) => {
                                return <LeaderBoardStat
                                    key={i}
                                    number={i+1}
                                    username={username}
                                    score="..."
                                    link="/"
                                    profile_picture={profile_picture}
                                />;
                            })
                            : <NoFriends>You have not added any friends yet.</NoFriends>
                    }
                </StyledInnerDiv>
                <LeaderBoardLabel text="Number of Unique Artists:"/>
                <StyledInnerDiv>
                    {
                        friends.length > 0
                            ? friends.slice(0, 3).map(({ username, profile_picture, spotifyData }, i) => {
                                return <LeaderBoardStat
                                    key={i}
                                    number={i+1}
                                    username={username}
                                    score="..."
                                    link="/"
                                    profile_picture={profile_picture}
                                />;
                            })
                            : <NoFriends>You have not added any friends yet.</NoFriends>
                    }
                </StyledInnerDiv>
            </StyledInnerDiv>
        </Card>
    );
}

export default LeaderBoard;