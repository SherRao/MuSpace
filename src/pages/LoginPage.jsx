import React from "react";
import Styled from "styled-components";
import { MuspaceLogo, TextButton } from "@atoms";
import { LoginForm } from "@molecules";
import { Redirect } from "react-router-dom";

import Firebase from "@functions";

const loggedIn = Firebase.isLoggedIn();

const StyledDiv = Styled.div`
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

const StyledHeader = Styled.h3`
    color: ${props => props.theme.colors.purple};
    font-size: ${props => props.theme.fontSizes.medium};
    margin-bottom: -0.5em;
    padding-bottom: 0.5em;
`;

const StyledLinkText = Styled.a`
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

const StyledLinkDiv = Styled.div`
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
    if (!loggedIn)
        return (
            <StyledDiv>
                <MuspaceLogo width="25em"/>
                <StyledHeader>Log in</StyledHeader>
                <LoginForm />
                <TextButton text="Log in"onClick={() => {Firebase.loginWithEmail();}}/>
                <StyledLinkDiv>
                    <StyledLinkText href="#">Forgot Password</StyledLinkText>
                    <Dot />
                    <StyledLinkText href="/register">Sign Up</StyledLinkText>
                </StyledLinkDiv>
            </StyledDiv >
        );

    else
        return <Redirect to="/" />;
}

export default LoginPage;