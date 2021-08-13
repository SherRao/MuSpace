import React from "react";
import Styled from "styled-components";
import { Route, Redirect } from "react-router-dom";

import { SearchBar } from "@molecules";
import { Sidebar } from "@organisms";

const LeftDiv = Styled.div`
    width: 18vw;
    height: 100vh;
    position: fixed;
`;

const RightDiv = Styled.div`
    width: 79vw;
    min-height: 100vh;
    height: max-content;

    left: 20vw;
    position: sticky;

    display: flex;
    flex-direction: column;
`;

const PageContainer = Styled.div`
    display: flex;
    flex-grow: 1;
    
    transition: all 0.25s ease;
`;

function ProtectedRoute({ component, isLoggedIn, isVerified, isSpotifyVerified, ...rest }) {
    const Component = component; // react sucks....
    if (isLoggedIn && isVerified && isSpotifyVerified) {
        return (<Route {...rest}>
            <LeftDiv>
                <Sidebar />
            </LeftDiv>
            <RightDiv>
                <SearchBar />
                <PageContainer>
                    <Component />
                </PageContainer>
            </RightDiv>
        </Route>);
            
    } else if(isLoggedIn && !isVerified) {
        return (
            <Route {...rest}>
                <Redirect to="/verify"/>
            </Route>
        );
        
    } else if(isLoggedIn && isVerified && !isSpotifyVerified) {
        return (
            <Route {...rest}>
                <Redirect to="/spotify-verify"/>
            </Route>
        );

    } else {
        return (
            <Route {...rest}>
                <Redirect to="/login"/>
            </Route>
        );
    }
}

export default ProtectedRoute;