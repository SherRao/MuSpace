import React from "react";
import Styled from "styled-components";
import { MuspaceLogo } from "@atoms";

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
    font-size: ${props => props.theme.fontSizes.large};
    margin-bottom: -0.5em;
    padding-bottom: 0.5em;
`;

function ResetPage() {
    return (
        <Container>
            <MuspaceLogo width="25rem"/>
            <Header>Please check your email for the reset password link!</Header>
        </Container >
    );
}

export default ResetPage;