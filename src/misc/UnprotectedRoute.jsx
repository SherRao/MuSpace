import React from "react";
import Styled from "styled-components";
import { Route, Redirect } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { Firebase } from "@functions";

const StyledDiv = Styled.div`
    width: 100vw;
    height: 100vh;
    padding: 0;

    background-color: ${props => props.theme.colors.white};
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    transition: all 0.25s ease;

    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
`;

const PageContainer = Styled.div`
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

function ProtectedRoute({ exact = false, path, component }) {
    const [user] = useAuthState(Firebase.firebase.auth());
    if (user && !user.emailVerified)
        return <Redirect to="/verify" />;

    else if(user) 
        return <Redirect to="/home" />;

    else 
        return (
            <StyledDiv>
                <PageContainer>
                    <Route exact={exact} path={path} component={component} />
                </PageContainer>
            </StyledDiv>
        );
}

export default ProtectedRoute;