import React from "react";
import Styled from "styled-components";
import { SidebarButton, MuspaceLogo } from "@atoms";
import { FaHome, FaUserFriends, FaEnvelope, FaSpotify } from "react-icons/fa";

const StyledDiv = Styled.div`
    max-width: 20vw;
    height: 100vh;
    background-color: ${props => props.theme.colors.white};
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.25s ease;
    min-width: 20vw;
    border-right: 1px solid ${props => props.theme.colors.lightGrey};
    padding: 20px 0;

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
            <SidebarButton text="Spotify" location="/" />

        </StyledDiv>
    );
}

export default Sidebar;