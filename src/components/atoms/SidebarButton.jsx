import React from "react";
import Styled from "styled-components";

const StyledDiv = Styled.div`
    color: ${props => props.theme.colors.grey};
    width: 80%;
    height: 8%;
    align-self: center;
    border-radius: 15px;

    margin: 0.2rem 0;

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
    text-decoration: none;
`;

const StyledText = Styled.p`
    @media (max-width: 974px){
        display: none;
    }

    font-family: "Roboto";
        
    font-size: ${props => props.theme.fontSizes.medium};
    font-weight: 400;
        
    color: ${props => props.theme.colors.purple};
        
    align: left;
    margin: 0.2rem 0.4rem 0 0.8rem;
`;

const StyledIcon = Styled.div`
     align: left;
     max-width: 20%;
     height: auto;
     flex: 1;
   
     padding: 2px;
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