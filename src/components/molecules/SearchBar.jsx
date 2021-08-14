import React from "react";
import Styled from "styled-components";

import { Card, SearchField, SearchResult } from "@atoms";
import { Firebase } from "@functions";

import { FiSearch as SearchIcon } from "react-icons/fi";
import { MdClear as ClearIcon } from "react-icons/md";

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

const SearchButton = Styled.button`
    width: 12em;
    margin-left: 0.6em;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background-color: ${props => props.theme.colors.purple};
    border-radius: 0.45em;
    border-width: 0;

    :hover {
        transition: all 0.25s ease;
        filter: brightness(75%);
    }

    transition: all 0.25s ease;
`;

const ClearButton = Styled(SearchButton)`
    width: 5em;
    background-color: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.purple};
`;

const Search = Styled(SearchIcon)`
    width: auto;
    height: 1.8em;
    color: ${props => props.theme.colors.white};
`;

const Clear = Styled(ClearIcon)`
    width: auto;
    height: 1.8em;
    color: ${props => props.theme.colors.purple};
`;

function SearchBar() {
    const [users, setUsers] = React.useState(null);
    const [query, setQuery] = React.useState("");
    
    function handleChange(event) {
        setQuery(event.target.value);
        if(event.target.value === "") {
            setUsers(null);
        }
    };

    async function handleClick(event) {
        event.preventDefault();
        if(query) {
            const results = await Firebase.searchUsernames(query);
            setTimeout(() => setUsers(results), 500); // TODO: sus
        }
    };

    function handleClear(event) {
        event.preventDefault();
        setUsers(null);
        setQuery("");
    };

    const hidden = users === null;
    return (
        <Form>
            <Row>
                <SearchField onChange={handleChange} type="text" placeholder="Search..." text={query} />
                <ClearButton onClick={handleClear}><Clear/></ClearButton>
                <SearchButton onClick={handleClick}><Search/></SearchButton>
            </Row>
            <SearchResults style={{visibility: hidden ? "hidden" : "visible", display: hidden ? "none" : "flex" }}>
                { hidden
                ? null
                : (users.length === 0
                    ? <NoResults>No results found...</NoResults>
                    : users.map(({ username, id, profile_picture, isFriend }, i) => (
                        <SearchResult username={username} profile_picture={profile_picture} id={id} key={i} first={i === 0} isFriend={isFriend} />
                    ))
                )}
            </SearchResults>
        </Form>
    );
}

export default SearchBar;