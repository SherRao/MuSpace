import React from "react";
import Styled from "styled-components";

import { SearchField } from "@atoms";

const StyledForm = Styled.form`
    padding: 2.5em 3vw 1.5em 3vw;
    background-color: transparent;
    transition: all 0.25s ease;
    height: min-content;
    
    display: flex;
    flex-direction: row;

    :focus {
        border: 1px solid ${props => props.theme.colors.lightBlue};
        outline: none;
        transition: all 0.25s ease;
    }

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