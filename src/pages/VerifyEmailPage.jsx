import React from "react";
import Styled from "styled-components";

import { Firebase } from "@functions";
import { MuspaceLogo } from "@atoms";
import { TextButton } from "@atoms";


const Container = Styled.div`
    width: 100vw;
    height: 100vh;
    padding: 5em;

    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: inline-flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.25s ease;
    background-color: ${props => props.theme.colors.black};

    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
`;

const Header = Styled.h1`
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontSizes.large};
`;

const SubHeader = Styled.h3`
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontSizes.medium};
    
`;

function VerifyEmailPage() {
    return (
        <Container>
            <MuspaceLogo></MuspaceLogo>
            <Header>Verify your email!</Header>
            <SubHeader>Click the link in the verification email and then click <a href="/">here</a>!</SubHeader>
            <TextButton text="Quit" type="text" onClick={Firebase.logout}/>

        </Container>
    );
}

export default VerifyEmailPage;