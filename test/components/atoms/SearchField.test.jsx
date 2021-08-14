import React from "react";
import Styled from "styled-components";

const TextInput = Styled.input`
    width: 100%;
    height: 100%;

    background-color: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.pink};
    border-radius: 0.45em;
    
    color: ${props => props.theme.colors.black};

    padding: 1em;
    transition: all 0.25s ease;

    :focus {
        border: 1px solid ${props => props.theme.colors.lightBlue};
        outline: none;

        transition: all 0.25s ease;
    }
`;

function SearchField({ text, type, placeholder, icon, onChange }) {
    return (
        <TextInput value={text} type={type} placeholder={placeholder} onChange={onChange} />
    );
}

export default SearchField;
