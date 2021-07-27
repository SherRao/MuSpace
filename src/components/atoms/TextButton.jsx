import React from "react";
import Styled from "styled-components";

const StyledButton = Styled.button`
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.purple};
    border-radius: 33px;
    margin-top: 2.5em;

    font-size: ${props => props.theme.fontSizes.medium};
    width: 22em;
    padding: 1em 0 1em 0;
    border: 0px; 

    :focus {
        border: 0px solid ${props => props.theme.colors.lightBlue};
        outline: none;

        transition: all 0.25s ease;
        cursor: pointer;
    }

    :hover {
        border: 0px solid ${props => props.theme.colors.lightBlue};
        outline: none;

        filter: brightness(75%);
        transition: all 0.25s ease;
        cursor: pointer;
    }
`;

function TextButton({text, type, onClick}) {
    return (
        <StyledButton type={type} onClick={onClick}>{text}</StyledButton>
    );
}

export default TextButton;