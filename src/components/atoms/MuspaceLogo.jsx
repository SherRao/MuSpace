import React from "react";
import Styled from "styled-components";
import { Logo } from "@assets";

//margin: T R B L
const StyledImage = Styled.img`
    margin: 20px auto 20px auto;
    transition: all 0.25s ease;
    width: ${(props) => props.width};

    :hover {
        filter: brightness(75%);
        transition: all 0.25s ease;
    }
`;

const StyledLink = Styled.a`
`;

function MuspaceLogo({width}) {
    return (
        <StyledLink href="/">
            <StyledImage src={Logo} width={width}></StyledImage>
        </StyledLink>
    );
}

export default MuspaceLogo;