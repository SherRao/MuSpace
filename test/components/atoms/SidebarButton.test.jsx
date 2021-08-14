import React from "react";
import Styled from "styled-components";

const StyledButton = Styled.a`
    color: ${props => props.theme.colors.grey};
    width: 80%;
    height: 8%;
    align-self: center;
    border: 0px;
    border-radius: 15px;
    margin: 0.2rem 0;
    background-color: ${props => props.theme.colors.white};
    text-decoration: none;

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

const StyledText = Styled.p`
    @media (max-width: 974px){
        display: none;
    }

    font-family: "Roboto";
        
    font-size: ${props => props.theme.fontSizes.largeMedium};
    font-weight: 400;
        
    color: ${props => props.theme.colors.purple};
        
    align: left;
    margin: 0.1rem 0.4rem 0 0.4rem;
`;

const StyledIcon = Styled.div`
    align: left;
    max-width: 20%;
    height: auto;

    padding: 2px 8px;
    color: ${props => props.theme.colors.purple};

    *{
        display: block;
        margin: 0 0.5em;
        width: 2em;
        height: 2em;
    }

    @media (max-width: 974px){
        align: center;
        max-width: 100%;
    }
`;

function SidebarButton({ text, children, location }) {
    return (
        <StyledButton href={location}>
            <StyledIcon>{children}</StyledIcon>
            <StyledText>{text}</StyledText>
        </StyledButton>
    );
}

export default SidebarButton;