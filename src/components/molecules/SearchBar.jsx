import React from "react";
import Styled from "styled-components";

import { FiSearch as SearchIcon } from 'react-icons/fi';

import { Card, SearchField, SearchResult } from "@atoms";

const Row = Styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`;

const Form = Styled.form`
    margin: 1em 0 0 0;
    padding: 1.5em;
    width: calc(100%-5em);
    background-color: transparent;
    transition: all 0.25s ease;
    
    display: flex;
    flex-direction: column;

    :focus {
        border: 1px solid ${props => props.theme.colors.lightBlue};
        outline: none;
        transition: all 0.25s ease;
    }

    transition: all 0.25s ease;
`;

const SearchResults = Styled(Card)`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${props => props.theme.colors.white};
`;

const NoResults = Styled.p`
    display: flex;
    flex-direction: row;
    width: calc(100%-1.2em);
    padding: 0.6em;
    margin: 0;
    font-size: ${props => props.theme.fontSizes.medium};
    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.white};
`;

const Link = Styled.a`
    width: 6em;
    margin-left: 0.6em;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background-color: ${props => props.theme.colors.purple};
    border-radius: 0.45em;

    :hover {
        transition: all 0.25s ease;
        filter: brightness(75%);
    }

    transition: all 0.25s ease;
`;

const Icon = Styled(SearchIcon)`
    width: auto;
    height: 1.8em;
    color: ${props => props.theme.colors.white};
`;

function SearchBar() {

    return (
        <Form>
            <Row>
                <SearchField type="text" placeholder="Search..." />
                <Link href="/"><Icon/></Link>
            </Row>
            <SearchResults>
                <SearchResult username="Username" profile_pic="" user_id="" first={true} />
                <SearchResult username="Username" profile_pic="" user_id="" />
                <NoResults>No results found...</NoResults>
            </SearchResults>
        </Form>
    );
}

export default SearchBar;