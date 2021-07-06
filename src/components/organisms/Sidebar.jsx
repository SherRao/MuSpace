import React from "react";
import Styled from "styled-components";
import { SidebarButton, MuspaceLogo } from "@atoms";
import { FaHome, FaUserFriends, FaEnvelope, FaSpotify } from "react-icons/fa";

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
            <MuspaceLogo />
            <SidebarButton text="Home" location="/" />
            <SidebarButton text="Friends"  location="/friends" />
            <SidebarButton text="Messages" location="/messages" />
            <SidebarButton text="Spotify" location="/" />

        </StyledDiv>
    );
}

export default Sidebar;