import React from "react";
import Styled from "styled-components";
import { Route, Redirect } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { Firebase } from "@functions";

import { SearchBar } from "@molecules";
import { Sidebar } from "@organisms";

const StyledDiv = Styled.div`
    background-color: ${props => props.theme.colors.white};
    display: grid;
    grid-template-columns: 20vw auto;
    grid-auto-rows: 10vh auto;

    transition: all 0.25s ease;

    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
`;

const PageContainer = Styled.div`
    padding: 0;

    background-color: ${props => props.theme.colors.white};
    /*display: inline-flex;*/
    /*flex-direction: row;*/
    /*align-items: inline;*/
    grid-column-start: 2;

    transition: all 0.25s ease;

    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
`;

function ProtectedRoute({ exact = false, path, component }) {
    const [user] = useAuthState(Firebase.firebase.auth());
    if (!user)
        return <Redirect to="/login" />;

    else if(user && !user.emailVerified) 
        return <Redirect to="/verify" />;

    else 
        return (
            <StyledDiv>
                <Sidebar/>
                <SearchBar/>
                <PageContainer>
                    <Route exact={exact} path={path} component={component} />
                </PageContainer>
            </StyledDiv>
        );
}

export default ProtectedRoute;