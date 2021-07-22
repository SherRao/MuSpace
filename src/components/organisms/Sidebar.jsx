import React from "react";
import Styled from "styled-components";
import { SidebarButton, MuspaceLogo } from "@atoms";
import UserButton from "@atoms/UserButton";
import { Firebase } from "@functions";

import { AiFillHome, AiFillHeart } from "react-icons/ai"; // home and friend button icon outline and fill
import { RiChat4Fill } from "react-icons/ri"; // message button icon outline and fill
import { FaRobot } from "react-icons/fa"; // Report a bug button icon

const StyledDiv = Styled.div`
    width: 20%;
    height: 100vh; 
    padding: 0; 

    background-color: ${(props) => props.theme.colors.white};
    border-right: 1px solid ${(props) => props.theme.colors.black};

    display: inline-flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.25s ease;
`;

const StyledText = Styled.h1`
    font-family: "Roboto";
    font-size: ${props => props.theme.fontSizes.small};
    color: ${props => props.theme.colors.muSpacePurple};
    font-weight: bold;
    align: right;
    margin: 15px;

`;

function Sidebar() {
    const username = Firebase.auth.currentUser.displayName;
    const profilePicture = Firebase.auth.currentUser.photoURL;

    return (
        <StyledDiv>
            <br></br>
            <MuspaceLogo width="90%"/>

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
                <FaRobot/>
            </SidebarButton>

            <br/>
            <StyledText text="Total Listening Time"></StyledText>
            <StyledText text="Artists Liked"></StyledText>
            <StyledText text="Albums Liked"></StyledText>

            <UserButton
                text={username}
                location="/settings"
                profileImage={profilePicture}
            >
            </UserButton>
        </StyledDiv>
    );
}

export default Sidebar;
