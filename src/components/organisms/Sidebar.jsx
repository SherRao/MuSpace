import React from "react";
import Styled from "styled-components";
import { SidebarButton, MuspaceLogo } from "@atoms";
import { FaHome, FaUserFriends, FaEnvelope, FaSpotify } from "react-icons/fa";
import TestAtomComponent from "../atoms/TestAtomComponent";

const StyledDiv = Styled.div`
    width: 20%;
    height: 100vh;
    padding: 0;

    background-color: ${props => props.theme.colors.white};
    border-right: 1px solid ${props => props.theme.colors.black};

    display: inline-flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.25s ease;

`;

function Sidebar() {
    return (
        <StyledDiv>
            <br></br>
            <MuspaceLogo />
            <br></br>
            <SidebarButton text="Home" location="/" />
            <SidebarButton text="Friends"  location="/friends" />
            <SidebarButton text="Messages" location="/messages" />
            <br></br>
            <TestAtomComponent text="Total Listening Time"></TestAtomComponent>
            <TestAtomComponent text="Artists Liked"></TestAtomComponent>
            <TestAtomComponent text="Albums Liked"></TestAtomComponent>
        </StyledDiv>
    );
}

export default Sidebar;