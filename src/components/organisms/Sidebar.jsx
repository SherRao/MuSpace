import React from "react";
import Styled from "styled-components";
import { SidebarButton, MuspaceLogo } from "@atoms";
import { UserButton } from "@atoms";
import { Firebase } from "@functions";
import { SpaceFillerDiv } from "@misc";

import { AiFillHome, AiFillHeart } from "react-icons/ai"; // home and friend button icon outline and fill
import { RiChat4Fill } from "react-icons/ri"; // message button icon outline and fill
import { FaBug } from "react-icons/fa"; // Report a bug button icon

const StyledDiv = Styled.div`
    width: 100%;
    height: 100%;
    padding: 0.4rem 0.4rem;

    background-color: ${(props) => props.theme.colors.white};
    border-right: 1px solid ${(props) => props.theme.colors.black};

    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.25s ease;
`;

const StyledText = Styled.h3`
    font-family: "Roboto";
    font-size: ${props => props.theme.fontSizes.mediumSmall};
    color: ${props => props.theme.colors.muSpacePurple};
    font-weight: bold;
    align: right;
    margin: 0.2rem;
`;

const StatNumber = Styled.h4`
    font-size: ${props => props.theme.fontSizes.mediumSmall};
    margin: 0.2rem 0.2rem 0.8rem 0.2rem;
    color: ${props => props.theme.colors.grey}
`;

function Sidebar() {
    const [profilePic, setProfilePic] = React.useState(null);

    const user = Firebase.auth.currentUser;
    const username = user ? user.displayName : "@username";

    /* React.useEffect(() => {
        if(!profilePic)
            getProfilePic();

    }, []); */

    async function getProfilePic() {
        const x = await Firebase.db.collection("users").doc(user.uid).get("profile_picture");
        setProfilePic(x);
    }

    return (
        <StyledDiv>
            <MuspaceLogo width="80%"/>

            <SidebarButton text="Home" location="/">
                <AiFillHome />
            </SidebarButton>
            <SidebarButton text="Friends" location="/friends">
                <AiFillHeart />
            </SidebarButton>
            <SidebarButton text="Messages" location="/messages">
                <RiChat4Fill />
            </SidebarButton>

            <SidebarButton text="Report a Bug" location="https://github.com/SherRao/MuSpace/issues/new">
                <FaBug/>
            </SidebarButton>

            <SpaceFillerDiv />

            <StyledText>Total Listening Time</StyledText>
            <StatNumber>120,560</StatNumber>
            <StyledText>Artists Liked</StyledText>
            <StatNumber>69,420</StatNumber>
            <StyledText>Albums Liked</StyledText>
            <StatNumber>1,560</StatNumber>

            <SpaceFillerDiv />

            <UserButton
                text={username}
                location="/settings"
                profileImage={profilePic}
            />
        </StyledDiv>
    );
}

export default Sidebar;
