import React from "react";
import Styled from "styled-components";
import { DefaultCover } from "@assets";

const StyledImage = Styled.img`

    margin: 10px 10px 10px 10px;
    transition: all 0.25s ease;
    width: ${(props) => props.width};

    border-radius: 0.6rem;
    border-style: hidden;

    :hover {
        filter: brightness(75%);
        transition: all 0.25s ease;
    }
`;
/*
    border-style: hidden; 
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
*/
/*  the shadow incase we want it back
    border-style: hidden;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 12px 0 rgba(0, 0, 0, 0.19);
*/

const StyledLink = Styled.a`
`;

function AlbumCover({ width, album_picture, link }) {
    return (
        <StyledLink onClick={notImplemented}>
            <StyledImage src={album_picture ? album_picture : DefaultCover} width={width} height="auto"></StyledImage>
        </StyledLink>
    );
}
function notImplemented(){
    alert("This feature has not been implemented yet!");
}

export default AlbumCover;