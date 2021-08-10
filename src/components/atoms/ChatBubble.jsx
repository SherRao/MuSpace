import React from "react";
import Styled from "styled-components";

const Bubble = Styled.div`
    display: flex;
    flex-direction: ${props => props.from === "user" ? "row-reverse" : "row"};
    align-items: right;
`;

const Msg = Styled.p`
    max-width: 80%;
    background-color: ${props => props.from === "user" ? props.theme.colors.muSpacePurple : props.theme.colors.lightPurple};
    border-radius: 0.8em;
    padding: 0.8em;
`;

function ChatBubble({ from, children }) {
    return (
        <Bubble from={from}>
            <Msg from={from}>
                {children}
            </Msg>
        </Bubble>
    );
}

export default ChatBubble;