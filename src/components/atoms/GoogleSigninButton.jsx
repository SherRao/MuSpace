import React from "react";
import Styled from "styled-components";

const StyledButton = Styled.button`
    color: ${props => props.theme.colors.purple};
    background-color: ${props => props.theme.colors.white};
    border-radius: 33px;
    margin-top: 1em;

    font-size: ${props => props.theme.fontSizes.medium};
    width: 22em;
    padding: 1em 0 1em 0;
    border: 0px; 
    transition: all 0.25s ease;

    :focus {
        border: 0px solid ${props => props.theme.colors.lightBlue};
        outline: none;

        transition: all 0.25s ease;
        cursor: pointer;
    }

    :hover {
        border: 0px solid ${props => props.theme.colors.lightBlue};
        outline: none;
        color: ${props => props.theme.colors.white};
        background-color: ${props => props.theme.colors.purple};
        filter: brightness(100%);
        
        transition: all 0.25s ease;
        cursor: pointer;
    }
`;

function GoogleSigninButton({text, type, onClick}) {
    return (
        <StyledButton type={type} onClick={onClick}>{text}</StyledButton>
    );
}

export default GoogleSigninButton;