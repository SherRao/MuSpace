import React from "react";
import Styled from "styled-components";
import { Redirect } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { MuspaceLogo } from "@atoms";
import { GoogleSigninButton } from "@atoms";
import { LoginForm } from "@molecules"; 

import { Firebase } from "@functions";

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
    const [user] = useAuthState(Firebase.firebase.auth());
    if(user)
        return (<Redirect to="/home"/>);

    return (
        <Container>
            <MuspaceLogo width="25em"/>
            <Header>Log in</Header>
            
            <LoginForm onSubmit={loginWithEmail}/>
            <GoogleSigninButton text="Login with Google" type="text" onClick={loginWithGoogle}/>

            <LinkedTextDiv>
                <LinkText href="/reset">Forgot Password</LinkText>
                <Dot />
                <LinkText href="/register">Sign Up</LinkText>
            </LinkedTextDiv>
        </Container >
    );
}

function loginWithEmail(event) {
    event.preventDefault();

    const email = event.target.elements[0].value;
    const pass = event.target.elements[1].value;
    Firebase.auth.signInWithEmailAndPassword(email, pass)
        .catch((error) => {
            alert(error.message);
        
        } );
}

function loginWithGoogle() {
    const provider = new Firebase.firebase.auth.GoogleAuthProvider();
    Firebase.auth.signInWithPopup(provider);

}

export default LoginPage;