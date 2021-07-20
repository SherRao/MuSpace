import React from "react";
import Styled from "styled-components";
import { DefaultCover } from "@assets";

const StyledImage = Styled.img`
    margin-left: auto;
    margin-right: auto;
    transition: all 0.25s ease;
    width: ${(props) => props.width};

    :hover {
        filter: brightness(75%);
        transition: all 0.25s ease;
    }
`;

const StyledLink = Styled.a`
`;

function AlbumCover({ width }) {
    return (
        <StyledLink href="/">
            <StyledImage src={DefaultCover} width={width} height="auto"></StyledImage>
        </StyledLink>
    );
}

export default AlbumCover;