import React from "react";
import Styled from "styled-components";
import { Route, Redirect } from "react-router-dom";
import { Sidebar } from "@organisms";

import Firebase from "@functions";
const loggedIn = Firebase.isLoggedIn();

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

// eslint-disable-next-line no-unused-vars
function ProtectedRoute({ exact = false, path, component }) {
    if (loggedIn)
        return (
            <StyledDiv>
                <Sidebar />
                <PageContainer>
                    <Route path={path} component={component} />
                </PageContainer>
            </StyledDiv>
        );

    else
        return <Redirect to="/login" />;

}

export default ProtectedRoute;