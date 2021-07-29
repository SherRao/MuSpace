import React from "react";
import Styled from "styled-components";
import { Redirect } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { MuspaceLogo } from "@atoms";
import { GoogleSigninButton } from "@atoms";
import { LoginForm } from "@molecules"; 

import { Firebase } from "@functions";

const Container = Styled.div`
    width: calc(100vw - 6em);
    height: max-content;
    padding: auto auto;

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

const Header = Styled.h3`
    color: ${props => props.theme.colors.purple};
    font-size: ${props => props.theme.fontSizes.medium};
    margin-bottom: -0.5em;
    padding-bottom: 0.5em;
`;

const LinkText = Styled.a`
    color: ${props => props.theme.colors.lightBlue};
    text-decoration: none;
    transition: all 0.25s ease;

    padding-left: 1em;
    padding-right: 1em;

    :hover {
        color: ${props => props.theme.colors.darkBlue};
        transition: all 0.25s ease;
    }
`;

const LinkedTextDiv = Styled.div`
    display: inline-flex;
    flex-direction: row;
    margin: 1em;
    align-items: center;
    justify-content: center;
    padding: 1em;
    width: 100%;
`;

const Dot = Styled.span`
    height: 0.5em;
    width: 0.5em;
    background-color: ${props => props.theme.colors.grey};
    border-radius: 50%;
    display: inline-block;
`;

function LoginPage() {
    return (
        <Container>
            <MuspaceLogo width="25rem"/>
            <Header>Log in</Header>
            
            <LoginForm onSubmit={Firebase.loginWithEmail}/>
            <GoogleSigninButton text="Login with Google" type="text" onClick={Firebase.loginWithGoogle}/>

            <LinkedTextDiv>
                <LinkText href="/reset">Forgot Password</LinkText>
                <Dot />
                <LinkText href="/register">Sign Up</LinkText>
            </LinkedTextDiv>
        </Container >
    );
}

export default LoginPage;