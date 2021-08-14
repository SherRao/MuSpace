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
    font-size: ${props => props.theme.fontSizes.medium};
    color: ${props => props.theme.colors.muSpacePurple};
    font-weight: bold;
    align: right;
    margin: 0.2rem;
    text-align: center;
`;

const StatNumber = Styled.h4`
    font-size: ${props => props.theme.fontSizes.medium};
    margin: 0.2rem 0.2rem 0.8rem 0.2rem;
    color: ${props => props.theme.colors.grey}
`;

function Sidebar() {
    const [profilePicture, setProfilePicture] = React.useState(null);
    const [userName, setUserName] = React.useState(null);

    React.useEffect(async () => {
        if(!userName)
            setUserName(await Firebase.getUsername());

        if(!profilePicture)
            setProfilePicture(await Firebase.getProfilePicture());

    }, []);

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
                text={userName}
                location="/settings"
                profileImage={profilePicture}
            />
        </StyledDiv>
    );
}

export default Sidebar;
