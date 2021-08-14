import React from "react";
import Styled from "styled-components";
import { Firebase } from "@functions";

const Result = Styled.div`
    display: flex;
    flex-direction: row;
    width: calc(100%-1.2em);
    padding: 0.6em;
    font-size: ${props => props.theme.fontSizes.medium};
    text-decoration: none;
    font-weight: bold;
    align-items: center;

    border-style: solid;
    border-color: ${props => props.theme.colors.lightGrey};
    border-width: 1px 0 0 0;

    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.white};
    :hover {
        background-color: ${props => props.theme.colors.lightGrey};
        color: ${props => props.theme.colors.purple};
    }

    transition: all 0.25s ease;
`;

const Pic = Styled.img`
    width: auto;    
    height: 2.4em;
    border-radius: 100%;
    margin-right: 1.2em;
`;

const AddButton = Styled.button`
    width: 12em;
    height: 100%;
    margin-left: 0.6em;
    padding: 0.6em;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background-color: ${props => props.theme.colors.purple};
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontSizes.medium};
    border-radius: 0.45em;
    border-width: 0;
    border-style: solid;
    cursor: pointer;

    :hover {
        transition: all 0.25s ease;
        filter: brightness(75%);
    }

    transition: all 0.25s ease;
`;

const RemoveButton = Styled(AddButton)`
    background-color: ${props => props.theme.colors.white};
    border-width: 2px;
    border-color: ${props => props.theme.colors.purple};
    color: ${props => props.theme.colors.purple};
`;

function SearchResult({ first, username, profile_picture, id, isFriend }) {
    const [friend, setFriend] = React.useState(isFriend);

    async function handleAdd(event) {
        event.preventDefault();
        await Firebase.addFriend(id);
        setFriend(true);
    };
    async function handleRemove(event) {
        event.preventDefault();
        await Firebase.removeFriend(id);
        setFriend(false);
    };
    return (
        <Result href="/" style={{ border: (first ? "0px" : "") }}>
            <Pic src={profile_picture} alt={username + " profile picture"} />
            {username}
            <div style={{ display: "flex", flexGrow: "1" }} />
            {friend
                ? <RemoveButton onClick={handleRemove}>Remove Friend</RemoveButton>
                : <AddButton onClick={handleAdd}>Add Friend</AddButton>
            }
        </Result>
    );
}

export default SearchResult;