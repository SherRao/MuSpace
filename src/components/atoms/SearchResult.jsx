import React from "react";
import Styled from "styled-components";

const Result = Styled.a`
    display: flex;
    flex-direction: row;
    width: calc(100%-1.2em);
    padding: 0.6em;
    font-size: ${props => props.theme.fontSizes.medium};
    cursor: pointer;
    text-decoration: none;
    font-weight: bold;

    border-style: solid;
    border-color: ${props => props.theme.colors.lightGrey};
    border-width: 1px 0 0 0;

    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.white};
    :hover {
        background-color: ${props => props.theme.colors.lightGrey};
        color: ${props => props.theme.colors.purple};
    }
`;

const FirstResult = Styled(Result)`
    border: 0px;
`;

function SearchResult({ first, username, profile_pic, user_id }) {
    if (first === true) {
        return <FirstResult href="/">{username}</FirstResult>
    } else {
        return <Result href="/">{username}</Result>
    }
}

export default SearchResult;