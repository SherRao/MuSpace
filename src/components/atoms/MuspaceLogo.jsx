import React from "react";
import Styled from "styled-components";
import { Logo } from "@assets";

const StyledImage = Styled.img`
    margin: 20px auto;
    transition: all 0.25s ease;
    width: 100%;

    :hover {
        filter: brightness(75%);
        transition: all 0.25s ease;
    }
`;

const StyledLink = Styled.a`
    width: ${(props) => props.width};
    padding: 10px;
`;

function MuspaceLogo({width}) {
    return (
        <StyledLink href="/" width={width}>
            <StyledImage src={Logo}></StyledImage>
        </StyledLink>
    );
}

export default MuspaceLogo;