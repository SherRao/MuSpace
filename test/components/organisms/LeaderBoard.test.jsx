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

function LeaderBoard({ text }){
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
                    <LeaderBoardStat number={1} username="username" hours={1337} href="/" src={profilePic}></LeaderBoardStat>
                    <LeaderBoardStat number={2} username="username" hours={420} href="/" src={profilePic}></LeaderBoardStat>
                    <LeaderBoardStat number={3} username="username" hours={69} href="/" src={profilePic}></LeaderBoardStat>
                </StyledInnerDiv>
                <LeaderBoardLabel text="Number of Unique Artists:"/>
                <StyledInnerDiv>
                    <LeaderBoardStat number={1} username="username" hours={96} href="/" src={profilePic}></LeaderBoardStat>
                    <LeaderBoardStat number={2} username="username" hours={69} href="/" src={profilePic}></LeaderBoardStat>
                    <LeaderBoardStat number={3} username="username" hours={69} href="/" src={profilePic}></LeaderBoardStat>
                </StyledInnerDiv>
            </StyledInnerDiv>
        </Card>
    );
}

export default LeaderBoard;