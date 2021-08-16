import React from "react";
import Styled from "styled-components";

import { Firebase } from "@functions";
import { FriendsMessageButton, ChatBubble, TextButton, Field } from "@atoms";

const Panels = Styled.div`
    width: 100%;
    heigth: 100%;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
`;

const LeftDiv = Styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-width: 12em;
    max-width: max-content;
    height: 100%;
`;

const RightDiv = Styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 4;
    height: 100%;
    margin-left: 1.2em;
`;

const StyledText = Styled.p`
    font-family: ${props => props.theme.fonts.title};
    margin: 0;
    color: ${props => props.theme.colors.black};
    font-weight: bold;
    text-align: center;
`;

const Title = Styled(StyledText)`
    font-size: ${props => props.theme.fontSizes.mediumLarge};
`;

const FriendsListDiv = Styled.div`
    display: flex;
    flex-direction: column;
    height: 87%;
    overflow: auto;
    padding: 0.2em;
`;

const SendDiv = Styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1.2em 0;
`;

const Chats = Styled.div`
    display: flex;
    flex-direction: column;
    min-height: 87%;
    height: max-content;
    overflow: auto;
    padding: 0.2em;
`;

const NoFriends = Styled.p`
    font-size: ${props => props.theme.fontSizes.medium}
    font-color: ${props => props.theme.colors.black}
    text-align: center;
`;

const friendList = [];

function MessagesPage() {
    const [friends, setFriends] = React.useState(null);
    const [activeFriend, setActiveFriend] = React.useState(null);
    const [activeChat, setActiveChat] = React.useState(null);
    const [friendUsername, setFriendUsername] = React.useState(null);
    const [messages, setMessages] = React.useState(null);
    const [box, setBox] = React.useState("");

    // on component did mount
    React.useEffect(async () => {
        if(!friends) {
            const friendIds = await Firebase.getFriends();
            for(let i=0; i<friendIds.length; i++) {
                try {
                    friendList.push(await Firebase.getUser(friendIds[i]));
                } catch (err) {
                    console.log(err);
                }
            }
            setFriends(friendList);
        }
        if(!activeFriend) {
            setActiveFriend(friendList[0].id);
            setFriendUsername(await Firebase.getFriendUsername(friendList[0].id));
            const chat = await Firebase.getChatForFriend(friendList[0].id);
            setActiveChat(chat);
            const messageObj = await Firebase.getChat(chat);
            if(messageObj)
                setMessages(messageObj.messages);
        }
    }, [friends]);
    // on friend clicked
    React.useEffect(async () => {
        if(activeFriend) {
            setFriendUsername(await Firebase.getFriendUsername(activeFriend));
            const chat = await Firebase.getChatForFriend(activeFriend);
            setActiveChat(chat);
            const messageObj = await Firebase.getChat(await Firebase.getChatForFriend(activeFriend));
            if(messageObj)
                setMessages(messageObj.messages);
        }
    }, [activeFriend]);

    // text field box change
    function boxChange(event) {
        setBox(event.target.value);
    }

    async function handleClick(event) {
        if(box !== "") {
            const newChat = await Firebase.sendChat(box, activeChat);
            setMessages([...messages, newChat]);
            setBox("");
        }
    }

    return (
        <Panels>
            <LeftDiv>
                <Title>Friends</Title>
                <FriendsListDiv>
                    {friendList && friendList.length > 0
                        ? friendList.map(({ username, profile_picture, id }, i) => {
                            const isActiveFriend = activeFriend && activeFriend === id;
                            return <FriendsMessageButton username={username} profile_picture={profile_picture} type="text" active={isActiveFriend} onClick={ () => setActiveFriend(id) } key={i} />
                        })
                        : <NoFriends>You have not added any friends yet.</NoFriends>
                    }
                </FriendsListDiv>
            </LeftDiv>
            <RightDiv>
                <Title>{friendUsername ? friendUsername : "Username"}</Title>
                <Chats>
                    {
                        messages
                        ? messages.map(({ sender, message, timestamp }, i) =>
                            <ChatBubble from={ sender === Firebase.auth.currentUser.uid ? "user" : "friend" } timestamp={timestamp} key={i} >{message}</ChatBubble>
                        ) : null
                    }
                </Chats>
                <SendDiv>
                    <Field placeholder="Your message here" onChange={boxChange} value={box} />
                    <TextButton text="Send" style={{margin: 0, marginLeft: "1.2em"}} onClick={ handleClick } />
                </SendDiv>
            </RightDiv>
        </Panels>
    );
}

export default MessagesPage;