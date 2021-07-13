import React from "react";
import Styled from "styled-components";
import { Route, Redirect } from "react-router-dom";

import { Firebase } from "@functions";
import { useAuthState } from "react-firebase-hooks/auth";

import { Sidebar } from "@organisms";

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
    width: 80vw;
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

function ProtectedRoute({ exact = false, path, component }) {
    const [user] = useAuthState(Firebase.auth);
    if (!user)
        return <Redirect to="/login" />;

    return (
        <StyledDiv>
            <Sidebar />
            <PageContainer>
                <Route path={path} component={component} />
            </PageContainer>
        </StyledDiv>
    );

}

export default ProtectedRoute;