import React from "react";
import Styled from "styled-components";
import { FriendsMessageButton, ChatBubble } from "@atoms";

const Panels = Styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;  
`;

const LeftDiv = Styled.div`
    display: flex;
    flex-direction: column;
    min-width: 12em;
    max-width: max-content;
    height: 100%;
`;

const RightDiv = Styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
`;

const StyledText = Styled.p`
    font-family: ${props => props.theme.fonts.title};
    margin: 0;
    color: ${props => props.theme.colors.black};
    font-weight: bold;
`;

const FriendsListTitle = Styled.p`
    font-size: ${props => props.theme.fontSizes.mediumLarge};
`;

const FriendsListDiv = Styled.div`
    display: flex;
    flex-direction: column;
    height: 87%;
    overflow: auto;
    padding: 0.2em;
`;

const Chats = Styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 87%;
    overflow: auto;
    padding: 0.2em;
`;

function MessagesPage() {
    return (
        <Panels>
            <LeftDiv>
                <FriendsListTitle>
                    <StyledText>Friends</StyledText>
                </FriendsListTitle>
                <FriendsListDiv>
                    <FriendsMessageButton text="Username" type="text" onClick={console.log("test")}/>
                </FriendsListDiv>
            </LeftDiv>
            <RightDiv>
                <div>
                    <h3>Username</h3>
                </div>
                <Chats>
                    <ChatBubble from="friend">Hi</ChatBubble>
                    <ChatBubble from="user">What up?</ChatBubble>
                </Chats>
                <div>
                    <p>Your message here</p>
                    <p>Send</p>
                </div>
            </RightDiv>
        </Panels>
    );
}

export default MessagesPage;