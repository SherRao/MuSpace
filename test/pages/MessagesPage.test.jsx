import React from "react";
import Styled from "styled-components";
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
    min-width: 12em;
    max-width: max-content;
    height: 100%;
`;

const RightDiv = Styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
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

const Title = Styled.p`
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

function MessagesPage() {
    return (
        <Panels>
            <LeftDiv>
                <Title>
                    <StyledText>Friends</StyledText>
                </Title>
                <FriendsListDiv>
                    <FriendsMessageButton text="Username" type="text" onClick={console.log("test")}/>
                </FriendsListDiv>
            </LeftDiv>
            <RightDiv>
                <Title>
                    <StyledText>Username</StyledText>
                </Title>
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