import React from "react";
import Styled from "styled-components";
import { SidebarButton, MuspaceLogo } from "@atoms";
//import { FaHome, FaUserFriends, FaEnvelope, FaSpotify } from "react-icons/fa";
import TestAtomComponent from "../atoms/TestAtomComponent";
import UserButton from "../atoms/UserButton";

import { AiFillHome, AiFillHeart } from "react-icons/ai"; // home and friend button icon outline and fill
import { RiChat4Fill } from "react-icons/ri"; // message button icon outline and fill
import { FaRobot } from "react-icons/fa"; // Report a bug button icon

import { testProfPic } from "@assets";

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

function Sidebar() {
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

            <br></br>
            <TestAtomComponent text="Total Listening Time"></TestAtomComponent>
            <TestAtomComponent text="Artists Liked"></TestAtomComponent>
            <TestAtomComponent text="Albums Liked"></TestAtomComponent>

            <UserButton
                text="@Username"
                location="/settings"
                profileImage={testProfPic}
            >
            </UserButton>
        </StyledDiv>
    );
}

export default Sidebar;
