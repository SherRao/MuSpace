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
    height: 87%;
    overflow: auto;
    padding: 0.2em;
`;

const NoFriends = Styled.p`
    font-size: ${props => props.theme.fontSizes.medium}
    font-color: ${props => props.theme.colors.black}
    text-align: center;
`;

function MessagesPage() {
    const [friends, setFriends] = React.useState(null);

    React.useEffect(async () => {
        if(!friends) {
            const friendIds = await Firebase.getFriends();
            const friendList = [];
            for(let i=0; i<friendIds.length; i++) {
                try {
                    friendList.push(await Firebase.getUser(friendIds[i]));
                } catch (err) {
                    console.log(err);
                }
            }
            setFriends(friendList);
        }
    }, [friends]);

    const friendList = friends ? friends : [];
    return (
        <Panels>
            <LeftDiv>
                <Title>Friends</Title>
                <FriendsListDiv>
                    {friendList && friendList.length > 0
                        ? friendList.map(({ username, profile_picture }, i) => 
                            <FriendsMessageButton username={username} profile_picture={profile_picture} type="text" onClick={() => console.log("test")} key={i} />)
                        : <NoFriends>You have not added any friends yet.</NoFriends>
                    }
                </FriendsListDiv>
            </LeftDiv>
            <RightDiv>
                <Title>Username</Title>
                <Chats>
                    <ChatBubble from="friend">Hi</ChatBubble>
                    <ChatBubble from="user">What up?</ChatBubble>
                </Chats>
                <SendDiv>
                    <Field placeholder="Your message here" />
                    <TextButton text="Send" style={{margin: 0, marginLeft: "1.2em"}} />
                </SendDiv>
            </RightDiv>
        </Panels>
    );
}

export default MessagesPage;