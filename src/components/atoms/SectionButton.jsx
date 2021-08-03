import React from "react";
import Styled from "styled-components";

const StyledButton = Styled.button`
    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.lightGrey};
    border-radius: 30px;
    border: none;
    
    width: max-content;
    font-size: ${props => props.theme.fontSizes.mediumSmall};
    transition: all 0.25s ease;
    margin: 0em 0em 0.8em 0.4em;
    padding: 0.5em;

    :hover {
        background-color: ${props => props.theme.colors.mediumGrey};
        filter: brightness(100%);
        
        transition: all 0.25s ease;
        cursor: pointer;
    }


`;

function SectionButton({text, type, onClick}){
    return(
        <StyledButton type={type} onClick={onClick}>{text}</StyledButton>
    );
}

export default SectionButton;