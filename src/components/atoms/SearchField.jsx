import React from "react";
import Styled from "styled-components";

const StyledTextInput = Styled.input`
    width: 100%;
    height: 1.5em;

    border: 1px solid ${props => props.theme.colors.pink};
    color: ${props => props.theme.colors.lightGrey};

    border-radius: 0.45em;
    padding: 1em;
    background-color: transparent;
    transition: all 0.25s ease;

    :focus {
        border: 1px solid ${props => props.theme.colors.lightBlue};
        outline: none;

        transition: all 0.25s ease;
    }
`;

function SearchField({ text, type, placeholder, icon }) {
    return (
        <StyledTextInput text={text} type={type} placeholder={placeholder} />
    );
}

export default SearchField;
