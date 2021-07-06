import React from "react";
import Styled from "styled-components";
import { SidebarButton, MuspaceLogo } from "@atoms";
import { FaHome, FaUserFriends, FaEnvelope, FaSpotify } from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

import { AiFillHome, AiOutlineHome } from "react-icons/ai";     /* home button icon outline and fill*/
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";     /* friend button icon outline and fill*/
import { RiChat4Fill, RiChat4Line } from "react-icons/ri";     /* message button icon outline and fill*/

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

            <SidebarButton text="Home" location="/"><AiFillHome/></SidebarButton>
            <SidebarButton text="Friends"  location="/friends"><AiFillHeart/></SidebarButton>
            <SidebarButton text="Messages" location="/messages"><RiChat4Fill/></SidebarButton>

        </StyledDiv>
    );
}

export default Sidebar;