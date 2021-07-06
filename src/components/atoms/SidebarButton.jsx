import React from "react";
import {Component} from "react";
import Styled from "styled-components";

const StyledDiv = Styled.div`
    color: ${props => props.theme.colors.grey};
    width: 75%;
    height: 10vh;
    align-self: center;

    display: inline-flex;
    flex-direction: row;
    align-items: center;
    transition: all 0.25s ease;

    :hover *{
        transition: all 0.25s ease;
        filter: brightness(75%);
    }

    :hover {
        cursor: pointer;
        background-color: ${props => props.theme.colors.lightGrey};

    }

`;

const StyledLink = Styled.a`
    border: none;
    padding: 0;
    size: 0;
    display: block;
    margin: 0 auto;
    text-decoration: none;

`;

const StyledText = Styled.p`
    font-family: "Roboto";
    font-size: ${props => props.theme.fontSizes.medium};
    color: ${props => props.theme.colors.muSpacePurple};
    font-weight: bold;
    align: right;
    flex: 1;
    margin: 0px;
`;

// const StyledIcon = Styled.img`
//     align: left;
//     max-width: 40%;
//     height: auto;
//     flex: 1;
//     margin: 0px;
//     padding: 3px;
// `;

function SidebarButton({ text, icon, location }) {
    return (
        <StyledDiv>
            <StyledLink href={location}>
                <StyledText>{text}</StyledText>
            </StyledLink>
        </StyledDiv>
    );
}

export default SidebarButton;