import React from "react";
import Styled from "styled-components";
import { SearchField } from "@atoms";

const StyledForm = Styled.form`


    border-radius: 7px;
    padding: 1em;
    background-color: transparent;
    transition: all 0.25s ease;
    height: 10px;
    :focus {
        border: 1px solid ${props => props.theme.colors.lightBlue};
        outline: none;
        transition: all 0.25s ease;
    }
    
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.25s ease;
    
`;


function SearchBar() {
    return (
        <StyledForm>
            <SearchField type="text" text="Search" placeholder="Search.." />
        </StyledForm>
    );
}

export default SearchBar;