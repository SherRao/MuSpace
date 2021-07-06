import React from "react";
import {Component} from "react";
import Styled from "styled-components";

const StyledDiv = Styled.div`
    color: ${props => props.theme.colors.grey};
    width: 75%;
    height: 10vh;
    align-self: center;
    border-radius: 15px;

    display: inline-flex;
    flex-direction: row;
    align-items: center;
    transition: all 0.25s ease;

    :hover *{
        color: ${props => props.theme.colors.pink};
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
    text-decoration: none;

`;

const StyledText = Styled.p`
    font-family: "Roboto";
    font-size: ${props => props.theme.fontSizes.medium};
    font-weight: bold;
    color: ${props => props.theme.colors.grey};
    
    align: left;
    flex: 1;
    margin: 0;
`;

 const StyledIcon = Styled.div`
     align: left;
     max-width: 40%;
     height: auto;
     flex: 1;
     margin: 0px;
     padding: 3px;

     *{
        display: block;
        margin: 0 auto;
        width: 2em;
        height: 2em;
     }
`;

function SidebarButton({ text, icon, children, location }) {
    return (
        <StyledDiv>
            <StyledIcon>{children}</StyledIcon>
            <StyledLink href={location}>
                <StyledText>{text}</StyledText>
            </StyledLink>
            
        </StyledDiv>
    );
}

export default SidebarButton;